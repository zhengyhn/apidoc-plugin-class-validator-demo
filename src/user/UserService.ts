import { IRegister, ORegister } from "./io";

export class UserService {
  static async register(iRegister: IRegister): Promise<ORegister> {
    //
    // Your business domain code
    //
    return {
      userId: 'abc',
      buttons: [
        {
          text: 'aaa'
        }
      ]
    }
  }
}