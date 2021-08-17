import './style.css'


document.querySelector('.drawer-btn').addEventListener('click', function(){
  var menuElem = document.querySelector('nav.main-menu');
  var menuWrapperElem = document.querySelector('.main-menu-wrapper');

  menuElem.classList.toggle('open');
  if(menuElem.classList.contains('open')){
    menuElem.setAttribute('style', 'max-height:100%;');
    menuWrapperElem.setAttribute('style', 'max-height:100%;');
  } else {
    menuElem.setAttribute('style', 'max-height:0;');
    menuWrapperElem.setAttribute('style', 'max-height:5rem;');
  }
})


var contactTextareaElem = document.querySelector('.contact-textarea');

var togglePlaceholder = function(){
  if(contactTextareaElem.value == "Your message..."){
    contactTextareaElem.innerHTML = ""
    contactTextareaElem.removeAttribute('style');
  } else if(contactTextareaElem.value == ""){
    contactTextareaElem.innerHTML = "Your message...";
    contactTextareaElem.setAttribute('style', 'color:#ccc;');
  }
}

contactTextareaElem.addEventListener('focus', function(){
  togglePlaceholder();
});

contactTextareaElem.addEventListener('focusOut', function(){
  togglePlaceholder();
});