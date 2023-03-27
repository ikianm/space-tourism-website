const hamburgerBtn = document.getElementById('hamburger-menu');
const navLinks = document.querySelectorAll('.list-item a');
const planetEl = document.querySelectorAll('#dest-nav li');
const crewDots = document.querySelectorAll('.crew-dot');
const techDots = document.querySelectorAll('.tech-dot');

let menuFlag = false;

function styleLinks(e) {
  navLinks.forEach(link => {
    link.style.borderBottom = 'none';
  });
  e.target.style.borderBottom = '3px solid #e7ecff';
  e.target.style.paddingBottom = '1.65rem';
}

navLinks.forEach(link => {
  link.addEventListener('click', styleLinks);
});

function toggleMenu() {
  const menuImg = document.querySelector('#hamburger-menu img');
  const navBar = document.getElementById('navigation-bar');
  const navItems = navBar.querySelectorAll('li');
  if (!menuFlag) {
    menuImg.src = './assets/shared/icon-close.svg';
    navBar.style.left = 0;

    navItems.forEach(item => {
      item.style.left = 0;
    });
  } else {
    menuImg.src = './assets/shared/icon-hamburger.svg';
    navBar.style.left = '100%';

    navItems.forEach(item => {
      item.style.left = '100%';
    });
  }

  menuFlag = !menuFlag;
}

function destinationHandler(e) {
  const destId = e.target.id;
  if (destId === '1') {
    renderDestination(
      'MOON',
      './assets/destination/image-moon.png',
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      '384,400',
      '3 days'
    );
  } else if (destId === '2') {
    renderDestination(
      'MARS',
      './assets/destination/image-mars.png',
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      '225 mil. km',
      '9 months'
    );
  } else if (destId === '3') {
    renderDestination(
      'EUROPA',
      './assets/destination/image-europa.png',
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      '628 mil. km',
      '3 years'
    );
  } else {
    renderDestination(
      'TITAN',
      './assets/destination/image-titan.png',
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      '1.6 bil. km',
      '7 years'
    );
  }
}

function renderDestination(name, image, desc, dis, est) {
  document.getElementById('dest-name').textContent = name;
  document.getElementById('dest-desc').textContent = desc;
  document.getElementById('distance').textContent = dis;
  document.getElementById('estimate').textContent = est;
  document.querySelector('#dest-img img').src = image;
}

function crewSelectHandler(e) {
  const crewDotId = e.target.id;
  crewDots.forEach(el => {
    el.style.backgroundColor = 'gray';
  });
  e.target.style.backgroundColor = '#e7ecff';
  switch (crewDotId) {
    case 'first-crew-dot':
      renderCrew(
        'Anousheh Ansari',
        'FLIGHT ENGINEER',
        'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        './assets/crew/image-anousheh-ansari.png'
      );
      break;

    case 'second-crew-dot':
      renderCrew(
        'Douglas Hurley',
        'COMMANDER',
        'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        './assets/crew/image-douglas-hurley.png'
      );
      break;

    case 'third-crew-dot':
      renderCrew(
        'Mark Shuttleworth',
        'MISSION SPECIALIST',
        'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        './assets/crew/image-mark-shuttleworth.png'
      );
      break;

    default:
      renderCrew(
        'Victor Glover',
        'PILOT',
        'MPilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        './assets/crew/image-victor-glover.png'
      );
      break;
  }
}

function renderCrew(name, role, bio, img) {
  document.getElementById('crew-position').textContent = role;
  document.getElementById('crew-name').textContent = name;
  document.getElementById('crew-desc').textContent = bio;
  document.querySelector('#crew-img img').src = img;
}

function techSelecHanlder(e) {
  const techDotValue = e.target.textContent;
  techDots.forEach(dot => {
    dot.style.backgroundColor = 'transparent';
    dot.style.color = '#e7ecff';
  });
  e.target.style.backgroundColor = '#ffffffdb';
  e.target.style.color = '#0b0b0bed';

  switch (techDotValue) {
    case '1':
      renderTech(
        'Launch vehicle',
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        './assets/technology/image-launch-vehicle-portrait.jpg'
      );
      break;
    case '2':
      renderTech(
        'Spaceport',
        'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
        './assets/technology/image-spaceport-portrait.jpg'
      );
      break;

    default:
      renderTech(
        'Space capsule',
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        './assets/technology/image-space-capsule-portrait.jpg'
      );
      break;
  }
}

function renderTech(name, desc, img) {
  document.getElementById('tech-name').textContent = name;
  document.getElementById('tech-desc').textContent = desc;
  document.querySelector('#tech-img img').src = img;
}

hamburgerBtn.addEventListener('click', toggleMenu);

planetEl.forEach(planet => {
  planet.addEventListener('click', destinationHandler);
});

crewDots.forEach(crew => {
  crew.addEventListener('click', crewSelectHandler);
});

techDots.forEach(dot => {
  dot.addEventListener('click', techSelecHanlder);
});
