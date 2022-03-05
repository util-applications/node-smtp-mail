/**
 * START - HEADER TOP EMPTY LINE - ASIDE
 */
export const aside = document.createElement("aside");

aside.style.width = '100%';
aside.style.height = '10px';

aside.classList.add('accent-bg');
/**
 * END - HEADER TOP EMPTY LINE - ASIDE
 */

/**
 * START - IF CURRENT PAGE IS ACTIVE
 */
export const isActivePage = (url) => window.location.href.indexOf(url) !== -1;
/**
 * END - IF CURRENT PAGE IS ACTIVE
 */