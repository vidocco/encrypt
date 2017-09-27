$(function () {
  $('#encrypt').click(function () {
    var message = $('#message').val();
    $('#output').html('');
    $('#output').text(gibberString(message));
  });
  $('#decrypt').click(function () {
    var dMessage = $('#dMessage').val().toString();
    $('#dOutput').html('');
    $('#dOutput').text(decodeString(dMessage));
    console.log(decodeString(dMessage));
  });
});