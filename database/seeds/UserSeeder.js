'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const user = new User();
    user.email = 'maique.malmeida@gmail.com'
    user.password = '1234567'
    user.username = 'maiquemalmeida'
    await user.save()

    Factory
      .model('App/Models/User')
      .createMany(5)
  }
}

module.exports = UserSeeder
