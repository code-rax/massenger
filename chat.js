// global variabels
let bool = true;

// Get dom elements
let chatPart = $.querySelectorAll(".chatPart");
let sectionProfile = $.querySelector(".sectionProfile");
let moreIteml = $.querySelector(".moreIteml");
let sectionType = $.querySelector(".sectionType");

// active display profile
function onDisplay() {
  sectionProfile.style = "display : flex";
}
// Entering section Chat
for (let counter of chatPart) {
  counter.addEventListener("click", (e) => {
    if (e.target.className == "chat1 ch1" || e.target.className == "ch1") {
      sectionType.style = "display : flex";
      onDisplay();
      sectionProfile.innerHTML = `
            <i class="fa-solid fa-arrow-left" id="backIcone"></i>
            <img src="img/users/1.jpg">
            <span>MOHAMAD</span>
            <i class="fa-solid fa-magnifying-glass" id="searchIcone"></i>
            <i class="fa fa-chevron-circle-down" id="i-pen3" aria-hidden="true"></i>
            <input type="search"/>
        `;
    } else if (
      e.target.className == "chat1 ch2" ||
      e.target.className == "ch2"
    ) {
      sectionType.style = "display : flex";
      onDisplay();
      sectionProfile.innerHTML = `
            <i class="fa-solid fa-arrow-left" id="backIcone"></i>
            <img src="img/users/2.jpg"/>
            <span>Ali reza</span>
            <i class="fa-solid fa-magnifying-glass" id="searchIcone"></i>
            <i class="fa fa-chevron-circle-down" id="i-pen3" aria-hidden="true"></i>
        `;
    } else if (
      e.target.className == "chat1 ch3" ||
      e.target.className == "ch3"
    ) {
      sectionType.style = "display : flex";
      onDisplay();
      sectionProfile.innerHTML = `
            <i class="fa-solid fa-arrow-left" id="backIcone"></i>
            <img src="img/users/3.jpg"/>
            <span>ilya</span>
            <i class="fa-solid fa-magnifying-glass" id="searchIcone"></i>
            <i class="fa fa-chevron-circle-down" id="i-pen3" aria-hidden="true"></i>
        `;
    } else if (
      e.target.className == "chat1 ch4" ||
      e.target.className == "ch4"
    ) {
      sectionType.style = "display : flex";
      onDisplay();
      sectionProfile.innerHTML = `
            <i class="fa-solid fa-arrow-left" id="backIcone"></i>
            <img src="img/users/4.jpg"/>
            <span>reza</span>
            <i class="fa-solid fa-magnifying-glass" id="searchIcone"></i>
            <i class="fa fa-chevron-circle-down" id="i-pen3" aria-hidden="true"></i>        `;
    } else if (
      e.target.className == "chat1 ch5" ||
      e.target.className == "ch5"
    ) {
      sectionType.style = "display : flex";
      onDisplay();
      sectionProfile.innerHTML = `
            <i class="fa-solid fa-arrow-left" id="backIcone"></i>
            <img src="img/users/5.jpg"/>
            <span>Hamid</span>
            <i class="fa-solid fa-magnifying-glass" id="searchIcone"></i>
            <i class="fa fa-chevron-circle-down" id="i-pen3" aria-hidden="true"></i>
        `;
    } else if (
      e.target.className == "chat1 ch6" ||
      e.target.className == "ch6"
    ) {
      sectionType.style = "display : flex";
      onDisplay();
      sectionProfile.innerHTML = `
            <i class="fa-solid fa-arrow-left" id="backIcone"></i>
            <img src="img/users/6.jpg"/>
            <span>Farhad</span>
            <i class="fa-solid fa-magnifying-glass" id="searchIcone"></i>
            <i class="fa fa-chevron-circle-down" id="i-pen3" aria-hidden="true"></i>
        `;
    } else if (
      e.target.className == "chat1 ch7" ||
      e.target.className == "ch7"
    ) {
      sectionType.style = "display : flex";
      onDisplay();
      sectionProfile.innerHTML = `
            <i class="fa-solid fa-arrow-left" id="backIcone"></i>
            <img src="img/users/7.jpg"/>
            <span>Asghar</span>
            <i class="fa-solid fa-magnifying-glass" id="searchIcone"></i>
            <i class="fa fa-chevron-circle-down" id="i-pen3" aria-hidden="true"></i>
        `;
    } else if (
      e.target.className == "chat1 ch8" ||
      e.target.className == "ch8"
    ) {
      sectionType.style = "display : flex";
      onDisplay();
      sectionProfile.innerHTML = `
            <i class="fa-solid fa-arrow-left" id="backIcone"></i>
            <img src="img/users/8.jpg"/>
            <span>Akbar</span>
            <i class="fa-solid fa-magnifying-glass" id="searchIcone"></i>
            <i class="fa fa-chevron-circle-down" id="i-pen3" aria-hidden="true"></i>
        `;
    } else if (
      e.target.className == "chat1 ch9" ||
      e.target.className == "ch9"
    ) {
      sectionType.style = "display : flex";
      onDisplay();
      sectionProfile.innerHTML = `
            <i class="fa-solid fa-arrow-left" id="backIcone"></i>
            <img src="img/users/9.jpg"/>
            <span>MOHAMAD</span>
            <i class="fa-solid fa-magnifying-glass" id="searchIcone"></i>
            <i class="fa fa-chevron-circle-down" id="i-pen3" aria-hidden="true"></i>
        `;
    } else if (
      e.target.className == "chat1 ch10" ||
      e.target.className == "ch10"
    ) {
      sectionType.style = "display : flex";
      onDisplay();
      sectionProfile.innerHTML = `
            <i class="fa-solid fa-arrow-left" id="backIcone"></i>
            <img src="img/users/10.jpg"/>
            <span>MOHAMAD</span>
            <i class="fa-solid fa-magnifying-glass" id="searchIcone"></i>
            <i class="fa fa-chevron-circle-down" id="i-pen3" aria-hidden="true"></i>
        `;
    }

    // btn profile
    let iconsProfile1 = $.querySelector("#backIcone");
    let iconsProfile2 = $.querySelector("#searchIcone");
    let iconsProfile3 = iconsProfile2.nextElementSibling;

    // btn back
    iconsProfile1.addEventListener("click", () => {
      sectionType.style = "display : none";
      sectionProfile.style = "display : none";
      if (bool == false) {
        moreIteml.style = "display : none";
        bool = true;
      }
    });

    //serch
    iconsProfile2.addEventListener("click", () => {
      let sectionProfileInput = $.querySelector(".sectionProfile input");
      sectionProfileInput.style = "display : block";
      if (bool == false) {
        moreIteml.style = "display : none";
        bool = true;
      }
    });

    // more item
    iconsProfile3.addEventListener("click", () => {
      if (bool == true) {
        moreIteml.style = "display : flex";
        bool = false;
      } else {
        moreIteml.style = "display : none";
        bool = true;
      }
    });
  });
}
