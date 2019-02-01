$("button").click(function() {
$("button").hide();
$(".image1").show(10000);
$(".message1").text("Here them land lovers !  Double click on them and get me treasure");
$(".click1").hide();
});

$(".image1").dblclick(function() {
    $(".image1").fadeOut();
    $(".image2").show();
     $(".image3").show();
    $(".message1").text("They are trying to escape with me treasure! scroll down and click on the cannon symbole to destroy their ship");
});

$(".image3").click(function() {
    $(".image2").fadeOut(1000);
     $(".image5").show();
      $(".image3").fadeOut(3000);
   $(".message1").text("They shiped recked on the Island! hover over their captain to battle them land lovers");
});

$(".image5").hover(function() {
    $(".image6").show(2000);
     $(".image5").hide();
   $(".message1").text(" Lets battle maytees! double click on the sword to start the battle ");
});

$(".image6").dblclick(function() {
    $(".image6").fadeOut(1000);
    $(".last").hide();
     $(".imageb").show();
   $(".message1").text(" Congratualation mate! Hover over me to get you part of the treasure ");
});

$(".imageb").hover(function() {
    $(".image7").fadeIn(1000);
    $(".image8").fadeIn();
    $(".imageb").fadeOut();
    $(".message1").hide();
    $("html").css("background-color", "lightblue");
});
