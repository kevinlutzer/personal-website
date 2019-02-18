const PROXY_CONFIG = [
// {
//   context: [
//     "/api/**",
//   ],
//   target: "https://website-klutzer.firebaseapp.com",
//   secure: true,
//   changeOrigin: true,
// },
{
  context: [
    "/api/**"
  ],
  target: "https://us-central1-iot-klutzer.cloudfunctions.net/RoomEnvironmentMonitorTelemetryHandler/",
  secure: true,
  changeOrigin: true,
}
];

module.exports = PROXY_CONFIG;