import { PLATFORM_NAME } from '../../data/platform-name.js';

import { buildMainHeader, buildAnchors } from './template-builder.js';

// Preenchendo nome do projeto no template
for (let ref of document.getElementsByClassName("platform-name")) {
  ref.innerHTML = PLATFORM_NAME;
}

// Construindo estrutura header principal da aplicação
const header = document.getElementById('main-header');
buildMainHeader(header);

// Construindo estrutura de âncoras para subtítulos de páginas
const subtitles = document.getElementsByTagName("h2");
buildAnchors(subtitles);
