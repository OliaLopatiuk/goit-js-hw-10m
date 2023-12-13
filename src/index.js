import {fetchBreeds, fetchCatByBreed}  from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catCard = document.querySelector('.cat-info');
select.addEventListener('change', onSelectChange);


updateSelect();

function updateSelect() {
loader.classList.toggle('is-hidden');
  fetchBreeds()
    .then(cats => {
        loader.classList.toggle('is-hidden');
      const catArr = cats
    .map(({ id, name }) => `<option value=${id}>${name}</option>`);
      const selectMarkup = ['<option class="option-text" value=cat>Choose a cat breed</option>', ...catArr]
      select.insertAdjacentHTML('beforeend', selectMarkup);

      new SlimSelect({
        select: select,
      });
    })
    .catch(error => onError())
}

function onSelectChange(event) {
loader.classList.toggle('is-hidden');
catCard.classList.toggle('is-hidden');

const breedId = event.currentTarget.value;

fetchCatByBreed(breedId)
.then(cat => {
    loader.classList.toggle('is-hidden');
    catCard.classList.toggle('is-hidden');
    const {url, breeds} = cat[0];
    catCard.innerHTML = `<img src=${url} alt=${breeds[0].name} width="400"><div class="cat-desc"><h2>${breeds[0].name}</h2><p>${breeds[0].description}</p><p><strong>Temperament: </strong>${breeds[0].temperament}</p></div>`;
})
.catch(error => onError())
};

function onError() {
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
}