import { getData } from './fetch.js';

const featured = document.querySelector('#featured');

async function loadFeatured() {
    const data = await getData();
    data.slice(0, 3).forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${item.name}</h3>`;
        featured.appendChild(div);
    });
}

loadFeatured();