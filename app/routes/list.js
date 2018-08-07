import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    createList (newList) {
      console.log(newList)
      const newListing = this.get('store').createRecord('list', newList)
      console.log(newListing)
      newListing.save().then(() => this.refresh())
    }
  }
})
