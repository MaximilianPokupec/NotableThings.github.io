// const projekt_template=document.querySelector("#project-grid-showcase");
// const projekt_showcase_container = document.querySelector(".project-grid");

// const projekt_nav = document.getElementById('projekti-nav');

// const observer = new IntersectionObserver( 
//     ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
//     {threshold: [1]}
//   );
  
// observer.observe(projekt_nav);

import { setActiveProjectById,getActiveProject,getNeighborProjects,all_projects,projekti_resources_root_dir } from "./projekt-loader.js";


const hamburger_container = document.querySelector("#hamburger");
const hamburger_expand_button = document.querySelector("#hamburger-icon");
const hamburger_close_button = document.querySelector("#hamburger-close-icon");

hamburger_expand_button.addEventListener('click',()=>{
  hamburger_container.dataset.hamburgerState = 'open';
})
hamburger_close_button.addEventListener('click',()=>{
  hamburger_container.dataset.hamburgerState = 'closed';
})

const project_showcase_template = document.querySelector("#project-grid-showcase");
const active_project_slide_template = document.querySelector("#template-carouselImage");

const projekti_container = document.querySelector("#projekti");
const projekti_choose_menu = document.querySelector(".project-grid");
const projekti_showcase_carousel = document.querySelector(".project-carousel");
const project_info = document.querySelector("#project-info");
const back_link = document.querySelector(".back-link");

const carousel_img_container = document.querySelector("[data-slides]");

const toggle_content_elements = document.querySelectorAll("[data-hidden]");
toggle_content_elements.forEach(el=>{
   el.addEventListener('animationend',(e)=>{
      console.log(`${e.target.classList}:${e.animationName}`);
      if(e.animationName == 'hidecontent'){
         el.style.display='none';
      }
   });
   el.addEventListener('animationstart',(e)=>{
      if(e.animationName == "showcontent"){
         if(e.target.classList.contains('project-grid')){
            el.style.display="grid";
         }else{
            el.style.display='inline-block';
         }
      }
   })
})

back_link.addEventListener('click',()=>{
   if(getActiveProject() != null){
      renderProjectMenu();
   }
})

if(getActiveProject() != null){
   renderProjectShowcase();
}else{
   renderProjectMenu();
}

function setProjectInfo(id,title,category,description){
   
   if(id<10){
      id='0'+id;
   }

   project_info.querySelector('h1').textContent = `#${id}`;
   project_info.querySelector('h2').textContent = `${title}`;
   project_info.querySelector('h3').textContent = `${category}`;
   project_info.querySelector('p').textContent = `${description}`;

   document.body.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"});
   
}

function renderProjectMenu(){
   console.log('running renderProjectMenu()');
   setActiveProjectById(null);

   projekti_showcase_carousel.animate([{opacity:1},{opacity:0}],{fill:"forwards",duration:250});
   projekti_showcase_carousel.style.display='none';
   projekti_choose_menu.animate([{opacity:0},{opacity:1}],{fill:"forwards",duration:250});
   projekti_choose_menu.style.display='grid';
   projekti_choose_menu.textContent='';
   all_projects.forEach(project=>{
      let new_project = project_showcase_template.content.cloneNode(true);
      
      new_project.querySelector('img').src = `${projekti_resources_root_dir}${project.projekt_slike_linkovi[0]}`;
      new_project.querySelector('h3').textContent = project.naziv_projekta;
      new_project.querySelector('p').textContent =project.opis;
      new_project.querySelector('div').dataset.newProjectId = project.id;
      new_project.querySelector('div').addEventListener('click',()=>{
         setActiveProjectById(project.id);
         renderProjectShowcase();
      })
      projekti_choose_menu.appendChild(new_project);
   })
}

