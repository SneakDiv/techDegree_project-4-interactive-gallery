// JavaScript Document



//shows Search Box and Nano gallery when js is not disabled
$("#search").fadeIn(1400);
$("#myLightGallery").fadeIn(1800);

//Shows all figcaptions onload
$(".j-figCap").fadeIn(1000).fadeOut(1500);

//Delays showing figcaption over thumbnails on hover
$( ".figCap-default").hide().show(2500);






 $("#searchImgs").keyup(function(){
	 const filter = $(this).val().toLowerCase();
  console.log(filter);
	 
	 $(".thumbNail").each(function (){
		 
		 //if the items doesn't contain the text phrase
				 if ($(this).text().search(new RegExp(filter, "i"))< 0){
			 $(this).fadeOut();
					 
					 //if the items does contain the text phrase
		 } else {
			 $(this).show();
		 }
		 
	 });
	 
 });
	
	
	






$("#lightGallery-container").lightGallery({
	mode:'lg-slide-circular',
	cssEasing: 'ease',
	easing: 'linear',
	speed: 800,
	height: '100%',
	width: '100%',
	escKey: true,
	download: false,
	thumbnail: true,
	animateThumb: true,
	currentPagerPosition: 'right'
});
			
			







	
											
	
	
	
	


// JavaScript Document