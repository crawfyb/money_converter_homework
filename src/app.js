import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      exchangeRate: {},
      selectedCurrency: null
    },

    mounted() {
      this.getExchangeRate()
    },

    methods: {
      getExchangeRate: function () {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(exchangeRate => this.exchangeRate = exchangeRate)
      },

      selectedCurrencies: function (e) {
        const currency = e.target.value;
        this.selectedCurrency = this.exchangeRate[currency];
    },

}
  })
})
