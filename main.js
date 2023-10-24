const nav_ele = document.getElementById('nav');

const observer = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
    {threshold: [1]}
  );
  
  observer.observe(nav_ele);

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

const rootUrl = "./resources/vizualizacija/";

const projektiLinks = [
  {
    id:0,
    naziv_projekta: "Spavaća soba",
    kategorija: "Dizajn interijera",
    opis:"",
    projekt_slike_linkovi:[`${rootUrl}spavaca-soba/spavaca-1.png`,`${rootUrl}spavaca-soba/spavaca-2.png`,`${rootUrl}spavaca-soba/spavaca-3.png`],
    moodboard_slike_linkovi:""
  },
  {
    id:1,
    naziv_projekta: "Dnevna soba",
    kategorija:"Dizajn interijera",
    opis:"",
    projekt_slike_linkovi:[`${rootUrl}dnevna-soba/dnevna-1.png`,`${rootUrl}dnevna-soba/dnevna-2.png`,`${rootUrl}dnevna-soba/dnevna-3.png`],
    moodboard_slike_linkovi:""
  },
  {
    id:2,
    naziv_projekta: "Zelena Oaza",
    kategorija:"Dizajn interijera",
    opis: `Jednostavna kuhinja dobiva snažan karakter odabirom dinamične @ceramicasantagostino Paradiso Green keramike. Zelena boja intuitivno nas asocira na prirodu, zdravlje i uspjeh. Idealna kombinacija za kuhinju u kojoj ćemo napuniti energiju kroz sva osjetila.`,
    projekt_slike_linkovi:[`${rootUrl}zelena-oaza/kuhinja.png`],
    moodboard_slike_linkovi:[`${rootUrl}dnevna-soba/moodboard/mood-1.png`,`${rootUrl}dnevna-soba/moodboard/mood-2.png`,`${rootUrl}dnevna-soba/moodboard/mood-3.png`,`${rootUrl}dnevna-soba/moodboard/mood-4.png`,`${rootUrl}dnevna-soba/moodboard/mood-5.png`,`${rootUrl}dnevna-soba/moodboard/mood-6.png`,`${rootUrl}dnevna-soba/moodboard/mood-7.png`]
  },
  {
    id:3,
    naziv_projekta:"Grayscale",
    kategorija:"Dizajn interijera",
    opis:"",
    projekt_slike_linkovi:[`${rootUrl}grayscale/ormar-1.png`,`${rootUrl}grayscale/ormar-2.png`],
    moodboard_slike_linkovi:[`${rootUrl}grayscale/moodboard/mood-1.png`,`${rootUrl}grayscale/moodboard/mood-2.png`,`${rootUrl}grayscale/moodboard/mood-4.png`,`${rootUrl}grayscale/moodboard/mood-4.png`]
  },
  {
    id:4,
    naziv_projekta:"Tamni elementi, zemljani tonovi",
    kategorija:"Dizajn interijera",
    opis:`Kombinacija tamnog drva i crnih elemenata u kontrastu je sa svijetlim tkaninama na namještaju,zavjesama i obradom zida stvarajući ugodan prostor zemljanih tonova.`,
    projekt_slike_linkovi:[`${rootUrl}tamni-elementi-zemljani-tonovi/1.png`,`${rootUrl}tamni-elementi-zemljani-tonovi/2.png`,`${rootUrl}tamni-elementi-zemljani-tonovi/3.png`],
    moodboard_slike_linkovi:[`${rootUrl}tamni-elementi-zemljani-tonovi/moodboard/mood-1.png`]
  }
]

const modal = document.querySelector('dialog');

const projekti_navbar_link = document.querySelector("a[href='#projekti']");
projekti_navbar_link.addEventListener('click',()=>{
  modal.showModal();
})

const showcaseani_projekti = document.querySelectorAll('.content');



const modal_close_button = document.querySelector('#close_modal');
modal_close_button.addEventListener('click',()=>{
  modal.close();
})
