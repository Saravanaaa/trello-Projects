window.TrelloPowerUp.initialize({
    'card-buttons': function (t, options) {
      return [
        {
          text: 'Open Widget',
          callback: function (t) {
            return t.modal({
              url: 'https://notebook.zoho.com/app_zfinance/allnotes?serviceOrigin=https%3A%2F%2Fbooks.zoho.com&frameorigin=https%3A%2F%2Fbooks.zoho.com&integration_service=books&orgid=770845011',
              height: 500, // Set the desired height
              fullscreen: false,
              args: { text: 'Hello World!' }, // You can pass additional data if needed
            });
          },
        },
      ];
    },
  });