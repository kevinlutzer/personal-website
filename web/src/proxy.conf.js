const PROXY_CONFIG = [{
  context: [
    "/v1/visitor",
  ],
  target: "http://localhost:80",
  secure: true,
  changeOrigin: true,
}];

module.exports = PROXY_CONFIG;