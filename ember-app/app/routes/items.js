import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.get('store').push({
      data: [
        { id: 0, type: 'item', attributes: { text: 'Desks' } },
        { id: 1, type: 'item', attributes: { text: 'Chairs' } },
        { id: 2, type: 'item', attributes: { text: 'Coffee Cup' } }
      ]
    });
    return this.get('store').findAll('item');
  }
});
