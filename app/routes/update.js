import Route from '@ember/routing/route'

export default Route.extend({
  model (apartment) {
    return this.get('store').findAll('list', apartment.id)
  },
  actions: {
    update (apartment) {
      apartment.save()
      .then(() => this.transitionTo('apartments'))
      .then(() => this.get('flashMessages').success('Your listing have been updated!'))
      .catch(() => this.get('flashMessages').danger('This is not your listing, please only update your own listing!'))
      .then(() => this.transitionTo('apartments'))
    }
  }
})
