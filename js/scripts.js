document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
    .then(response => response.text())
    .then(data =>{
        document.getElementById('navbar-content').innerHTML = data
    })
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
    .then(response => response.text())
    .then(data =>{
        document.getElementById('footer-content').innerHTML = data
    })
});