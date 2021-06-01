const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const btn = document.querySelector('.btn');

const storedInput = localStorage.getItem('textinput');

if(storageInput){
    text.textContent = storedInput
}


storageInput.addEventListener('input', entry => {
    text.textContent = entry.target.value;
});

const saveToLocalStorage = () => {
    localStorage.setItem('textinput', text.textContent);
}

btn.addEventListener('click', saveToLocalStorage);