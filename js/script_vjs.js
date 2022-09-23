$(".collapsible li").click(function () {
  $(this).siblings().removeClass("active"); //comment this line to make the accordion expansible
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(this).siblings().find(".collapsible-body").slideUp(300);
    $(this).siblings().find(".collapsible-header").removeClass('active-header');
    $(this).siblings().find(".collapsible-header").addClass('noactive-header');

    $(this).find(".collapsible-body").slideDown(300);
    $(this).find(".collapsible-header").removeClass('noactive-header');
    $(this).find(".collapsible-header").addClass('active-header');


  } else {
    $(this).find(".collapsible-body").slideUp(300);
    $(this).find(".collapsible-header").removeClass('active-header');
    $(this).find(".collapsible-header").addClass('noactive-header');
  }
  //$(this).find('.collapsible-body').slideToggle(500); //change display property
});


