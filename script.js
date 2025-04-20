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
    poem: "Pehli nazar mein kuch toh baat ho gayi, Tujhse milke dil ko raahat ho gayi... 💘👀 Woh muskaan, woh nigahein jaadu kar gayi, Meri duniya bas teri saath ho gayi... 💫💑", 
    image: "<img src='./image/image3.jpeg' alt='Love Photo 1' class='book-img' />"
  },
  {
    poem: "Har shaam teri yaadon ka mela hota hai, Dil har pal bas tera hi deewana hota hai... ⏳❤️ Intezaar hai tujhe har mod pe paane ka, Kyunki tu hi toh meri har dua ka nasha hota hai... 🌇🙏",
    image: "<img src='./image/image4.jpeg' alt='Love Photo 2' class='book-img' />"
  },
  {
    poem: "Teri muskaan meri jaan ban gayi, Teri har khushi meri pehchaan ban gayi... 😊💞 Tere bina zindagi sooni si lagti hai, Tu aayi toh har ghadi shaan ban gayi... 🌟🌸",
    image: "<img src='./image/download.jpeg' alt='Love Photo 3' class='book-img' />"
  },
  {
    poem: "Raat bhar khwabon mein tu hi tu aata hai, Tera chehra chaand sa chamakta jata hai... 🌙💤 Kash yeh khwab kabhi sach ban jaayein, Aur tu meri zindagi mein aake bas jaayein... 💖✨",
    image: "<img src='./image/download2.jpeg' alt='Love Photo 4' class='book-img' />"
  },
  {
    poem: "Tere saath chalne ka junoon hai kuch aur, Har kadam pe lagta hai tu hai zaroor... 👣🤝 Na jaane kya rishta hai tujhse mera, Tere saath har pal lagta hai noor... 🌈❤️",
    image: "<img src='./image/download4.jpeg' alt='Love Photo 5' class='book-img' />"
  },
  {
    poem: "Meri mohabbat lafzon mein kaise bayaan karun, Tere liye toh har saans mein dua karun... 💌🔥 Tere naam se dhadakta hai dil mera, Tu hi toh hai jise har janam chaha karun... 💍💖",
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
