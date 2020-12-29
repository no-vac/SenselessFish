let static = require('node-static');
let file = new static.Server(`${__dirname}/public`);

require('http')
  .createServer((req, res) => {
    req
      .addListener('end', () => {
        file.serve(req, res);
      })
      .resume();
  })
  .listen(5050);
