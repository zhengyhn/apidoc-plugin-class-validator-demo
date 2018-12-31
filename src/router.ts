import * as KoaRouter from 'koa-router'
import {CommonResponse} from './middleware'

const router = new KoaRouter({prefix: '/api/v1'})

router.use('/', CommonResponse())
require('./user/router').router(router)

export default router