myScript = function () {
  const wScroll = window.scrollY;
  const wHeight = window.innerHeight;

  if (wScroll > document.querySelector('#about-section').offsetTop - (wHeight / 3)) {
    document.querySelector('#about-section .container').classList.add('isShowing');
  }


  if (wScroll > document.querySelector('#knowledge-section').offsetTop - (wHeight / 3)) {
    document.querySelector('#knowledge-section .container').classList.add('isShowing');
  }

  // if (wScroll > document.querySelector('#chuck-norris-section').offsetTop - (wHeight / 3)) {
  //   document.querySelector('#chuck-norris-section .container').classList.add("isShowing");
  // }

  if (wScroll > document.querySelector('#github-section').offsetTop - (wHeight / 3)) {
    document.querySelector('#github-section .container').classList.add('isShowing');
  }

  // if (wScroll > document.querySelector('#youtube-section').offsetTop - (wHeight / 3)) {
  //   document.querySelector('#youtube-section .container').classList.add("isShowing");
  // }

  // if (wScroll > document.querySelector('#personal-project-section').offsetTop - (wHeight / 3)) {
  //   document.querySelector('#personal-project-section .container').classList.add("isShowing");
  // }

  if (wScroll > document.querySelector('#contact-section').offsetTop - (wHeight / 3)) {
    document.querySelector('#contact-section .container').classList.add('isShowing');
  }

  if (wScroll > document.querySelector('#testimonials-section').offsetTop - (wHeight / 3)) {
    document.querySelector('#testimonials-section .container').classList.add('isShowing');
  }
};

window.addEventListener('scroll', myScript);
