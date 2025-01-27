/*================== CHANGE BACKGROUND HEADER ==========================*/ 
{function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >=50){header.classList.add('scroll-header')}
    else {
        header.classList.remove('scroll-header');
    }    
}
window.addEventListener('scroll',scrollHeader)}

/*================ SWIPER POPULAR ========================*/
const swiper = new Swiper('.popular__container', {
  spaceBetween:32,
  grabCursor:true,
  centererdSlides:true,
  slidesPerView:'auto',
  loop: true,  
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },

});

/*====================== VALUE ACCORDIAN  ========================*/
const accordianItems = document.querySelectorAll(".value__accordian-item");
accordianItems.forEach((item)=>{
      const accordianHeader = item.querySelector(".value__accordian-header");
      accordianHeader.addEventListener("click",()=>{
          const openItem = document.querySelector('.accordion-open')
          if(openItem && openItem!==item){
            toggleItem(openItem)
          }
          toggleItem(item)
      })
})

const toggleItem = (item)=>{
     const accordianContent = item.querySelector(".value__accordian-content");     
     if(item.classList.contains('accordion-open')){
          accordianContent.removeAttribute('style')
          item.classList.remove('accordion-open')
     }else{
          accordianContent.style.height = accordianContent.scrollHeight + 'px'
          item.classList.add('accordion-open')
     }     
}


/*================== SCROLL SECTIONS ACTIVE LINK ===================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.pageYOffset;
  sections.forEach((current)=>{
     const sectionHeight = current.offsetHeight;
     const sectionTop = current.offsetTop - 58;
     const sectionId =current.getAttribute('id') 

     if(scrollY > sectionTop && scrollY <=sectionTop + sectionHeight){
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
     }else{
          document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
     }
  })
}
window.addEventListener('scroll',scrollActive);


/*================== SCROLL UP ===================*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(window.scrollY >= 350){
    scrollUp.classList.add('show-up');
  }else{
    scrollUp.classList.remove('show-up')
    }
}
window.addEventListener('scroll',scrollUp)

/*================== SCROLL REVEAL ANIMATION ===================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: 'true'
})

sr.reveal(`.home__title,.popular__container,.subscribe__container,.footer__container`)
sr.reveal(`.home__description,.footer__info`,{delay: 500})
sr.reveal(`.home__search`,{delay: 600})
sr.reveal(`.home__value`,{delay: 700})
sr.reveal(`.home__images`,{delay: 800,origin: 'bottom'})
sr.reveal(`.logos_img`,{interval: 100})
sr.reveal(`.value__images, .contact__content`,{origin: 'left'})
sr.reveal(`.value__content, .contact__image`,{origin: 'right'})
