const searchInput = document.querySelector("#post-search");
const cards = [...document.querySelectorAll(".post-card")];
const noResults = document.querySelector("#no-results");

searchInput?.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  let matches = 0;

  cards.forEach((card) => {
    const haystack = `${card.dataset.search} ${card.textContent}`.toLowerCase();
    const isMatch = haystack.includes(query);
    card.hidden = !isMatch;
    matches += Number(isMatch);
  });

  noResults.hidden = matches > 0;
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

