// cara select bagian html pada JQuery
$("body > button.hide").click(function () {
  $(".Judul").hide();
});

$(".show").click(function () {
  $(".Judul").show();
});

//cara modify css dalam JQuery

// $(".Judul").css({
//     fontSize: "10em",
//     backgroundColor: "yellow",
//     });

$(".modify").click(function () {
  const title = $(".Judul");
  title.toggleClass("Judul2");
  // title.removeClass("Judul");
  // title.addClass("Judul2");
});

//cara modify text dalam jQuery
$(".text").click(function () {
  $("h1").html("<em>bye</em>");
});

//cara ganti atribut html
$(".attr").click(function () {     
    $("a").attr("href", "https://id.pinterest.com/");
    $("a").html("<em>pinterest</em>");
});

$(document).keydown(function (event) { 
  console.log(event.key);
  $("h1").html(`${event.key}`);
});

// BY ADDING NEW ELEMENTS, WE CAN USE .before(), .after() , .prepend(), .append()
// to delete an element, we can use .remove()

// if we have many same tag as siblings, we can use .eq(index) to select the specific index of a tag
//example:
// $("button").eq(1).click(function() {
//   console.log("Second button clicked");
// });

// If you want to create custom animations in jQuery, you can use the .animate()