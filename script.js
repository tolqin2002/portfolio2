window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0)
    })
  
    const menuBtn = document.querySelector('.menu-btn')
    const navigation = document.querySelector('.navigation')
    const navigationItems = document.querySelectorAll('.navigation a')
  
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active')
      navigation.classList.toggle('active')
    })
  
    navigationItems.forEach(navItem => {
      navItem.addEventListener('click', () => {
        menuBtn.classList.remove('active')
        navigation.classList.remove('active')
      })
    })
  
    const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('active', window.scrollY > 500)
    })
    scrollBtn.addEventListener('click', () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    })
  
    window.addEventListener('scroll', () => {
      let reveals = document.querySelectorAll('.reveal')
  
      for(let i = 0; i< reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50;
  
        if(revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active')
        }
      }
    })
  })
  
  let cursor1 = document.querySelector('.cursor-1');
  let cursor2 = document.querySelector('.cursor-2');
  
  window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
  }
  
 document.querySelectorAll('a').forEach(links =>{
  links.onmouseenter = () =>{
    cursor1.classList.add('active')
    cursor2.classList.add('active')
  }
  
  links.onmouseleave = () =>{
    cursor1.classList.remove('active')
    cursor2.classList.remove('active')
  }
 })