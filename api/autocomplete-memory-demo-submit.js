export default function handler(request, response) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.status(200).send(`<!doctype html>
<html lang="zh-CN">
  <head><meta charset="UTF-8"><title>submitted</title></head>
  <body>submitted</body>
</html>`);
}
