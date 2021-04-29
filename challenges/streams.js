const stream = require("stream");

function setupStreams(dataInputStream, dataOutputStream, callback) {
  // Write your code here
  // dataInputStream.pipe(dataOutputStream);

  dataInputStream.on("data", function (chunk) {
    const jsonData = JSON.parse(chunk.toString());
    dataOutputStream.write(jsonData);
    callback(chunk);
  });

  // dataOutputStream.write(chunk);
  // callback(chunk)
  // dataOutputStream.end();
}

let readable = new stream.Readable();
let writable = new stream.Writable({
  objectMode: true,
  write: (chunk, encoding, callback) => {
    console.log("chunk: ", chunk);
    callback(null, true);
  },
});
setupStreams(readable, writable, () => console.log("onEnd"));

readable.push('{ "log": "Request received" }');
readable.push('{ "lo22g": "Request received" }');
readable.push(null);
module.exports.setupStreams = setupStreams;


function xformer () {
  let count = 0

  return new Transform({
    objectMode: true,
    transform: (data, _, done) => {
      done(null, { ...data, index: count++ })
    }
  })
}