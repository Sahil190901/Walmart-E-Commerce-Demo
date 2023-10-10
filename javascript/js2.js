function load() {
  const storedData = localStorage.getItem("allData");
  const allData = JSON.parse(storedData);
  const cleanerData = allData.cleaners;
  const anchor1Element = document.querySelector(".cleanerImg");
  const anchor2Element = document.querySelector(".walmartImg");
  const menuElement = document.querySelector(".menu");

  // Set the new href attribute
  anchor1Element.href = allData.citeReferenceRecipes;
  anchor2Element.href = allData.citeReferenceImages;
  cleanerData.forEach((cleaner, index) => {
    const cleanerName = cleaner.cleanerName;
    const h1Element = document.createElement("h1");
    h1Element.id = index;
    h1Element.textContent = cleanerName;
    menuElement.appendChild(h1Element);
  });
  menuElement.addEventListener("click", function (event) {
    if (event.target.tagName === "H1") {
      const cleanerDetails = cleanerData[event.target.id];
      document.querySelector(".menu_details").innerHTML = `
        <h2>${cleanerDetails.cleanerName}</h2>
        <ul>
            ${cleanerDetails.components
              .map((component) => `<li>${component}</li>`)
              .join("")}
        </ul>
        <p><strong>Directions:</strong> ${cleanerDetails.directions}</p>
        <p><strong>Caution:</strong> ${cleanerDetails.caution}</p>
        <img src="A1Images/${cleanerDetails.imgPic}" alt="${
        cleanerDetails.cleanerName
      } Image" width=200px height=200px>
    `;
    }
  });
}
