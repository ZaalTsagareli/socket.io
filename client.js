const net = require("net");

const client = new net.Socket();

client.connect(3000, "localhost", () => {
  console.log("Connected to server.");

  client.write(JSON.stringify({ path: "data", data: "rogor xar?", end: true }));
  client.write(
    JSON.stringify({
      path: "message",
      data: { name: "zaali", age: 15 },
      end: true,
    })
  );
});

// client.on("end", () => {
//   console.log("ended");
// });

client.on("data", (data) => {
  console.log(`Received data from server: ${data}`);
  client.end();
});