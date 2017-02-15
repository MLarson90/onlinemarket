$(document).ready(function(){


$('#custInfo').submit(function(event){
  event.preventDefault();

  var flavor = $("input:radio[name=flavor]:checked").val();
  var beverage = $("#iceCream").val();










//customer info
  var nameInput = $('input#name').val();
  var ccInfoInput = $('input#ccInfo').val();
  var addressInput = $('input#address').val();
  var phoneInput = $('input#phone').val();

  $('.name').text(nameInput);
  $('.ccInfo').text(ccInfoInput);
  $('.address').text(addressInput);
  $('.phone').text(phoneInput);

  $('#conformation').show();
});
});
