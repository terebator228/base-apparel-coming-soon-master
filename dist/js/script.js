const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const input = document.querySelector('.apparel__input'),
      error = document.querySelector('.apparel__invalid'),
      btn = document.querySelector('.btn');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(!validate(reg, input.value)) {
        error.classList.add('apparel__invalid_show')
    }
})

function validate (regexp, input) {
    return regexp.test(input)
}


document.addEventListener('click', (e) => {
    if(e.target !== btn) {
        error.classList.remove('apparel__invalid_show')
    }
})