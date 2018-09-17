const PROXY_CONFIG = [{
  context: [
    "/api/**",
  ],
  target: "https://website-klutzer.firebaseapp.com",
  secure: true,
  changeOrigin: true,
}];

module.exports = PROXY_CONFIG;