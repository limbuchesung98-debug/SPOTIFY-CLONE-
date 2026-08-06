document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Play Button Click Event
  // Card भित्रको Play Button थिच्दा Card को Original Link खोल्छ
  const playButtons = document.querySelectorAll(".play-btn, .playButton");
  
  playButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Default link navigation रोक्छ
      
      const parentLink = btn.closest("a");
      if (parentLink) {
        const songUrl = parentLink.getAttribute("href");
        // Spotify Link नयाँ Tab मा ओपन गर्छ
        window.open(songUrl, "_blank");
      }
    });
  });

  // 2. Search Bar Filter Functionality
  // Type गर्दा मिल्दो Song, Artist वा Album मात्र देखाउँछ
  const searchInput = document.querySelector(".search-bar input");
  const allCards = document.querySelectorAll(".card, .albumContainer, .albumContainer2, .albumContainer3");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();

      allCards.forEach((card) => {
        const title = card.querySelector("h3, p")?.textContent.toLowerCase() || "";
        
        if (title.includes(query)) {
          card.style.display = "block"; // Search सँग मिलेमा देखाउने
        } else {
          card.style.display = "none";  // नमिलेमा लुकाउने
        }
      });
    });
  }

  // 3. Sidebar Import Banner Dismiss
  // Close (X) button थिच्दा Import banner हट्छ
  const closeBannerBtn = document.querySelector(".banner-close");
  const importBanner = document.querySelector(".import-banner");

  if (closeBannerBtn && importBanner) {
    closeBannerBtn.addEventListener("click", () => {
      importBanner.style.display = "none";
    });
  }

  // 4. Create Playlist / Library Button Action
  const createBtns = document.querySelectorAll(".create-btn, .card-btn");

  createBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Import Button बाहेक अन्यमा Alert देखाउने
      if (!btn.textContent.includes("Import")) {
        alert("Playlist create गर्न पहिले Log in गर्नुहोस्!");
      }
    });
  });

});