import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    addItem(itemValue) {
      var store = this.get('store');
      if(itemValue) {
        store.createRecord('item', {
          text: itemValue
        });
      }
    }
  }
});
