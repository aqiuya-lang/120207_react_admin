//?所有接口的封装类


import ajax from './ajax'

class Https {
  /**
   * 登录
   * @param {string} userId - 用户名
   * @param {string} password - 密码
   */

   postLogin = params => ajax('/login', params, "POST")
    
}

export default new Https()