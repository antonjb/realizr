$(function(){
  
  var activeClass = "active",
      $items = $(".dream-item");

  $items.on("click", function(){
    var $this = $(this);

    if($this.hasClass("." + activeClass)) return;

    $items.filter("." + activeClass).removeClass(activeClass);
    console.log($("." + activeClass, $items));
    $this.addClass(activeClass);

  });

	$(".dream").sortable({
		connectWith: ".dream"
	});

});
