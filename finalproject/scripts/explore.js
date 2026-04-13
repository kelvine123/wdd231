import { getData } from './fetch.js';

const container = document.querySelector('#restaurants');
const modal = document.querySelector('#modal');
const title = document.querySelector('#modal-title');
const desc = document.querySelector('#modal-desc');
const closeBtn = document.querySelector('#closeModal');

let allData = [];

async function init() {
    allData = await getData();
    display(allData);
}

function display(data) {
    container.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
      <h3>${item.name}</h3>
      <img src="${item.image}" loading="lazy">
      <p>${item.cuisine}</p>
      <p>${item.location}</p>
      <button class="btn">View</button>
    `;

        div.querySelector('.btn').addEventListener('click', () => {
            title.textContent = item.name;
            desc.textContent = item.description;
            modal.showModal();
        });

        container.appendChild(div);
    });
}

window.filterType = function(type) {
    if (type === 'All') return display(allData);
    const filtered = allData.filter(r => r.cuisine === type);
    display(filtered);
}

closeBtn.addEventListener('click', () => modal.close());

init();