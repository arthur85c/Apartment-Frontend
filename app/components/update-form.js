import Component from '@ember/component'

export default Component.extend({
  actions: {
    update () {
      return this.sendAction('update', this.get('apartment'))
    }
  }
})
