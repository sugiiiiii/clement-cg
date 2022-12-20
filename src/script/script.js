// Lancer PostCSS pour update Tailwind == npm run dev

// -----------------------------------------------------------------
// -----------------------------------------------------------------

const projets = [
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
    projetElement.querySelector(".pj-desc").textContent = projet.desc;

    projetElement.querySelector(".pj-parent").setAttribute('pj-id', id);
    projetElement.querySelector(".pj-info").setAttribute('pj-id', id);
    projetElement.querySelector(".pj-pop").setAttribute('pj-id', id);
    projetElement.querySelector(".pj-gallery").setAttribute('pj-id', id);

    projetElement.querySelector(".pj-title-pop").textContent = projet.title;
    projetElement.querySelector(".pj-date-pop").textContent = projet.date;
    projetElement.querySelector(".pj-desc-pop").textContent = projet.desc;

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
