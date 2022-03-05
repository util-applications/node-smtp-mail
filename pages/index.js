/**
 * START - ÂNCORAS PARA TÓPICOS
 */
for (let section of document.getElementsByTagName("h2")) {

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
/**
 * END - ÂNCORAS PARA TÓPICOS
 */