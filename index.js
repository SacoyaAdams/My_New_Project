document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const input = document.getElementById('new_search');
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault() 
        input.addEventListener('click', function() {
            alert('Lets Explore Makeup Products !!!');
          })