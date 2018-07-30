//check off specific todos by clicking
$("ul").on("click", "li", function(){//when li is clicked inside the ul
  $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(800, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){//13 = Enter key, means when we hit enter
      //grabbing new todo from input
      var todoText = $(this).val();
      //clearing input field
      $(this).val("");
      //create a new li and add to ul
      //append method takes a string and adds it to whatever element is selected
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
