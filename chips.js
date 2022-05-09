// modal close
const modClose = document.getElementById('closebtn');
const mod = document.querySelector('.modal-dialog');

modClose.addEventListener('click', (e) => {
    console.log(e.target);
    mod.style.display = "none";

})

// modal close