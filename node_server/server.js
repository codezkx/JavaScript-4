let http = require('http');
let url = require('url')
const server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname
    console.log(url.parse(req.url), 'url.parse(req.url)')
   
    // let {ext, base, name} = path.parse(pathname)
   
    if (pathname === '/jsonp') {
      // 第二个参数为true的时候把query设置成对象的格式
      let params = url.parse(req.url, true).query
      let data = JSON.stringify({ a: 1, b: 5 })
  
      // params对象格式
      console.log(params.callback)
      res.write(`window['${params.callback}']('${data}')`)
      res.end()
    }
    // res.write(`window')`)
    res.end()
  
  }).listen(5501, '127.0.0.1', function () {
    console.log('3003 启动 application/json')
  }) 
server.on('connection', function (e) {
    console.log('客户端连接已经建立');
});