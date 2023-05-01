import Koa from 'koa';

const app = new Koa();

// 日志中间件
app.use(async (ctx, next) => {
  const start = Date.now();
  console.log('[logger middleware] before await....');
  await next();
  console.log('[logger middleware] after await....');
  const ms = new Date().getTime() - start;
  console.log(`${ctx.method} ${ctx.url} ${ms}ms`);
});

// 响应
app.use(async (ctx) => {
  console.log('[response middleware] responce....');
  ctx.body = 'Hello Koa 2';
});

app.listen(3000);
