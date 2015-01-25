//
// main js template
// Heberer, Anna
// 24.1.2015
// javascript
//

function autoResizeDiv() {
  document.body.style.height = window.innerHeight
  document.body.style.width = window.innerWidth
}
window.onresize = autoResizeDiv;
autoResizeDiv();
