'use strict';
const hearAbout = document.querySelector('select');
let label = document.querySelector('#other-label');
let textarea = document.querySelector('#other-text');
hearAbout.addEventListener('change', (e) => {
  if (e.target.value === 'magic' || e.target.value === 'other') {
    label.style.display = 'block';
    textarea.style.display = 'block';
  } else {
    label.style.display = 'none';
    textarea.style.display = 'none';
  }
});
function clearForm() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
     if(input.type!='submit' && input.type!='reset')
        input.value = '';
    });
}