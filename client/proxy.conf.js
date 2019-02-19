const PROXY_CONFIG = [
{
  context: [
    "/api/visitor/**",
  ],
  target: "https://website-klutzer.firebaseapp.com",
  secure: true,
  changeOrigin: true,
},
{
  context: [
    "/api/room-environment-monitor-telemetry/**",
  ],
  target: "https://us-central1-iot-klutzer.cloudfunctions.net/RoomEnvironmentMonitorTelemetryHandler",
  secure: true,
  changeOrigin: true,
}
];

module.exports = PROXY_CONFIG;