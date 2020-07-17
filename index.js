const Koa = require('koa')
const Cors = require('koa2-cors')
const Router = require('koa-router')
const request = require('koa2-request')

const corsConfig = {
  origin: ctx => '*'
}

const app = new Koa()
const cors = new Cors(corsConfig)
const router = new Router()

router.get('/luck/article/detail/:id', async ctx => {
  const { id } = ctx.params
  try {
    const response = await request({ url: `http://zhuangtianyu.com:1995/luck/article/detail/${id}` })
    ctx.body = response.body
  } catch {
    ctx.body = {
      status: false,
      data: {},
      messsage: 'detail fetch error occured.'
    }
  }
})

app
  .use(cors)
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)
