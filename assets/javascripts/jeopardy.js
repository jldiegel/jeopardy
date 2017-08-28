(function(){

let result

function reset()  {
  $.get("http://jservice.io/api/random", function(data){
    $('#select').html(data[0].question)
    $('#category').html(data[0].category.title)
    $('#value').html(data[0].value)
    result = data[0].answer
    console.log(result)
  })
}


$('#select').click(function(){
  reset()
})


$('#submitbutton').click(function(){
  if ($('#answer').val() == result){
    alert("Correct!")
    $('#score').html(parseInt($('#score').html()) + parseInt($('#value').html()))
    reset()
  }

  if ($('#answer').val() == ''){
    alert("You did not submit an answer")
  }

  if ($('#answer').val() !== result && $('#answer').val() !==''){
    alert("You got it wrong")
    reset()
  }

  $("#answer").val('');

})


})()
