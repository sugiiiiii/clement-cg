// Lancer PostCSS pour update Tailwind == npm run dev

// -----------------------------------------------------------------
// -----------------------------------------------------------------

const projets = [
    {
        title: "Mon Curriculum Vitae",
        date: "Today",
        tag: "CV",
        desc: "Je l'ai décliné en <strong>deux version</strong>: <br><ul class=\"list-disc list-outside ml-6\"><li>Une colorée, destinée au numérique</li><li>Une plus en tracés, pour économiser de l'encre à l'impression</li></ul> ",
        img: ['./src/img/cv-color-v3.webp','./src/img/cv-print-v3.webp'],
        links: [["Voir en HD","./src/cv.pdf"],["Télécharger le CV","./src/cv.pdf"]]
    },
    {
        title: "Slide design · Actiris",
        date: 2020,
        desc: "Lorem ipsum dolor sid habet",
        img: ['./src/img/presentation.webp']
    },
    {  
        title: "Test",
        date: 2022,
        desc: "Description test",
        img: ['./src/img/image.jpg', './src/img/moi.png']
    },
    {
        title: "Test 2",
        date: 2022,
        desc: "Description test 2",
        img: ['./src/img/image.jpg']
    },
    {
        title: "Test 2",
        date: 2022,
        desc: "Description test 2",
        img: ['./src/img/image.jpg']
    },
    {
        title: "Test 2",
        date: 2022,
        desc: "Description test 2",
        img: ['./src/img/image.jpg']
    },
    {
        title: "Test 2",
        date: 2022,
        desc: "Description test 2",
        img: ['./src/img/image.jpg']
    },
    {
        title: "Test 2",
        date: 2022,
        desc: "Description test 2",
        img: ['./src/img/image.jpg']
    },
]

const projetTemplate = document.querySelector("#projet-template");
const projetListContainer = document.querySelector("#galerie");
let id = 0;

for (const projet of projets) {
    id += 1
    // Créez une copie du modèle
    const projetElement = document.importNode(projetTemplate.content, true);

    // Remplacez les données du modèle avec les données du film
    projetElement.querySelector(".pj-title").textContent = projet.title;
    projetElement.querySelector(".pj-date").textContent = projet.date;
    projetElement.querySelector(".pj-desc").textContent = projet.tag;
    projetElement.querySelector(".pj-cover").src = projet.img[0];

    projetElement.querySelector(".pj-parent").setAttribute('pj-id', id);
    projetElement.querySelector(".pj-info").setAttribute('pj-id', id);
    projetElement.querySelector(".pj-pop").setAttribute('pj-id', id);
    projetElement.querySelector(".pj-gallery").setAttribute('pj-id', id);

    projetElement.querySelector(".pj-title-pop").textContent = projet.title;
    projetElement.querySelector(".pj-date-pop").textContent = projet.date;
    projetElement.querySelector(".pj-desc-pop").innerHTML = projet.desc;
    projetElement.querySelector(".pj-tag-pop").textContent = projet.tag;

    i = 0
    const pjGallery = projetElement.querySelector(".pj-gallery")
    for (image in projet.img) {
        projetElement.querySelector(".pj-date-pop").textContent = projet.date;
        pjImg = document.createElement('img');
        pjImg.src = projet.img[i];
        pjImg.classList.add("pj-img")
        pjImg.classList.add('w-full')
        pjImg.classList.add('object-cover')
        i++
        try {
            pjGallery.appendChild(pjImg)
        }
        catch(error) {
            console.debug(error)
        }
    }

    // Ajoutez le nouvel élément à la page
    projetListContainer.appendChild(projetElement);
}

// -----------------------------------------------------------------
// -----------------------------------------------------------------

function showPopup() {
    
    // On récuper l'attribut "pj-id" pour identifier le projet
    pjId = event.target.parentElement.getAttribute('pj-id');
    
    // Récupère la popup et l'arrière-plan
    var popup = document.querySelector(`[pj-id="${pjId}"].fixed`);
    popup.scrollTo(0, 0);
    var backdrop = document.querySelector(`[pj-id="${pjId}"].bg-opacity-75`);
  
    // Affiche la popup et l'arrière-plan
    popup.classList.remove('hidden');
    backdrop.classList.remove('hidden');
    backdrop.classList.add('grid');
}

  
function hidePopup() {
    // Récupère toutes les popup
    var popup = document.querySelectorAll('.fixed');

    // Cacher toutes les pop-up
    popup.forEach(pop => 
        pop.classList.add('hidden')
    )
}

// Désactiver la propagation du click-exit
const popups = document.querySelectorAll('.pj-pop > .grid');
popups.forEach((popEl) => {
    popEl.addEventListener('click', (event) => {
      event.stopPropagation();
    });
});

// -----------------------------------------------------------------
// -----------------------------------------------------------------

const toggleDarkMode = () => {
    const darkIcon = document.querySelector("#dark-icon");
    const root = document.documentElement;
    const darkModeIndicator = localStorage.getItem('darkModeIndicator');
    if (darkModeIndicator === null) {
      localStorage.setItem('darkModeIndicator', 'true');
      root.classList.add('dark');
    } else if (darkModeIndicator === 'true') {
        localStorage.setItem('darkModeIndicator', 'false');
        root.classList.remove('dark');
        darkIcon.innerHTML = `<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>`
    } else {
      localStorage.setItem('darkModeIndicator', 'true');
      root.classList.add('dark');
      darkIcon.innerHTML = `<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>`
    }
};

const mailLink = document.querySelector("#mailLink");
mailLink.addEventListener('click', (event) => {
    event.preventDefault();
  
    try {
      navigator.clipboard.writeText('clement.coeugniet@isfsc.be')
      console.debug('Texte copié dans le presse-papiers !');
    } catch (err) {
      console.debug('Impossible de copier le texte dans le presse-papiers');
    }
});