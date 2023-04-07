const button = document.querySelector('.button');
const email = document.querySelector('#email');
const text = document.querySelector('.text');
const please = document.querySelector('.please');

button.addEventListener('click',function(){
    if(email.value === '' || email.value === null){
        please.style.display = 'block';
        text.style.display = 'none';
    }else{
        please.style.display = 'none';
        text.style.display = 'block';
    }
});