import { menu } from '../../data/menu.js';
import { isActivePage } from './assets.js';

/** 
 * Cria a estrutura de header padrão da página
 * 
 * @param {HTMLElement} headerRef
 */
export function buildHeader(headerRef) {

  if (!headerRef)
    throw new Error("Elemento <header> não encontrado. Crie um header com o id 'main-header'");

  // Obter listagem de menus a serem exibidos - Definidos em arquivo local
  const menuList = menu.filter(m => m.available)
    .map(item => ({ label: item.label, link: item.link }));

  const ul = document.createElement("ul");

  for (let item of menuList) {

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

  const aside = document.createElement("aside");

  aside.style.width = '100%';
  aside.style.height = '10px';
  aside.classList.add('accent-bg');
  
  headerRef.appendChild(aside);
  headerRef.appendChild(ul);
}

/** 
 * Cria a estrutura de âncoras para sub-titulos de cada página
 * 
 * @param {HTMLElement[]} headersRef
 */
export function buildAnchors(headersRef) {
  
  if (!headersRef)
    throw new Error("Esperava HTMLElement[]. Recebeu " + headersRef);

  for (let section of headersRef) {

    if (section.getAttribute("anchor") === "false") {
      continue;
    }
  
    const anchor = section.parentElement.id;
  
    const anchorRef = document.createElement("a");
    anchorRef.innerHTML = "#";
    anchorRef.href = "#" + anchor;
    anchorRef.classList.add("anchor-ref");
  
    const label = document.createElement("span");
    label.innerHTML = section.innerHTML;
    
    section.innerHTML = "";
    section.appendChild(anchorRef);
    section.appendChild(label);
  }
}