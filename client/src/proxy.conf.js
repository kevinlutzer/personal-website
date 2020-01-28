const PROXY_CONFIG = [{
  context: [
    "/RoomEnvironmentMonitor/api/status/list",
  ],
  target: "https://us-central1-iot-klutzer.cloudfunctions.net",
  secure: true,
  changeOrigin: true,
}];

module.exports = PROXY_CONFIG;