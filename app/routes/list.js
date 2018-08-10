import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    createList (newList) {
      const newListing = this.get('store').createRecord('list', newList)
      newListing.save()
      .then(() => this.transitionTo('apartments'))
      .then(() => this.get('flashMessages').success('Your listing have been created. It is now live in the apartments tab'))
      .catch(() => this.get('flashMessages').danger('A problem have occured, please try agin. If the problem persists, try logging out and in again.'))
    }
  }
})
