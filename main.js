import { setActiveProjectById } from "./projekt-loader.js";

function isTouchDevice(){
  return (('ontouchstart' in window)||(navigator.maxTouchPoints > 0)||(navigator.msMaxTouchPoints > 0));
}

// NAV TRANSFORM ---------------


const nav_ele = document.getElementById('nav');
if(!isTouchDevice()){
const observer = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
    {threshold: [1]}
  );
  
  observer.observe(nav_ele);

window.addEventListener('scroll',(e)=>{
  if(window.scrollY){
    nav_ele.classList.add('isSticky');
  }else{
    nav_ele.classList.remove('isSticky');
  }
})
}else{
  nav_ele.classList.add("nav-mobile");
}

window.addEventListener('resize',()=>{
  if(window.innerWidth>1040){
    nav_ele.classList.remove('isSticky');
    nav_ele.classList.remove('nav-mobile');
  }else{
    nav_ele.classList.add('isSticky');
  }
})

const hamburger_container = document.querySelector("#hamburger");
const hamburger_expand_button = document.querySelector("#hamburger-icon");
const hamburger_close_button = document.querySelector("#hamburger-close-icon");

hamburger_expand_button.addEventListener('click',()=>{
  hamburger_container.dataset.hamburgerState = 'open';
  ha
})
hamburger_close_button.addEventListener('click',()=>{
  hamburger_container.dataset.hamburgerState = 'closed';
})
// NAV TRANSFORM END ----------------

// SECTION INTERSECTION --------


const tracked_sections = document.querySelectorAll("[data-track-link]");

const observer_currentActiveSection = new IntersectionObserver(linked_sections => {
  linked_sections.forEach(section =>{
    
    if(section.isIntersecting){
      let href_element = document.querySelector(`a[href="#${section.target.getAttribute('id')}"]`);
      href_element.classList.add('sec-active');
    }else{
      let href_element = document.querySelector(`a[href="#${section.target.getAttribute('id')}"]`);
      href_element.classList.remove('sec-active');
    }
  });
},{
  threshold:0,
  rootMargin: "-320px"
});

tracked_sections.forEach(link =>{
  observer_currentActiveSection.observe(link);
});


// SECTION INTERSECTION END --------

// NASLOVI---------

const naslovi_text = ["Notable","things","dizajn","interijera"];
const naslov = document.querySelector('#naslovi span');

let naslov_ix = 0;
setInterval(()=>{
  naslov.innerHTML = naslovi_text[naslov_ix];
  naslov_ix++;
  if(naslov_ix>naslovi_text.length-1)naslov_ix=0;
},1000);

// NASLOVI END -----------------


// O NAMA INTERSECTION ---------

const tr_in_L = document.querySelectorAll('[data-translate-left]');
const tr_in_R = document.querySelectorAll('[data-translate-right]');


const observer_translate_in_left = new IntersectionObserver(sections => {
  sections.forEach(section=>{
    section.target.classList.toggle('translate-in-left', section.isIntersecting);
    if(section.isIntersecting){observer_translate_in_left.unobserve(section.target);}
  })
  
},{
  threshold:0,
}
);
const observer_translate_in_right = new IntersectionObserver(sections => {
  sections.forEach(section=>{
    section.target.classList.toggle('translate-in-right',section.isIntersecting);
    if(section.isIntersecting) {observer_translate_in_right.unobserve(section.target);}
  })
},{
  threshold:0,
  rootMargin:"200px"
}
);

tr_in_L.forEach(el =>{
  observer_translate_in_left.observe(el);
})
tr_in_R.forEach(el =>{
  observer_translate_in_right.observe(el);
})



// ONAMA INTERSECTION END ---------

//ALERT --------
const alert_toast = document.querySelector('#alert');
const toast_trigger_button = document.querySelector('[data-toast-trigger]');

toast_trigger_button.addEventListener('submit',()=>{
  alert_toast.classList.add('translate-in-right');

  setInterval(()=>{
    alert_toast.classList.remove('translate-in-right');

  },5000)
});
//ALERT END -----------

  const radio_buttons = document.querySelectorAll('input[type="radio"]');

radio_buttons.forEach(radio=>{
  radio.addEventListener('click',e=>{
    
    if(radio.parentNode.classList.contains('active')){
      radio.checked=false;
      radio.parentNode.classList.remove('active');
      radio.parentNode.classList.add('inactive');
    }
    
      radio_buttons.forEach(btn=>{
        if(btn.checked && !btn.parentNode.classList.contains('active')){
          btn.parentNode.classList.add('active');
          btn.parentNode.classList.remove('inactive');
        }else{
          btn.parentNode.classList.remove('active');
          btn.parentNode.classList.add('inactive');
          btn.checked=false;
        }
      });
    }
  );
});

const rootUrl = "/resources/vizualizacije/";





const projekti_nav_link = document.querySelector("#projekti-link");
projekti_nav_link.addEventListener('click',()=>{
  setActiveProjectById(null);
})


const projekti_links = document.querySelectorAll("[data-content-id]>a");
projekti_links.forEach(link =>{
  link.addEventListener('click',()=>{
    setActiveProjectById(link.parentElement.dataset.contentId);
  })
});






const carousel_buttons= document.querySelectorAll('[data-carousel-button]');
carousel_buttons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const offset = btn.dataset.carouselButton === "next" ? 1:-1;
    const slides = btn.closest('[data-carousel]').querySelector('[data-slides]');

    const active_slide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(active_slide) + offset;
    if(newIndex < 0) newIndex = slides.children.length -1;
    if(newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete active_slide.dataset.active;

  });
})


const projekti_section = document.getElementById('projekti');