function renderProjectShowcase(){
   
   console.log('running renderProjectShowcase');
   projekti_showcase_carousel.animate([{opacity:0},{opacity:1}],{fill:"forwards",duration:250});
   projekti_showcase_carousel.style.display='inline-block';
   projekti_choose_menu.animate([{opacity:1},{opacity:0}],{fill:"forwards",duration:250});
   projekti_choose_menu.style.display='none'
   let cur_project = getActiveProject();
   setProjectInfo(cur_project.id, cur_project.naziv_projekta, cur_project.kategorija,cur_project.opis);

   let featured_img = document.querySelector('[data-slides] li img');
   featured_img.src = `${projekti_resources_root_dir}${cur_project.projekt_slike_linkovi[0]}`

   let img_container = document.querySelector('.project-images');
   img_container.textContent='';

   cur_project.projekt_slike_linkovi.forEach(link=>{
      let slika = new Image();
      slika.src = `${projekti_resources_root_dir}${link}`;
      slika.addEventListener('click',()=>{
         featured_img.src = slika.src;
      })
      img_container.appendChild(slika);
   })


   let other_projects = document.querySelector('.ostali-projekti-buttons');
   other_projects.textContent='';
   for (let i=1; i<4; i++){
      let index= (cur_project.id+i >= all_projects.length) ? cur_project.id+i-all_projects.length : cur_project.id+i; 

      let new_project = project_showcase_template.content.cloneNode(true);
      new_project.querySelector('img').src = `${projekti_resources_root_dir}${all_projects[index].projekt_slike_linkovi[0]}`;
      new_project.querySelector('h3').textContent = all_projects[index].naziv_projekta;
      new_project.querySelector('p').textContent =all_projects[index].opis;
      new_project.querySelector('div').dataset.newProjectId = all_projects[index].id;
      new_project.querySelector('div').addEventListener('click',()=>{
         setActiveProjectById(all_projects[index].id);
         renderProjectShowcase();
      });
      other_projects.appendChild(new_project);
   }
}

let next_project_button = document.querySelector("[data-carousel-button='next']");
next_project_button.addEventListener('click',()=>{
   let other_projects = document.querySelector('.ostali-projekti-buttons');
   
   let last_index = Number([...other_projects.querySelectorAll('.g-img-showcase')].pop().dataset.newProjectId);
   
   other_projects.textContent='';
   
   for(let i = 1; i<4; i++){
      let index=(last_index+i >= all_projects.length) ? last_index+i-all_projects.length : last_index+i;
      let new_project = project_showcase_template.content.cloneNode(true);
      
      new_project.querySelector('img').src = `${projekti_resources_root_dir}${all_projects[index].projekt_slike_linkovi[0]}`;
      new_project.querySelector('h3').textContent = all_projects[index].naziv_projekta;
      new_project.querySelector('p').textContent =all_projects[index].opis;
      new_project.querySelector('div').dataset.newProjectId = all_projects[index].id;
      new_project.querySelector('div').style.opacity = 0;
      new_project.querySelector('div').addEventListener('click',()=>{
         setActiveProjectById(all_projects[index].id);
         renderProjectShowcase();
      });
      other_projects.appendChild(new_project);
      other_projects.querySelector(`[data-new-project-id="${all_projects[index].id}"]`).animate([
         {opacity:0},
         {opacity:1}
      ], {id:"fadeIn",duration:100, delay:100*i, fill:"forwards"});
   }
   

})
let prev_project_button = document.querySelector("[data-carousel-button='prev']");
prev_project_button.addEventListener('click',()=>{
   let other_projects = document.querySelector('.ostali-projekti-buttons');
   let first_index = Number([...other_projects.querySelectorAll('.g-img-showcase')][0].dataset.newProjectId);
   
   other_projects.textContent='';

   
   for(let i = 1; i<4; i++){
      let index=(first_index-i < 0) ? all_projects.length+first_index-i : first_index-i;
      console.log(index)
      let new_project = project_showcase_template.content.cloneNode(true);
      new_project.querySelector('img').src = `${projekti_resources_root_dir}${all_projects[index].projekt_slike_linkovi[0]}`;
      new_project.querySelector('h3').textContent = all_projects[index].naziv_projekta;
      new_project.querySelector('p').textContent =all_projects[index].opis;
      new_project.querySelector('div').dataset.newProjectId = all_projects[index].id;
      new_project.querySelector('div').style.opacity=0;
      new_project.querySelector('div').addEventListener('click',()=>{
         setActiveProjectById(all_projects[index].id);
         renderProjectShowcase();
      });
      other_projects.appendChild(new_project);
      other_projects.querySelector(`[data-new-project-id="${all_projects[index].id}"]`).animate([
         {opacity:0},
         {opacity:1}
      ], {id:"fadeIn",duration:100, delay:100*i, fill:"forwards"});
   }
})

