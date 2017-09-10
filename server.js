var http      = require('http');
var express   = require('express');
var fs        = require('fs');
var io        = require('socket.io');
var Mustache  = require('mustache');

var app       = express();
var staticDir = express.static;
var server    = http.createServer(app);

io = io(server);

var opts = {
	port :      process.env.PORT || 3000,
	baseDir :   __dirname + '/public/'
};

io.on( 'connection', function( socket ) {

	socket.on( 'new-subscriber', function( data ) {
		socket.broadcast.emit( 'new-subscriber', data );
	});

	socket.on( 'statechanged', function( data ) {
		delete data.state.overview;
		socket.broadcast.emit( 'statechanged', data );
	});

	socket.on( 'statechanged-speaker', function( data ) {
		delete data.state.overview;
		socket.broadcast.emit( 'statechanged-speaker', data );
	});

});

[ 'css', 'js', 'images', 'plugin', 'lib' ].forEach( function( dir ) {
	app.use( '/' + dir, staticDir( opts.baseDir + dir ) );
});

app.get('/', function( req, res ) {

	res.writeHead( 200, { 'Content-Type': 'text/html' } );
	fs.createReadStream( opts.baseDir + '_client/index.html' ).pipe( res );

});

app.get('/master', function( req, res ) {

	res.writeHead( 200, { 'Content-Type': 'text/html' } );
	fs.createReadStream( opts.baseDir + '_master/index.html' ).pipe( res );

});

app.get( '/notes/:socketId', function( req, res ) {

	fs.readFile( opts.baseDir + 'plugin/notes-server/notes.html', function( err, data ) {
	  if(err){
	   console.log(err);
	  } else {
  		res.send( Mustache.to_html( data.toString(), {
  			socketId : req.params.socketId
  		}));
	  }
	});

});

// Listen for requests
server.listen( opts.port || null );