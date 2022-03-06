import { writePlatformName } from './template/replacements.js';
import { buildAnchors, buildHeader } from './template/build.js';

// Aplicando nome da plataforma nas tags solicitadas
const replacements = document.getElementsByClassName("platform-name");
writePlatformName(replacements);

// Construindo estrutura header principal da aplicação
const header = document.getElementById('main-header');
buildHeader(header);

// Construindo estrutura de âncoras para subtítulos de páginas
const subtitles = document.getElementsByTagName("h2");
buildAnchors(subtitles);
