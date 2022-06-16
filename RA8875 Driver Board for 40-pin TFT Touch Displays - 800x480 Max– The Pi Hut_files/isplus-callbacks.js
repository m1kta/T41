/*
  Callbacks for IS+
*/

var __isp_options = __isp_options || {};
      
__isp_options.isp_serp_callback = function(data, facets_only) {
  let items = data.items;
  let currentCurrency = localStorage.getItem('currency');
  console.log('items:');
  $.each(items, function(i,e) {
    let id = e.id,
        $item = $('li[product_id="' + id + '"]'),
        $price = $item.find('.isp_product_price');
    console.log(e);    
    
    addAttributes($price, e.p);
    
    if ( e.p_c > 0 ) { 
      let $comparePrice = $item.find('.isp_compare_at_price'),
          compareAtPrice = true; // needed if item has compare price
      addAttributes($comparePrice, e.p_c, compareAtPrice);
    }
    
    function addAttributes($priceSelector, price, compareAtPrice) {
      $priceSelector.attr('data-money-convertible', ''); // to make the convert function from theme-custom be applied    
    
      if ( e.c === 'GBP' ) {
        $priceSelector.attr('data-base-amount', price);
      }
      else {  
        let basePrice = window.Currency.convert(price, e.c, 'GBP');
        $priceSelector.attr('data-base-amount', '&pound; ' + basePrice.toFixed(2) );
        if ( compareAtPrice ) {
          $priceSelector.attr('data-base-amount', '&pound; ' + e.p_c ); // IS+ returns price in GBP for any currency when items has compare price
        }
      }
      
      let dataCurrency = $priceSelector.attr('data-currency'),
          dataCurrencyAmount = $priceSelector.attr('data-currency-' + dataCurrency.toLowerCase() );      
    
      switch (dataCurrency) {
        case 'GBP':
          if ( dataCurrencyAmount.indexOf('&pound;') < 0 ) {
            $priceSelector.removeAttr('data-currency-' + dataCurrency.toLowerCase());
          }
          break;

        case 'USD':
          if ( dataCurrencyAmount.indexOf('&dollar;') < 0 ) {
            $priceSelector.removeAttr('data-currency-' + dataCurrency.toLowerCase());
          }
          break;

        case 'EUR':
          if ( dataCurrencyAmount.indexOf('&euro;') < 0 ) {
            $priceSelector.removeAttr('data-currency-' + dataCurrency.toLowerCase());
          }
          break;

        case 'CAD':
          if ( dataCurrencyAmount.indexOf('&dollar;') < 0 ) {
            $priceSelector.removeAttr('data-currency-' + dataCurrency.toLowerCase());
          }
          break;
      }
    }
    
  }); 
  
  setTimeout(function(){
    let searchResults = document.getElementById('isp_search_results_container');
    window.Conversion.default.convertAll(searchResults);
  }, 300);


} 

__isp_options.isp_serp_quickview_callback = function(d) {
  let price = $('[product_id="' + d + '"] .isp_product_price_wrapper').html(),
      $quickViewPrice = $('.isp_quick_view_content_wrapper .isp_quick_view_price_wrapper');

  
  $quickViewPrice.html( price );

} 

__isp_options.isp_dropdown_callback = function(li_element, item_data) {


  let currentCurrency = localStorage.getItem('currency');
  
  if ( item_data.type === 'm' ) {    
    var newPrice,
          from = '';
    li_element.find('.as_magento_price').attr({'data-base-amount': item_data.price, 'data-money-convertible': '' });
      
    window.Conversion.default.convertAll(li_element[0]);


    
  } // end if product

}