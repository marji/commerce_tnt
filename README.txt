INTRODUCTION
============

Commerce TNT provides integration with the TNT Shipping API to retrieve a
a shipping price depending on delivery location, total weight, number of
packages, length, width and height. 


INSTALLATION
============

 1. Install and configure the dependencies. Check their README files for
    details.
 2. Install and enable the Commerce TNT module.


DEPENDENCIES
============

Commerce TNT depends on the following modules:

 *  commerce
 *  commerce_shipping
 
 You are also required to have an account with TNT (http://www.tnt.com)


CONFIGURATION & USAGE
=====================

There is a settings form to setup your TNT account information located at
admin/commerce/config/shipping/methods/tnt/edit

You are also required to enter information on each product entity in your store.

When you edit an entity you are presented with a TNT Shipping fieldset with
a form.

The "Activate TNT Shipping for this product" checkbox is purely there to make
the form elements required. 

#TODO This will eventually disable the related product entity from being added
to the shipping calculation.

The customer will be presented with TNT shipping options in the checkout which
is calculated through the TNT API.
