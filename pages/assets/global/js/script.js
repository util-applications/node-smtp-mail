import { buildMainHeader } from './template-builder.js';
import { PLATFORM_NAME } from '../../data/platform-name.js';

const header = document.getElementById('main-header');

if (!header)
  throw new Error("Elemento <header> não encontrado. Crie um header com o id 'main-header'");

// Construindo estrutura header principal da aplicação
buildMainHeader(header);

// Preenchendo nome do projeto no template
for (let ref of document.getElementsByClassName("platform-name")) {
  ref.innerHTML = PLATFORM_NAME;
}
