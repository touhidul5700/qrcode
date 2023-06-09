/* ////////////////
QR code generator
///////////////// */

// Get the form element
var form = document.getElementById("qr-form");

// Listen for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the input values
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var contact = document.getElementById("contact").value;

  // Generate the text for the QR code
  var qrText = "Name: " + name + "\nAddress: " + address + "\nContact: " + contact;

  // Generate the QR code
  var qrCode = new QRCode(document.getElementById("qrcode"), {
    text: qrText,
    width: 128,
    height: 128
  });
});


 /* ///////////////
 QR code scan/generate switch */
/*  var isElement1Active = true;

 function toggleElements() {
   var element1 = document.getElementById('element1');
   var element2 = document.getElementById('element2');

   if (isElement1Active) {
     element1.disabled = true;
     element1.classList.add('hidden');

     element2.disabled = false;
     element2.classList.remove('hidden');
   } else {
     element1.disabled = false;
     element1.classList.remove('hidden');

     element2.disabled = true;
     element2.classList.add('hidden');
   }

   isElement1Active = !isElement1Active;
 } */








