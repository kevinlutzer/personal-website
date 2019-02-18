const PROXY_CONFIG = [{
  context: [
    "/api/visitor/**",
  ],
  target: "https://website-klutzer.firebaseapp.com",
  secure: true,
  changeOrigin: true,
}];

module.exports = PROXY_CONFIG;