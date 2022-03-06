import { PLATFORM_NAME } from '../../data/platform-name.js';

/**
 * Escreve o nome padrão da plataforma no innerHTML de um grupo de elementos HTML
 * @param {HTMLElement[]} elementsRef 
 */
export function writePlatformName(...elementsRef) {

  // Preenchendo nome do projeto no template
  for (let ref of elementsRef) {
    ref.innerHTML = PLATFORM_NAME;
  }
}