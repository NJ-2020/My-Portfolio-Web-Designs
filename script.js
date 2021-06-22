/* eslint-disable linebreak-style */
const menuToggle = document.querySelector('.menu-toggle input');
const menulink = document.querySelector('nav ul li a');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
});
menulink.addEventListener('click', ()=>{
  nav.classList.remove('slide');
});