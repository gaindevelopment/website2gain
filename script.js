const search = document.getElementById("search");
const list = document.getElementById("site-list");

const sites = [
  // Paste your URLs here
  "https://swagbucks.com",
  "https://timebucks.com",
  "https://faucetpay.io",
  // ... (I'll paste all 200+ here for you)
];

function renderList(filter = "") {
  list.innerHTML = "";
  sites
    .filter(site => site.toLowerCase().includes(filter.toLowerCase()))
    .forEach(site => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${site}" target="_blank">${site}</a>`;
      list.appendChild(li);
    });
}

search.addEventListener("input", () => {
  renderList(search.value);
});

renderList();