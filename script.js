(function () {
  "use strict";

  // Sticky nav background on scroll
  var nav = document.getElementById("site-nav");
  var onScroll = function () {
    if (window.scrollY > 40) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  var menuBtn = document.getElementById("menu-btn");
  var mobileMenu = document.getElementById("mobile-menu");
  menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });
  });

  // Scroll-reveal animations
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Journal: daily/weekly view toggle
  var viewBtns = document.querySelectorAll(".j-view-btn");
  var viewDaily = document.getElementById("view-daily");
  var viewWeekly = document.getElementById("view-weekly");
  if (viewBtns.length && viewDaily && viewWeekly) {
    viewBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        viewBtns.forEach(function (b) {
          b.classList.remove("is-active");
        });
        btn.classList.add("is-active");

        var view = btn.getAttribute("data-view");
        if (view === "weekly") {
          viewDaily.classList.add("hidden");
          viewWeekly.classList.remove("hidden");
        } else {
          viewDaily.classList.remove("hidden");
          viewWeekly.classList.add("hidden");
        }
      });
    });
  }

  // Journal: category filters
  var filterBtns = document.querySelectorAll(".j-filter");
  var phases = document.querySelectorAll(".j-phase");
  if (filterBtns.length && phases.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) {
          b.classList.remove("is-active");
        });
        btn.classList.add("is-active");

        var filter = btn.getAttribute("data-filter");
        phases.forEach(function (phase) {
          var cats = (phase.getAttribute("data-cats") || "").split(" ");
          var show = filter === "todos" || cats.indexOf(filter) !== -1;
          if (show) {
            phase.removeAttribute("data-hidden");
          } else {
            phase.setAttribute("data-hidden", "true");
          }
        });
      });
    });
  }
})();
