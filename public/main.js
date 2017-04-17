Zepto(function($){
  $(window).on("popstate", function() {
    handler.close();
  });

  $(".cta").on("click", (e) => {
    handler.open({
      amount: 500,
      currency: "usd",
      name: "Paul Makes Cards"
    });
    e.preventDefault();
  });

  var handler = StripeCheckout.configure({
    allowRememberMe: false,
    description: "A custom card made by Paul",
    image: "https://stripe.com/img/documentation/checkout/marketplace.png",
    key: "pk_test_CZMwGzLerwU45RGa9AXgRFG0",
    locale: "auto",
    token: () => {
      console.log("charged");
    }
  });
});
