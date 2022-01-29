document.addEventListener("DOMContentLoaded", function(event) {
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          obj.innerHTML = (Number(Math.floor(progress * (end - start) + start))).toLocaleString('ru');
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
      
      const project = document.getElementById("project");
      const lied = document.getElementById("lied");
      const pages = document.getElementById("pages");
      const CRM = document.getElementById("CRM");

      const startAnimate = () => {
        animateValue(project, 0, 349, 2000);
        animateValue(lied, 0, 256000, 2000);
        animateValue(pages, 0, 157000, 2000);
        animateValue(CRM, 0, 98, 2000);
      }

      startAnimate();
  
  const menu = document.querySelector('#menu-bar')

  menu.addEventListener('click', () => {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  })

});

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});

