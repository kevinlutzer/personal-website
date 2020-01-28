const PROXY_CONFIG = [{
  context: [
    "/api/visitor/**",
  ],
  target: "https://website-klutzer.firebaseapp.com",
  secure: true,
  changeOrigin: true,
}, 
{
  context: [
    "/RoomEnvironmentMonitor/api/status/**",
  ],
  target: "https://us-central1-iot-klutzer.cloudfunctions.net",
  secure: true,
  changeOrigin: true,
}];

module.exports = PROXY_CONFIG;