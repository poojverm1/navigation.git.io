$(document).ready(()=>{


  
$( window ).resize(function() {
  // Adding table when window resized to below 500px
  if($(this).width() <= 500){
	  $("ul").addClass("list");
  
  $("div").addClass("toggle-menu");
 
 $(".toggle-menu").hover(function() {
  console.log("sdfjhfg");
  $("ul").removeClass("list").addClass("new_list_class");
  $("a").attr('id', 'link_id');
$("div").removeClass("toggle-menu");
  });
 
  }
  
else if($(this).width() > 500){
    // getting the normal navigation  window resized to above 500px
	
    location.reload(true);
	
  }

});
 



});