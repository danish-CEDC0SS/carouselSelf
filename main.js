let currentSlide=0;
let slides=document.getElementsByClassName('item1');
totalSlides=slides.length;
function  timer() {
    if(currentSlide==totalSlides-1)
        currentSlide=0;
    else{
        currentSlide++;
    }
    updateSlides();
}
$('document').ready(function () {
    let initial=setInterval(timer,2500);
    $('#next').click(function(){
        clearInterval(initial);
        if(currentSlide==totalSlides-1)
            currentSlide=0;
        else{
            currentSlide++;
        }
        updateSlides();
        initial=setInterval(timer,2500);
    });
    $('#prev').click(function(){
        clearInterval(initial);
        if(currentSlide==0)
            currentSlide=totalSlides-1;
        else{
            currentSlide--;
        }
        updateSlides();
        initial=setInterval(timer,2500);
    });
    $('.indexP').click(function(){
        clearInterval(initial);
        currentSlide=this.id;
        updateSlides();
        initial=setInterval(timer,2500);
    })
});
function updateSlides(){
    for(let i=0;i<totalSlides;i++){
        slides[i].style.opacity='0'
        $(`#${i}`).removeClass("active");
    }
    slides[currentSlide].style.opacity='0.15';
    $(`#${currentSlide}`).addClass("active");
}
