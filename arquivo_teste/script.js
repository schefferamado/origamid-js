const ele1 = document.querySelector(`.elemento1`);
const ele2 = document.querySelector(`.elemento2`);
const ele3 = document.querySelector(`.elemento3`);

// ele2.appendChild(ele1);
// ele3.appendChild(ele1);
ele2.insertBefore(ele1, ele3);
