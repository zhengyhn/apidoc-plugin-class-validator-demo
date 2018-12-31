import * as Koa from 'koa'
import router from './router'
import * as bodyParser from 'koa-bodyparser'
import * as koaStatic from 'koa-static'
import 'reflect-metadata'

let app = new Koa()

app.use(bodyParser())
app.use(koaStatic('docs'))

app.use(router.routes())

const port = 10001
const server = app.listen(port)
console.log(`App start and listen in port ${port}`)

export {server}