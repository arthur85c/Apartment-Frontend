import Component from '@ember/component'

export default Component.extend({
  newList: {
    houseno: null,
    name: null,
    stname: null,
    city: null,
    zipcode: null,
    area: null,
    startdate: null,
    enddate: null,
    email: null,
    price: null
  },
  actions: {
    createList () {
      this.sendAction('createList', this.get('newList'))
      this.set('newList.houseno', null)
      this.set('newList.name', null)
      this.set('newList.stname', null)
      this.set('newList.city', null)
      this.set('newList.zipcode', null)
      this.set('newList.area', null)
      this.set('newList.startdate', null)
      this.set('newList.enddate', null)
      this.set('newList.email', null)
      this.set('newList.price', null)
    }
  }
})
