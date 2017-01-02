$(function() {
	var imgStart = 0;
	var imgEnd = 35;

	var images = [];

	while(imgStart < imgEnd+1){
	  images.push(imgStart++ + '.jpg');
	}
				
	$('#home').css({'background-image': 'url(media/' + images[Math.floor(Math.random() * images.length)] + ')'});
});

$('.labels').hover(function() {
	$(this).children('.box').stop().slideToggle(500);
});

var winwid = $(window).width();
var winht = $(window).height();

function reSize() {
	var linkwid = $('#links').width();
	var search = $('#search input');
	search.width(linkwid);	
}

$(window).on('load resize', function() {
	reSize();
});

var time = new Date();
time = time.toLocaleString('en-GB', { hour: 'numeric', hour12: true, minute: '2-digit'}) + '<span class="smaller">' + time.toLocaleString('en-GB', { month:'long', day:'2-digit'}) + '</span>';

$('#time').prepend(time);