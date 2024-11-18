const list = document.querySelector('#categories');

console.log(`Number of Categories: ${list.childElementCount}`);

for (const el of list.children) {
  console.log(`Category: ${el.children[0].textContent}`);
  console.log(`Elements: ${el.children[1].childElementCount}`);
}
