import * as classTransformer from 'class-transformer'
import {validate} from 'class-validator'
import * as lodash from 'lodash'

export class ValidateUtil {
  private static instance: ValidateUtil

  private constructor () {
  }

  static getInstance () {
    return this.instance || (this.instance = new ValidateUtil())
  }

  async validate (Clazz, data): Promise<any> {
    const obj = classTransformer.plainToClass(Clazz, data)
    const errors = await validate(obj)
    if (errors.length > 0) {
      console.info(errors)
      throw new Error(lodash.values(errors[0].constraints)[0])
    }
    return obj
  }
}