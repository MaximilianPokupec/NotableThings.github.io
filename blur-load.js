const blurDivs= document.querySelectorAll('.blur-load');
blurDivs.forEach(div => {
  const inside_img = div.querySelector('img');

  function loaded(){
    div.classList.add('loaded')
  }

  if(inside_img.complete){
    loaded()
  }else{
    inside_img.addEventListener("load", loaded)
  }

});