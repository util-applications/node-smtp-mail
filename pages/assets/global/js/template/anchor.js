/**
 * START - ÂNCORAS PARA TÓPICOS
 * @param {HTMLElement[]} headers
 */
export function criaAncora(headers) {

  for (let section of headers) {

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
/**
 * END - ÂNCORAS PARA TÓPICOS
 */