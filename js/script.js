const menu = document.querySelector('.menu-btn');
const topLeftSlider = document.querySelector('.top-left-slide');
const bottomLeftSlider = document.querySelector('.bottom-left-slide');

const topRightSlider = document.querySelector('.top-right-slide');
const middleRightSlider = document.querySelector('.middle-right-slide');
const bottomRightSlider = document.querySelector('.bottom-right-slide');

const eksOne = document.querySelector('.eks-one');
const eksTwo = document.querySelector('.eks-two');
const eksThree = document.querySelector('.eks-three');

var isOpen = false;

menu.addEventListener('click', () => {
  topLeftSlider.classList.toggle('top-left-slide-show');
  bottomLeftSlider.classList.toggle('bottom-left-slide-show');
  topRightSlider.classList.toggle('top-right-slide-show');
  middleRightSlider.classList.toggle('middle-right-slide-show');
  bottomRightSlider.classList.toggle('bottom-right-slide-show');
  eksTwo.classList.toggle('eks-two-fade');
  
   const tl = gsap.timeline();
   const tlEksThree = gsap.timeline();
  
  if(!isOpen) {
    document.getElementById("body").style.overflow="hidden";

    tl.to('.eks-one', {
      y: isOpen? 0 : 9,
    })
      .to('.eks-one', {
      rotate: isOpen? 0 : 45
    })
    
    tlEksThree.to('.eks-three', {
      y: isOpen? 0 : -9,
    })
      .to('.eks-three', {
      rotate: isOpen? 0 : -45
    })
  }
  else {

    document.getElementById("body").style.overflow="hidden";

    tl.to('.eks-one', {
      rotate: isOpen? 0 : 45,
    })
      .to('.eks-one', {
      y: isOpen? 0 : 9,
    })
    
    tlEksThree.to('.eks-three', {
      rotate: isOpen? 0 : -45
    })
      .to('.eks-three', {
      y: isOpen? 0 : -9
    })
  }
  
  isOpen = !isOpen
})

gsap.from('.simple', {
  x: -100,
  duration: 1
})
gsap.from('.menu', {
  x: -100,
  duration: 1.2,
  delay: 0.3,
  opacity: 0
})
gsap.from('.navi', {
  y: -500,
  duration: 2.,
  delay: 0.4,
  opacity: 0
})



function holdUP(){
    let hold = document.getElementById("body").style.overflow;;
    if(hold.style.overflow=="visible") {
        hold.style.overflow="hidden";
    }else{

        hold.style.overflow="visible";


    }

}









$(window).scroll(function(){ 
    //more then or equals to 
    if($(window).scrollTop() >= 70 ){ 
        $( "#curriculum" ).css( "display", "flex" ); 
   
    //less then 100px from top 
    } else { 
        
   $( "#curriculum" ).css( "display", "none" ); 
    } 
  });


function showMenu(){
    document.getElementById("menu").style.transform="translate(0%)";
    
}
function exitMenu(){
    document.getElementById("menu").style.transform="translate(100%)";
}




function toHeaderOne(){
    document.getElementById("header-one").style.display="grid";
    document.getElementById("header-two").style.display="none";
    document.getElementById("header").style.background= "url('/images/backpack-with-school-supplies.jpg')";
    document.getElementById("first-selector").style.background="#023020";
        document.getElementById("second-selector").style.background="white";
    

   

}

function toHeaderTwo(){
    document.getElementById("header-two").style.display="grid";
    document.getElementById("header-one").style.display="none";
    
    document.getElementById("header").style.background= "linear-gradient(to right, rgba(0,0,0,0.5) 50%, #f8f4f4be), url(/images/school-backpack-school-supplies-with-chalkboard-background_53476-528.webp)";
    document.getElementById("second-selector").style.background="#023020";
        document.getElementById("first-selector").style.background="transparent";


}



function toTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

document.onscroll = function() {
  if (window.innerHeight + window.scrollY > document.body.clientHeight) {
      document.getElementById('whatsapp').style.display='none';
  }else{
      document.getElementById('whatsapp').style.display='block';
  }
}


function holdUP(){
    let hold = document.getElementById("body").style.overflow;;
    if(hold.style.overflow=="visible") {
        hold.style.overflow="hidden";
    }else{

        hold.style.overflow="visible";


    }

}




