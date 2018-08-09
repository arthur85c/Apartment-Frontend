import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('house-avaliable', 'Integration | Component | house avaliable', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{house-avaliable}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#house-avaliable}}
      template block text
    {{/house-avaliable}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
