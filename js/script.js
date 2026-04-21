// script.js
document.querySelectorAll(".menu").forEach(btn => {
  btn.addEventListener("click", () => {
    const feature = btn.dataset.feature;
    loadFeature(feature);
  });
});

function loadFeature(feature) {
  const area = document.getElementById("feature-area");
  area.innerHTML = `<p>Memuat fitur ${feature.toUpperCase()}...</p>`;

  // Dinamis load file JS mandiri
  import(`./features/${feature}.js`)
    .then(module => {
      area.innerHTML = "";
      module.render(area);
    })
    .catch(err => {
      area.innerHTML = `<p>Fitur ${feature.toUpperCase()} belum tersedia.</p>`;
      console.error(err);
    });
}
