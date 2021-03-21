// masonry config
$(".grid").masonry({
	itemSelector: ".grid-item",
	gutter: 16,
	horizontalOrder: true,
	fitWidth: true,
});


// product count-price
let count = 1;
let price = $("#product-price").attr("data-value");
let min = $("#quantity").attr('min');
let max = $("#quantity").attr("max");
let totalPrice = price;

$('#plus').on('click', () => {
	if (count < max) {
		count++;
	} 
	
	$("#quantity").val(count);
	totalPrice = price * count;
	$("#total-price").text(totalPrice);
});

$("#minus").on("click", function(){
	if (count > min) {
		count--;
	} 
	
	$("#quantity").val(count);
	totalPrice = price * count;
	$("#total-price").text(totalPrice);
});



