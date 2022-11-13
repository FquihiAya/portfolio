function mouseFloating(){
    console.log(document.body.offsetHeight);
    $('html').animate({
        scrollTop: document.body.offsetHeight
      }, 11000);
      return false;
}