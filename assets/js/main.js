/* =========================================================
   RCCG Jesus Arena Parish — site behaviour
   ========================================================= */

/* EDIT ME: the address the contact form sends to. */
var PARISH_EMAIL = "hello@example.com";

(function () {
  "use strict";

  /* ---------- Mobile menu ---------- */

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close the menu after tapping a link on a phone.
    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      }
    });
  }

  /* ---------- Highlight the section you are reading ---------- */

  var links = Array.prototype.slice.call(
    document.querySelectorAll('.nav a[href^="#"]')
  );

  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === "#" + entry.target.id
            );
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---------- Contact form ----------
     There is no server behind this site, so the form hands the
     message to the visitor's email app with everything filled in.
     To collect messages automatically instead, see README.md. */

  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var subject = form.elements.subject.value;
      var message = form.elements.message.value.trim();

      if (!name || !email || !message) {
        if (status) {
          status.textContent =
            "Please fill in your name, your email address and a message.";
        }
        return;
      }

      var body =
        "Name: " +
        name +
        "\nEmail: " +
        email +
        "\n\n" +
        message +
        "\n\n— Sent from the parish website";

      window.location.href =
        "mailto:" +
        PARISH_EMAIL +
        "?subject=" +
        encodeURIComponent(subject + " — " + name) +
        "&body=" +
        encodeURIComponent(body);

      if (status) {
        status.textContent =
          "Your email app should now be open with the message ready to send.";
      }
    });
  }

  /* ---------- Current year in the footer ---------- */

  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
