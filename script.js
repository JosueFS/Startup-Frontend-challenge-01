const addClassElement = (e) => {
  if(e.target.tagName.toLowerCase() === 'input') {
    e.target.parentElement.classList.add('selected');
  }
}

const removeClassElement = (e) => {
  if(e.target.tagName.toLowerCase() === 'input') {
    e.target.parentElement.classList.remove('selected');

    if(e.target.value !== ''){
      e.target.parentElement.classList.add('filled');
    }
  }
}

document.addEventListener('focusin', addClassElement);
document.addEventListener('focusout', removeClassElement);