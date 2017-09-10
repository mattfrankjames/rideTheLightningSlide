# Reveal.js Presentation
This sample project implements an example slide presentation. It uses the open-source framework, [reveal.js](https://github.com/hakimel/reveal.js), which enables you to easily create beautiful presentations using HTML.

![](https://cdn.glitch.com/a787ebb0-b8ea-4a1f-8b6e-20d72cc6018d%2FslideShowGIF.gif)

The example implements reveal.js multiplexing and speaker notes support, so you can just remix and edit the presentation.

*   ##### Multiplexing
    Multiplexing allows your audience to view the slides of the presentation you are controlling on their own phone, tablet or laptop. As the master presentation navigates the slides, all client presentations will update in real-time. This is useful for giving presentations to a remote audience, like at a virtual conference.
    
*   ##### Speaker Notes
    Speaker notes can be used to present per-slide notes in a separate browser window. The notes window also gives you a preview of the next upcoming slide so it may be helpful even if you haven't written any notes.

## Getting Started
- Edit the main presentation file at `public/_client/index.html`.
- If you intend to use multiplexing, then [generate a token](https://tin-princess.glitch.me/token) and update the master presentation files at `public/_master/index.html`.

For more detailed setup instructions, see `setup.md`.