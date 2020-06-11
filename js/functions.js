//lazy-loading
$(function() {
    $('.lazy').Lazy({
	    // your configuration goes here
	    scrollDirection: 'vertical',
	    effect: 'fadeIn',
	    visibleOnly: true,
	    onError: function(element) {
	    }
	});
});


//fixedheaderscroll

window.onscroll = function() {fixedHeader()};

var header = document.getElementById("navigation");
var sticky = header.offsetTop;

function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


$(document).ready(function(){
	setTimeout(function(){
		$('#slider_layout img').each(function(index, el) {
			if($.type($(this).attr('src')) != "undefined") {
				if($(this).attr('src').indexOf('data:image')!==-1) {
					$(this).attr('src', $(this).attr('data-src'));
				}
			}
		});
	}, 3000);
});


$('a[href*="#"]:not([href="#"])').click(function() {

	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

		var target = $(this.hash);

		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

		if (target.length) {

			$('html, body').animate({

				scrollTop: target.offset().top

			}, 1000);

			return false;

		}

	}
});

$('.thumb-video').on('click', function (e) {
    e.preventDefault();
    var id = $(this).data('id');
    var $popup = $('.modal');
    var iframe = document.createElement("iframe");
    var $iframe = $(iframe);
    var embed = "https://player.vimeo.com/video/ID?autoplay=1";
    $iframe.attr('src', embed.replace("ID", id));
    $iframe.attr('frameborder', '0');
    $iframe.attr('allowfullscreen', '1');
    $popup.find('.modal-content .modal-body .embed-responsive').html($iframe);
    $popup.modal();

    return false;
});