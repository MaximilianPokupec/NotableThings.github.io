//JER JE MOZILLA JEBENO RETARDIRANA NEMREMO LOADATI JSON PREKO
// import -proizvoljni-naziv-za-podatke- from './db.json' asset{type: 'json'} - NE PODRZAVA OVO
//MORAO SAM HARDKODIRAT JEBENU VARIJABLU
//FETCH API SAMO RADI AKO TI SERVER ŠALJE ISPRAVAN RESPONSE I RESPONSE-I UNUTAR FETCHA I BILO KOJE DRUGE ASYNC FUNKCIJE SU LOCAL SCOPE, NE GLOBAL
//ZNACI NEMRES VARIJABLU POSTAVIT SA DOBIVENIM REZULTATIMA
//ZNACI OSUĐEN SI NA MILOST I NEMILOST SERVERA I BROJA REQUESTA KOJE MOZES SLAT SERVERU
//I NEMOS ODREDIT BROJ OBJEKATA U RESPONSEU, TO RADI SERVER PUTEM REQUESTA

//REVIEW: 4/69 JAVASCRIPT JE RETARDIRAN


export const projekti_resources_root_dir = "/resources/vizualizacije/";
export const all_projects = [
  {
      "id":0,
      "naziv_projekta": "Spavaća soba",
      "kategorija": "Dizajn interijera",
      "opis":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque rem veniam cum, provident cumque dolores possimus tenetur animi magnam fugit.",
      "projekt_slike_linkovi":["spavaca-soba/webp/spavaca-1.webp","spavaca-soba/webp/spavaca-2.webp","spavaca-soba/webp/spavaca-3.webp"]
    },
    {
      "id":1,
      "naziv_projekta": "Dnevna soba",
      "kategorija":"Dizajn interijera",
      "opis":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque rem veniam cum, provident cumque dolores possimus tenetur animi magnam fugit.",
      "projekt_slike_linkovi":["dnevna-soba/webp/dnevna-1.webp","dnevna-soba/webp/dnevna-2.webp","dnevna-soba/webp/dnevna-3.webp"]
    },
    {
      "id":2,
      "naziv_projekta": "Zelena Oaza",
      "kategorija":"Dizajn interijera",
      "opis": "Jednostavna kuhinja dobiva snažan karakter odabirom dinamične @ceramicasantagostino Paradiso Green keramike. Zelena boja intuitivno nas asocira na prirodu, zdravlje i uspjeh. Idealna kombinacija za kuhinju u kojoj ćemo napuniti energiju kroz sva osjetila.",
      "projekt_slike_linkovi":["zelena-oaza/webp/kuhinja.webp","zelena-oaza/webp/mood-1.webp","zelena-oaza/webp/mood-2.webp","zelena-oaza/webp/mood-3.webp","zelena-oaza/webp/mood-4.webp","zelena-oaza/webp/mood-5.webp","zelena-oaza/webp/mood-6.webp","zelena-oaza/webp/mood-7.webp"]
    },
    {
      "id":3,
      "naziv_projekta":"Grayscale",
      "kategorija":"Dizajn interijera",
      "opis":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque rem veniam cum, provident cumque dolores possimus tenetur animi magnam fugit.",
      "projekt_slike_linkovi":["grayscale/webp/ormar-1.webp","grayscale/webp/ormar-2.webp","grayscale/webp/mood-1.webp","grayscale/webp/mood-2.webp","grayscale/webp/mood-4.webp","grayscale/webp/mood-4.webp"]
    },
    {
      "id":4,
      "naziv_projekta":"Tamni elementi, zemljani tonovi",
      "kategorija":"Dizajn interijera",
      "opis":"Kombinacija tamnog drva i crnih elemenata u kontrastu je sa svijetlim tkaninama na namještaju,zavjesama i obradom zida stvarajući ugodan prostor zemljanih tonova.",
      "projekt_slike_linkovi":["tamni-elementi-zemljani-tonovi/webp/1.webp","tamni-elementi-zemljani-tonovi/webp/2.webp","tamni-elementi-zemljani-tonovi/webp/3.webp","tamni-elementi-zemljani-tonovi/webp/mood-1.webp"]
    }
];


export function getActiveProject(){
  return JSON.parse(sessionStorage.getItem('activeProjekt'));
}

export function setActiveProjectById(id){
  if(id != null)
  {sessionStorage.setItem('activeProjekt',JSON.stringify(all_projects[id]));}
  else
  {sessionStorage.setItem('activeProjekt',null);}
}

export function getNeighborProjects(project){
  var totalLength = all_projects.length;
  console.log(project.id+1 > totalLength);
  var nextProject = (project.id + 1 > totalLength) ? all_projects[0] : all_projects[project.id+1];
  var prevProject = (project.id - 1 < 0) ? all_projects[totalLength-1] : all_projects[project.id-1];
  return {next: nextProject, prev: prevProject}; 
}





