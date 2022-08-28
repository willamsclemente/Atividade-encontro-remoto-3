$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        435:{
            items:2
        },
        992:{
            items:3
        },

        1200:{
            items:3
        }
    }
});

function mostrarMenu(){
    let menu = document.getElementById("menu");

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

document.body.onresize = function() {
    if (document.body.clientWidth > 768) {
        let menu = document.getElementById("menu");
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
};

function entradaBusca(id){
    let busca = document.getElementById(id).value;
    console.log(busca);
}

function loginUsuario(){
    let login = document.getElementById("campo-login").value;
    let senha = document.getElementById("campo-senha").value;
    console.log(login);
    console.log(senha);
}

function cadastrarUsuario(){
    let email = document.getElementById("campo-email").value;
    console.log(email);
}