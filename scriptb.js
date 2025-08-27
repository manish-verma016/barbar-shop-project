// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Login form submit
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // prevent reload
            if (message) {
                message.innerText = "✅ Welcome Sir.. !";
            }
        });
    }

    // Popup container
    const loginContainer = document.querySelector(".login-container");

    // Open popup button (Login button in navbar)
    const formButton = document.getElementById("loginBtn"); // 👈 use ID instead of wrong selector

    // Cancel button inside popup
    const cancelButton = document.querySelector(".cancel-button");

    if (formButton && loginContainer) {
        formButton.addEventListener("click", (event) => {
            event.preventDefault();
            loginContainer.style.display = "flex"; // show popup
        });
    }

    if (cancelButton && loginContainer) {
        cancelButton.addEventListener("click", () => {
            loginContainer.style.display = "none"; // hide popup
        });
    }

});






document.addEventListener('DOMContentLoaded', () => {
  const $ = (sel, ctx=document) => ctx.querySelector(sel);

  /* ---------------- Login Modal ---------------- */
  const loginContainer = document.querySelector('.login-container');
  const loginBtn = $('#loginBtn');
  const cancelBtn = document.querySelector('.cancel-button');
  const loginForm = $('#loginForm');
  const loginMsg = $('#message');

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      loginContainer.style.display = 'flex';
      loginForm.querySelector('input').focus();
    });
  }
  if (cancelBtn) cancelBtn.addEventListener('click', () => loginContainer.style.display = 'none');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = $('#username').value.trim();
      const pass = $('#password').value.trim();
      if (!user || !pass) {
        loginMsg.style.color = 'red';
        loginMsg.innerText = '⚠ Please enter username and password';
        return;
      }
      loginMsg.style.color = 'green';
      loginMsg.innerText = '✅ Welcome Sir.. !';
      setTimeout(() => { loginContainer.style.display = 'none'; loginMsg.innerText = ''; }, 1000);
    });
  }

  /* ---------------- Appointment ---------------- */
  const appForm = $('#appointment-form');
  if (appForm) {
    appForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = $('#name').value.trim();
      const email = $('#email').value.trim();
      if (!name || !email) { alert('Fill all fields!'); return; }
      alert(`✅ Appointment booked for ${name}`);
      appForm.reset();
    });
  }

  /* ---------------- Price Button ---------------- */
  const priceBtn = $('#price-btn');
  if (priceBtn) priceBtn.addEventListener('click', () => window.location.href = 'index3.htm');

  });



document.addEventListener("DOMContentLoaded", () => {
  const teamSlides = document.querySelectorAll("#image-carousel .splide__slide");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("animate");
        // ek baar animate hone ke baad fir remove na ho
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  teamSlides.forEach(slide => observer.observe(slide));
});




const searchControls = document.querySelector(".search-controls");
const inputEl = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearSearch");
const backBtn = document.getElementById("backSearch");
const noResultEl = document.getElementById("noResult");

// 🎯 Target sections & divs
const sectionSelectors = [
  "section",
  ".login-container",
  ".newsletter",
  "footer",
  ".gellery-section"
];
const sections = sectionSelectors.flatMap(sel =>
  Array.from(document.querySelectorAll(sel))
);

// 🔄 Restore all
function restore() {
  sections.forEach(s => {
    s.style.display = "";
    s.classList.remove("glow-border");
  });
  noResultEl.style.display = "none";
  searchControls.style.display = "none"; // 👈 hide full block again
  inputEl.value = "";
}

// 🔍 Search Functionality
function runSearch(term) {
  if (!term.trim()) {
    restore();
    return;
  }

  let found = false;
  sections.forEach(sec => {
    const text = sec.innerText.toLowerCase();
    const altText = Array.from(sec.querySelectorAll("img"))
      .map(i => i.alt.toLowerCase())
      .join(" ");

    if (text.includes(term.toLowerCase()) || altText.includes(term.toLowerCase())) {
      sec.style.display = "";
      sec.classList.add("glow-border");
      found = true;
    } else {
      sec.style.display = "none";
    }
  });

  noResultEl.style.display = found ? "none" : "block";

  // 👇 Show search-controls only when search is run
  searchControls.style.display = "block";
}

// 🖱️ Event Listeners
btn.addEventListener("click", () => runSearch(inputEl.value));
clearBtn.addEventListener("click", () => { inputEl.value = ""; restore(); });
backBtn.addEventListener("click", restore);

// ⌨️ Enter Key
inputEl.addEventListener("keyup", e => {
  if (e.key === "Enter") runSearch(inputEl.value);
});
