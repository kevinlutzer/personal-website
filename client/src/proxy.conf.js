const PROXY_CONFIG = [{
  context: [
    "/RoomEnvironmentMonitor",
  ],
  target: "https://us-central1-iot-klutzer.cloudfunctions.net",
  secure: true,
  changeOrigin: true,
}];

module.exports = PROXY_CONFIG;