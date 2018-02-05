import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as session from 'koa-session';
import * as passport from 'koa-passport';

const app = new Koa();

app.keys = ['secret']
app.use(session({}, app))

app.use(passport.initialize())
app.use(passport.session())

app.use(async (ctx, next) => {
  console.log('Url:', ctx.url);
  await next();
});

app.use(bodyParser());

const router = new Router();
router.get('/login', async (ctx) => {
  ctx.body = 'Hello World!';
});

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');