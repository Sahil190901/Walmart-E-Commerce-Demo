var newCleaner;
class Cleaner {
  constructor(cleanerName, components, directions, caution, imgPic) {
    this.cleanerName = cleanerName;
    this.components = components;
    this.directions = directions;
    this.imgPic = imgPic;
  }
}

function load() {
  // Use fetch to load the JSON data
  fetch("A1-JSON.json")
    .then((response) => response.json())
    .then((data) => {
      loadData(data);
    })
    .catch((error) => {
      console.error("Error loading JSON:", error);
    });
}

function nextpage() {
  window.location.href = "second.html";
}

function loadData(dataJSON) {
  localStorage.setItem("allData", JSON.stringify(dataJSON));
  const nameElement = document.querySelector(".name");
  const numberElement = document.querySelector(".number");
  const campusElement = document.querySelector(".campus");
  const programElement = document.querySelector(".program");
  const loginElement = document.querySelector(".login");
  const fall2023Data = dataJSON.Fall2023;
  if (fall2023Data) {
    nameElement.textContent = `My Name: ${fall2023Data.formalName}`;
    numberElement.textContent = `My Student Number: ${fall2023Data.collegeID}`;
    campusElement.textContent = `My Sheridan Campus: ${fall2023Data.collegeCampus}`;
    programElement.textContent = `My Sheridan Program: ${fall2023Data.collegeProgram}`;
    loginElement.textContent = `My Sheridan Login: ${fall2023Data.collegeLogin}`;
  } else {
    // Handle the case where data is not found
    nameElement.textContent = "My Name:No  Data ";
    numberElement.textContent = "My Student Number:  No Data ";
    loginElement.textContent = "My Sheridan Login:  No Data";
    campusElement.textContent = "My Sheridan Campus: No Data ";
    programElement.textContent = "My Sheridan Program:  No Data ";
  }

  document.querySelector(
    ".head"
  ).innerHTML = `Fall 2023 / Assignment for ${fall2023Data.formalName}`;
}

function rotateimage() {
  const userpic = document.querySelector("#userpic");
  userpic.classList.add("lnusa");
}
function walmartlink() {}
function backtonormal() {
  const userpic = document.querySelector("#userpic");
  userpic.classList.remove("lnusa");
}
