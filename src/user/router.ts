import {UserController} from './UserController'

export function router (router) {
  /**
   * @api {post} /user/register register
   * @apiGroup user
   * @apiName register
   * @apiParamClass (src/user/io/Register.ts) {IRegister}
   * @apiSuccessClass (src/user/io/Register.ts) {ORegister}
   */
  router.post('/user/register', UserController.register)

  /**
   * @api {post} /user/registerOld registerOld
   * @apiGroup user
   * @apiName registerOld
   * @apiParam {String} name user's name
   * @apiParam {Number} age user's age
   * @apiSuccess {String} userId user's id 
   */
  router.post('/user/registerOld', UserController.register)
}