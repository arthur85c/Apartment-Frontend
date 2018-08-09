import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  startdate: DS.attr('string'),
  enddate: DS.attr('string'),
  price: DS.attr('number'),
  email: DS.attr('string'),
  area: DS.attr('string'),
  houseno: DS.attr('number'),
  stname: DS.attr('string'),
  zipcode: DS.attr('number'),
  city: DS.attr('string'),
  apartment: DS.belongsTo('apartment')
})
