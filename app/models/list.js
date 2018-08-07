import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  dateStart: DS.attr('date'),
  dateEnd: DS.attr('date'),
  price: DS.attr('number'),
  email: DS.attr('string'),
  area: DS.attr('string'),
  number: DS.attr('number'),
  stName: DS.attr('string'),
  zipcode: DS.attr('number')
})
