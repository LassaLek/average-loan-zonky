const PROXY_CONFIG = [
  {
    context: [
      "/loans/marketplace"
    ],
    target: "https://api.zonky.cz",
    secure: false,
    changeOrigin: true
  }
];

module.exports = PROXY_CONFIG;
