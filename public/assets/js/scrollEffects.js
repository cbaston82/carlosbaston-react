myScript = function () {
  const wScroll = window.scrollY;
  const wHeight = window.innerHeight;

  function reveal(sectionId) {
    const section = document.querySelector(sectionId);
    if (!section) return;
    if (wScroll > section.offsetTop - wHeight / 3) {
      const container = section.querySelector('.container');
      if (container) container.classList.add('isShowing');
    }
  }

  reveal('#about-section');
  reveal('#knowledge-section');
  reveal('#contact-section');
  reveal('#testimonials-section');
};

window.addEventListener('scroll', myScript);
