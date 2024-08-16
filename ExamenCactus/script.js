const alertC = document.getElementById('alertClose') 
const contentAlert = document.getElementById('alert')
const carrito = document.getElementById('nav-cart')


carrito.addEventListener('click', function(){
    window.alert('Your car is empty')
})

alertC.addEventListener('click', function(){
    contentAlert.style.display = 'none'
})