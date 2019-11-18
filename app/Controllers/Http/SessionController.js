'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

/**
 * Resourceful controller for interacting with sessions
 */
class SessionController {

  /**
   * Create/save a new session.
   * POST sessions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    try {

      const {email, password} = request.all();

      const token = await auth.attempt(email, password)
      const user = await User.findByOrFail('email', email)

      return {token, user}
    }catch(err) {
      throw err;
    }
  }


}

module.exports = SessionController
