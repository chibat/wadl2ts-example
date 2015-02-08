/// <reference path="client.ts" />

$('#form').submit(()=>{
  var arg1 = $('#arg1').val();
  var arg2 = $('#arg2').val();
  client.calculator.add.get(arg1, arg2, (result)=>{
    $('#result').text(result.value);
  });
  return false;
});


