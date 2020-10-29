import menuElements from './menu.json';
import menuTemplate from './templates/menu-items.hbs';

const dishGallery = document.querySelector('.js-menu');
const body = document.querySelector('body');
const switchThemeColor = document.querySelector('.theme-switch__toggle');

switchThemeColor.addEventListener('change', clickSwitch);
document.addEventListener('DOMContentLoaded', getThemeFromLocalStorage);

const markup = menuTemplate(menuElements);

dishGallery.insertAdjacentHTML('beforeend', markup);

const themeColor = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onDarkThemeClick() {
  body.classList.add(themeColor.DARK);
  body.classList.remove(themeColor.LIGHT);
  localStorage.setItem("theme", themeColor.DARK)
}

function onLightThemeClick() {
  body.classList.add(themeColor.LIGHT);
  body.classList.remove(themeColor.DARK);
  localStorage.setItem("theme", themeColor.LIGHT)
}

function clickSwitch(evt) {
  if (switchThemeColor.checked) {
    onDarkThemeClick();}
    else {
    onLightThemeClick();}
}

function getThemeFromLocalStorage() {
  const theme = localStorage.getItem('theme');
  if (theme === themeColor.DARK) {
    onDarkThemeClick();
    switchThemeColor.checked = true;}
}