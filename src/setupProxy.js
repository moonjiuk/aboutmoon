const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware("/api",{
      target:"http://ec2-54-193-78-105.us-west-1.compute.amazonaws.com:8080",
      changeOrigin:true,
    })
  )
}