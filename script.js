const menuToggle = document.querySelector('.menu-toggle input');
const menulink = document.querySelectorAll('nav ul li a');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
});

menulink.forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('slide');
  document.querySelector('.menu-toggle input').checked = false;
}));
// ------------- Portfolio Section ---------------
const projects = [
  {
    id: 0,
    name: 'Tonic',
    companyName: 'CANOPY',
    position: 'Back End Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      link: 'img/project0.png',
      alt: 'Tonic screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    companyName: 'FACEEBOOK',
    position: 'Full Stack Dev',
    year: 2015,
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
    image: {
      link: 'img/project1.png',
      alt: 'Multi-Post Stories screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 2,
    name: 'Facebook 360',
    companyName: 'FACEEBOOK',
    position: 'Full Stack Dev',
    year: 2015,
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ['html', 'css', 'javascript'],
    image: {
      link: 'img/project2.svg',
      alt: 'Facebook 360screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 3,
    name: 'Uber Navigation',
    companyName: 'Uber',
    position: 'Lead Developer',
    year: 2018,
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
    image: {
      link: 'img/project3.png',
      alt: 'Uber Navigation screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
];

const modalDetails = document.createElement('div');
modalDetails.id = 'modal-details';
modalDetails.className = 'project-details';

function showDetails(projectIndex) {
  const projectsCode = `
  <div class="details-container">
  <span id="closeDetails"><i class="fas fa-times closeDetails"></i></span>
  <h2 class="project-title">${projects[projectIndex].name}</h2>
    <ul class="work-info">
      <li class="info-main">${projects[projectIndex].companyName}</li>
      <li class="info-main">${projects[projectIndex].position}</li>
      <li class="info-description info-main">${projects[projectIndex].year}</li>
    </ul>
  <img src="${projects[projectIndex].image.link}" alt="${projects[projectIndex].image.alt}" />
  <div class="project-info"><br>
  <p class="description">
    ${projects[projectIndex].description}
  </p>
    <div class="tech-and-buttons">
      <ul class="technologies">
      ${(function usedTech() {
    return projects[projectIndex].technologies.map((tech) => `<li class="lang-section">${tech}</li>`).join('');
  }())}
      </ul>
      <div class="buttons">
        <a href="${projects[projectIndex].liveSource}" class="btn">See Live <i class="fas fa-external-link-alt"></i></a>
        <a href="${projects[projectIndex].sourceCode}" class="btn">See Source <i class="fab fa-github"></i></a>
      </div>
    </div>
  </div>
  </div>`;
  modalDetails.innerHTML += projectsCode;
  document.body.appendChild(modalDetails);
  document.getElementById('closeDetails').addEventListener('click', () => {
    modalDetails.innerHTML = '';
    document.body.removeChild(modalDetails);
  });
}

const portfolio = document.getElementById('portfolio');
const projectList = document.createElement('ul');
projectList.className = 'project-list';
portfolio.appendChild(projectList);

const projectsCode = projects.map(
  (project) => `<li class="work-card work-cardFirst">
  <img src="${project.image.link}" class="work-img" alt="${project.image.alt}" />
  <div class="work-container">
    <h2 class="work-name">${project.name}</h2>
    <ul class="work-info">
      <li class="info-main">${project.companyName}</li>
      <li class="info-main">${project.position}</li>
      <li class="info-description info-main">${project.year}</li>
    </ul>
    <p class="work-description">
    ${project.description}
    </p>
    <ul class="technologies">
    ${(function usedTech() {
    return project.technologies
      .map((tech) => `<li class="lang-section">${tech}</li>`)
      .join('');
  }())}
    </ul>
    <button class="btn details-btn work-btn" type="button" data-id="${
  project.id
}">See Project</button>
  </div>
</li>`,
);
projectList.innerHTML = projectsCode.join('');

const showButton = document.querySelectorAll('.details-btn');
showButton.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showDetails(event.target.dataset.id);
  });
});