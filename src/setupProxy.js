const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://e-commerce-web-site-ten.vercel.app",
      changeOrigin: true,
      secure: false,
    })
  );
};
