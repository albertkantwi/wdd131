
const params = new URLSearchParams(window.location.search);

document.getElementById("summaryProduct").textContent =
  params.get("product") || "—";

document.getElementById("summaryRating").textContent =
  params.get("rattings") || "—";

document.getElementById("summaryDate").textContent =
  params.get("date") || "—";

const features = params.getAll("features");
document.getElementById("summaryFeatures").textContent =
  features.length > 0 ? features.join(", ") : "None";

document.getElementById("summaryName").textContent =
  params.get("userName") || "Anonymous";


let reviewCount = Number(localStorage.getItem("reviewCount"));

if (!reviewCount) {
  reviewCount = 0;
}
reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.getElementById("reviewCount").textContent = reviewCount;
