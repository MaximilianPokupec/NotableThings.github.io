const curs = document.querySelector('.custom-cursor');

function is_touch_enabled() {
  return ( 'ontouchstart' in window ) || 
         ( navigator.maxTouchPoints > 0 ) || 
         ( navigator.msMaxTouchPoints > 0 );
}

function trackCursor(event){
  const clh = curs.clientHeight;
  const clw = curs.clientWidth;
  curs.style.display='block';
  curs.style.transform = `translate(${event.clientX - clw/2}px,${event.clientY-clh/2}px)`;
}

if(!is_touch_enabled()){
  document.addEventListener('mouseenter',() => {curs.style.display = 'block';});
  document.addEventListener('mouseleave',() => {curs.style.display = 'none';});
  document.addEventListener('mousemove',trackCursor);
  document.addEventListener('mousedown',()=>{curs.classList.add('click-effect');});
  document.addEventListener('mouseup',()=>{curs.classList.remove('click-effect');} );
}