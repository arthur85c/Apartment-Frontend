import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('sign-up')
  this.route('sign-in')
  this.route('change-password')
  this.route('apartments')
  this.route('list')
  this.route('apartment', {path: 'apartments/:apartment_id'})
  this.route('update', {path: 'update/:apartment_id'})
})

export default Router
