import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doRegister() {
      alert('reg now');
    }
  },
  model() {
    return this.store.createRecord('user');
  }
});
