
// Array of project ids
var projectNames = ["#masscluster"]

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

(function($) {
    $('#showcase li').click(function() {
        $('#showcase li').css("opacity", "50%");
        if($(this).attr('class') === 'active') {
            $(this).removeClass('active');
            for (let x = 0; x < projectNames.length; x++) {
                $(projectNames[x]).css("display", "none");
                //$(projectNames[x]).css("background", "white");
            }
        } else {
            $(this).css("opacity", "100%");
            $(this).addClass('active').siblings('li').removeClass('active');
            var idToShow
            switch(this.id) {
                case "massclustergame":
                    idToShow = "masscluster";
                    break;
                case "othergamegame":
                    idToShow = "othergame";
                    break;
                default:
                    break;
            }
            var re = new RegExp(idToShow);
            for (let x = 0; x < projectNames.length; x++) {
                re.test(""+projectNames[x]) ? $(projectNames[x]).css("display", "block") : $(projectNames[x]).css("display", "none");
            }
        }
    });
})(jQuery);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dots");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}