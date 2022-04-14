document.addEventListener('DOMContentLoaded', function () {
  let toTopButton = document.querySelector('.to-top');
  if(toTopButton != null){
    toTopButton.addEventListener("click", function(e){
      e.preventDefault();
      window.scroll({top: 0, left: 0, behavior: 'smooth'});
    });
    "scroll DOMContentLoaded".split(" ").forEach(function(e){
      window.addEventListener(e,function(){
        if (window.scrollY > 400) {
          toTopButton.style.visibility = "visible";
        } else {
          toTopButton.style.visibility = "hidden";
        }
      },false);
    });

  }

}, false);
