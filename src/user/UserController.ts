import { ValidateUtil } from '../lib'
import { IRegister } from "./io";
import {UserService} from './UserService'

export class UserController {
  static async register(ctx) {
    const iRegister = await ValidateUtil.getInstance().validate(IRegister, ctx.request.body)
    const oRegister = await UserService.register(iRegister)
    ctx.body = oRegister
  }
}