import { aside } from './template/header.js';

/** 
 * Cria a estrutura de header padrão da página
 * 
 * @param {HTMLElement} headerElement
 */
export function buildMainHeader(headerElement) {

  // Obter listagem de menus a serem exibidos

  fetch("/pages/assets/data/menu.json")
    .then(res => res.json())
    .then(res => {

      /** @type {{label: string, link: string, available: boolean}[]} */
      const menu = res;

      return menu
        .filter(item => item.available)
        .map(item => ({ label: item.label, link: item.link }));
    })
    .then(menu => {

      const ul = document.createElement("ul");

      for (let item of menu) {

        const link = document.createElement("a");

        link.href = item.link;
        link.innerHTML = item.label;

        const li = document.createElement("li");
        li.appendChild(link);

        if (isActivePage(item.link)) {
          li.classList.toggle("active");
        }

        ul.appendChild(li);
      }
      
      headerElement.appendChild(aside);
      headerElement.appendChild(ul);

    });

}


const isActivePage = (url) => window.location.href.indexOf(url) !== -1;