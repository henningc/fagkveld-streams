# Node stream examples

Very basic examples to dip your toe in streams with. (hah!)

## Getting started

To get started, you need [Node.js](http://nodejs.org/) installed.
Nothing else is required.

Each file is run by running

	node *filename*

with the exception of `upper.js` which is required by `filecopy-2.js`.

## Example code

#### webserver-1.js

This is probably the most basic web server you can write. Nothing special to
note, except that req and res are streams in node. The `Transfer-Encoding` header is
set to chunked by default in node, indicating that data can be streamed to the
client through the response object.

`.end()` closes the stream, optionally with the last (or only) piece of data.

#### webserver-2.js

Same as above, but with correct `Content-Type` header for html content.

#### webserver-3.js

Sending a file to the client, not using streams. The entire file is loaded
into memory before it is sent to the client.

#### webserver-4.js

The file is loaded as a stream, and handlers are set up for the data and end events.
This used to be how data from one stream is written to another, and is still supported.

#### webserver-5.js

Same as above, but `.pipe()` is doing all the work instead of having to manually
set up event handlers.

#### filecopy-1.js

The easiest way of copying a file in node.

#### upper.js

A very basic example of a transform stream, showing how a custom stream module
can be implemented.

#### filecopy-2.js

Copying the file, but using upper.js to transform the contents before the file is
written.

## More info

- [Isaac Schlueter - Streams](https://dl.dropboxusercontent.com/u/3685/presentations/streams2/streams2-jsconfau.pdf)
- [James Halliday - Harnessing the awesome power of streams](http://www.youtube.com/watch?v=lQAV3bPOYHo)
- [James Halliday - Stream adventure](https://github.com/substack/stream-adventure)
- [James Halliday - Stream handbook](https://github.com/substack/stream-handbook)
