document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const input = document.getElementById('new_search');
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault() 
        input.addEventListener('click', function() {
            alert('Lets Explore Makeup Products !!!');
          })
          console.log(e.target.search.value)
          fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${e.target.search.value}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)