import Component from '@ember/component'

export default Component.extend({
  newList: {},
  actions: {
    createList () {
      console.log('Component')
      return this.sendAction('createList', this.get('newList'))
    }
  }
})
