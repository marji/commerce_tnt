(function ($) {

Drupal.behaviors.shippingInfoFieldsetSummary = {
  attach: function (context) {
    $('fieldset#edit-shipping-info', context).drupalSetSummary(function(context) {
      var vals = [];
      $('#edit-shipping-info-active:checked', context).parent().each(function () {
        vals.push(Drupal.t('TNT Shipping Active'));
      });
      if (!$('#edit-shipping-info-active', context).is(':checked')) {
        vals.unshift(Drupal.t('TNT Shipping Inactive'));
      }
      vals.push(Drupal.t('Container Type: !container', {'!container' : $('#edit-shipping-info option:selected').text()}));
      vals.push(Drupal.t('Packages: !packages', {'!packages' : $('#edit-shipping-info-number-of-packages').val()}));
      return vals.join(', ');
    });
  }
};

})(jQuery);
