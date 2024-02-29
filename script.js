var pulsantello = document.getElementById("pulsantello");
var pulsantello2 = document.getElementById("pulsantello2");
var informazioni = document.getElementById("informazioni");

function changeNavBarBg(){
    if(window.outerWidth > 400){

    
        var navbar = document.getElementById('navbar');
        var scrollValue = window.scrollY;
        if(scrollValue < 50){
            navbar.classList.remove('bgColor');
        }
        else{
            navbar.classList.add('bgColor');
        }
    }
        
    
      
    
}  

if(window.outerWidth > 480){
    window.addEventListener('scroll', changeNavBarBg);
}
const urlParams = new URLSearchParams(window.location.search);
const hideButton = urlParams.get('hideButton');

if (hideButton === 'true'){
    document.getElementById('pulsantePagina2').style.display = 'none';
    document.getElementById('menu').style.right = 0;
    hideButton = true

}

pulsantello.addEventListener("click",function(){
    window.scrollTo({
        left:0,
        top: 695,
        behavior: "smooth",
    });
});

pulsantello2.addEventListener("click",function(){
    window.scrollTo({
        left:0,
        top: 0,
        behavior: "smooth",
    });
});

function infoscroll(){
    window.scrollTo({
        left:0,
        top: 2000,
        behavior: "smooth",
    });
}

function vanish(){
    window.close("loginpage.html");
    window.open("index.html?hideButton=true");

    
}

function verificaChisiamo(){
    if(hideButton == 'true'){
        window.close("index.html");
        window.open("chisiamo.html?hideButton=true");
    }
    else{
        window.close("index.html");
        window.open("chisiamo.html");
    }
}


function verificalogin(){
    if(hideButton == 'true'){
        window.close("index.html");
        window.open("index.html?hideButton=true");
        
    }
    else{
        window.close("index.html");
        window.open("index.html");
    }
}

