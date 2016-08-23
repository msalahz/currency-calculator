import Ember from 'ember';
const {Component, set, get}=Ember;
export default Component.extend({
  actions: {
    onCurrencyChange(currency){
      set(this, "selectedCurrency", currency);
      let convertedTotal = Number(get(this, "model.total")) * currency.rate;
      set(this, "convertedTotal", isNaN(convertedTotal) ? "" : convertedTotal.toFixed(2));
    },
    onBaseTotalChange(total){
      set(this, "model.total", total);
      let convertedTotal = Number(total) * get(this, "selectedCurrency.rate");
      set(this, "convertedTotal", isNaN(convertedTotal) ? "" : convertedTotal.toFixed(2));
    }
  }
});
