const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const proposalPage = document.getElementById("proposalPage");
const loadingPage = document.getElementById("loadingPage");
const finalMessage = document.getElementById("finalMessage");
const bookContainer = document.getElementById("bookContainer");
const openBookBtn = document.getElementById("openBookBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const bookContent = document.getElementById("bookContent");
const bgMusic = document.getElementById("bgMusic");

const pages = [
  {
    poem: "💌 Tujhme basi hai meri zindagi,\nTere bina har khushi adhoori hai...",
    image: "<img src='./image/image3.jpeg' alt='Love Photo 1' class='book-img' />"
  },
  {
    poem: "❤️ Har pal tujhe chahna, meri aadat ban chuki hai...",
    image: "<img src='./image/image4.jpeg' alt='Love Photo 2' class='book-img' />"
  },
  {
    poem: "🌹 Tera naam hi meri dhadkan hai...",
    image: "<img src='./image/download.jpeg' alt='Love Photo 3' class='book-img' />"
  },
  {
    poem: "💘 Tumse milke sab kuch khoobsurat lagta hai...",
    image: "<img src='./image/download2.jpeg' alt='Love Photo 4' class='book-img' />"
  },
  {
    poem: "💞 Mere khwab mein bhi sirf tum ho...",
    image: "<img src='./image/download4.jpeg' alt='Love Photo 5' class='book-img' />"
  },
  {
    poem: "💕 Har janam tumse hi mohabbat karunga...",
    image: "<img src='./image/download (1).jpeg' alt='Love Photo 6' class='book-img' />"
  }
];

let currentPage = 0;

yesBtn.addEventListener("click", () => {
  // Unmute and play music on user gesture
  bgMusic.muted = false;
  bgMusic.play().catch(e => console.log("Music play error:", e));

  proposalPage.style.display = "none";
  loadingPage.style.display = "flex";

  setTimeout(() => {
    loadingPage.style.display = "none";
    finalMessage.style.display = "flex";
  }, 4000);
});

noBtn.addEventListener("click", () => {
  alert("Sorry 😢 This love can't be avoided! Try again ❤️");
});

openBookBtn.addEventListener("click", () => {
  finalMessage.style.display = "none";
  bookContainer.style.display = "flex";
  showPage(currentPage);
  toggleButtons();
});

nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
    toggleButtons();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
    toggleButtons();
  }
});

function showPage(index) {
  const page = pages[index];
  bookContent.innerHTML = `
    <div class="photo">${page.image}</div>
    <div class="poem">${page.poem}</div>
  `;
}

function toggleButtons() {
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;
}
