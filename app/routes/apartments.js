import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('list')
  },
  actions: {
    goToList (list) {
      this.transitionTo('apartment', list.id)
    },
    delete (apartment) {
      apartment.destroyRecord()
      .then(() => this.refresh())
    },
    update (list) {
      list.save()
    }
  }
})
