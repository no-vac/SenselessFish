const websocket = require('websocket').w3cwebsocket;
const client = new websocket('wss://pubsub-edge.twitch.tv');

client.onopen = () => {
  console.log('WebSocketClient connected');
  client.send(JSON.stringify({ type: 'PING' }));

  const payload = {
    type: 'LISTEN',
    nonce: 'pointies',
    data: {
      topics: [`channel-points-channel-v1.${process.env.CHANNEL_ID}`],
      auth_token: process.env.OAUTH,
    },
  };
  client.send(JSON.stringify(payload));
  console.log(JSON.stringify(payload));
};
client.onclose = () => {
  console.log('WebSocketClient connection closed');
};
client.onmessage = (e) => {
  console.log(e.data);
};

module.exports = client;
