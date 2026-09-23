document.addEventListener('DOMContentLoaded', () => {
  console.log("Portofolio Kezia Livina loaded!");

 
  const contactBtn = document.querySelector('.btn-primary');     
  const experienceBtn = document.querySelector('.badge-yellow');  

  const aboutSection = document.querySelector('.dua');   
  const expSection = document.querySelector('.lima');    


  if (contactBtn && aboutSection) {
    contactBtn.addEventListener('click', () => {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  if (experienceBtn && expSection) {
    experienceBtn.addEventListener('click', () => {
      expSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
});