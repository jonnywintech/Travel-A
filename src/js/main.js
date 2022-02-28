const navLinksMain = document.querySelector(".header__list-main");
const searchBtn = document.querySelector(".header__btn-search");
const closeBtn = document.querySelector(".header__btn-close");
const searchBar = document.querySelector(".header__searchbar");
const enBtn = document.querySelector(".header__btn-lang");
const ballonLang = document.querySelector(".header__lang-menu");
const fuBar = document.querySelector(".header__functions");
//burger
const logo = document.querySelector(".header__logo");
const navTop = document.querySelector(".header__nav--active");
const navBottom = document.querySelector(".header__functions--active");
const burgerBtn = document.querySelector(".header__burger");
const navMain = document.querySelector(".header__nav");
const containerHeight = document.querySelector(".header__container");

///window size

const navBarApp = () => {
  // open search bar //
  searchBtn.addEventListener("click", () => {
    // if (window.innerWidth >= 1024) {
    //   navLinksMain.classList.add("hide");
    // }
    // if (window.innerWidth <= 767) {
    //   logo.classList.toggle("hide");
    // }
    searchBtn.classList.add("header__btn-search--active");
    closeBtn.classList.remove("hide");
    searchBar.classList.remove("hide");
  });

  /// hide icon on click ///
  searchBar.addEventListener("click", () => {
    searchBtn.classList.add("hide");
  });

  /// close search bar ///
  closeBtn.addEventListener("click", () => {
    if (window.innerWidth >= 1024) {
      navLinksMain.classList.remove("hide");
    }
    searchBtn.classList.remove("header__btn-search--active", "hide");
    closeBtn.classList.add("hide");
    searchBar.classList.add("hide");
    // if (window.innerWidth <= 767) {
    //   logo.classList.toggle("hide");
    // }
  });

  /// open / close languages bar////
  enBtn.addEventListener("click", () => {
    ballonLang.classList.toggle("hide");
  });
  //burger

  if (window.innerWidth <= 1024) {
    navLinksMain.classList.add("hide");
    fuBar.classList.add("hide");
  }

  burgerBtn.addEventListener("click", () => {
    navLinksMain.classList.toggle("hide");
    fuBar.classList.toggle("hide");
    navMain.classList.toggle("header__nav--active");
    containerHeight.classList.toggle("header__container--active");
    burgerBtn.classList.toggle("header__burger--actve");
  });
};
navBarApp();

//// open video
const videoBtn = document.querySelector(".btn-transparent");
const videoPlayer = document.querySelector(".banner__player");
const closePlayer = document.querySelector(".banner__close");
const togglePlayer = () => {
  if (videoPlayer.style.display === "none") {
    videoPlayer.style.display = "block";
  } else {
    videoPlayer.style.display = "none";
  }
};
videoBtn.addEventListener("click", togglePlayer);
closePlayer.addEventListener("click", togglePlayer);
togglePlayer();

//cards pop
const cardApp = () => {
  const cards = document.querySelectorAll(".tours__card");
  const cardBtn = document.querySelectorAll(".tours__book-btn");
  const activeCard = () => {
    cards.forEach((detect) => {
      detect.classList.remove("tours___card--active");
    });
  };
  cards.forEach((element) => {
    element.addEventListener("click", () => {
      activeCard();
      element.classList.toggle("tours___card--active");
    });
  });
};
cardApp();

const accordionApp = () => {
  const cityBtn = document.querySelectorAll(".accordion__button");

  cityBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
      const activeAcc = document.querySelector(".accordion__button--active");

      if (activeAcc && activeAcc !== button) {
        activeAcc.classList.remove("accordion__button--active");
        activeAcc.nextElementSibling.classList.remove("expand");
      }
      button.classList.toggle("accordion__button--active");
      button.nextElementSibling.classList.toggle("expand");
    });
  });
};

accordionApp();

/// slider
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


swiper();


/// browser reload on resolution change
window.onresize = function() {
  location.reload();
}