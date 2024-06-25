import './style.css'
import home_image from './img/pexels-chanwalrus.jpg'
import bc from './img/bc.jpg'
import kh from './img/kh.jpg'
import pp from './img/pp.jpg'
import pv from './img/pv.jpg'

import {menu} from "./menu.js"

import {contact} from "./contact.js"
const content = document.querySelector('#content');
const homebtn = document.querySelector('#home');
const menubtn = document.querySelector('#menu');
const contactbtn = document.querySelector('#contact');
function home() {
    content.innerHTML = "";
    const title = document.createElement('h1');
    title.textContent = "V's Kitchen Restaurent and Food Delivery"
    const image = new Image();
    image.src = home_image;
    const description = document.createElement('p')
    description.textContent = "We use the best ingredients and offer a wide variety of Indian food to suit the occation."

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(image);
}

home();


homebtn.addEventListener('click', home);

menubtn.addEventListener('click',()=>{
    content.innerHTML = '';
    content.appendChild(menu(bc,kh,pp,pv));
})

contactbtn.addEventListener('click',()=>{
    content.innerHTML = ''
    content.appendChild(contact())
})