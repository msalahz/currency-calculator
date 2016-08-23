import Ember from 'ember';
const {Route, RSVP}=Ember;
export default Route.extend({
  model(){
    return RSVP.hash({
      total: 19.00,
      baseCurrency: {id: 1, code: 'USD', name: "US Dollar", rate: '-'},
      currencies: [
        {id: 1, code: 'CAD', name: "Canadian Dollar", rate: 1.3},
        {id: 2, code: 'EUR', name: "Euro", rate: .88},
        {id: 3, code: 'JPY', name: "Japanese Yen", rate: 100.09}
      ]
    });
  }
});
