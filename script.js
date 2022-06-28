// system logger
if (!localStorage.getItem("USER_NAME")) {
  function systemlLogger() {
    window.location.href = "systemlogger/signup-localstorage.html";
  }
}

// global variables
let $ = document;
bool = true;

// Get dom elements
let chat = $.querySelector(".chat");
let menu = $.querySelector(".menu");
let menuDiv = $.querySelectorAll(".menu div");
let toolsItem = $.querySelector(".toolsItem");
let startChat = $.querySelector(".startChat");
let chatIteml = $.querySelector(".chatIteml");
let account = $.querySelector(".account");
let btnAccount = $.querySelector(".btnAccount");
let i_pen1 = $.querySelector("#i-pen1");
let userName = $.querySelector(".userName span");
let userGmail = $.querySelector(".userGmail span");

// Top menu
menu.addEventListener("click", () => {
  toolsItem.classList.toggle("active");
  menuDiv[0].classList.toggle("active");
  menuDiv[1].classList.toggle("active");
  menuDiv[2].classList.toggle("active");
  //اگر منوی پایین باز بود و روی منوی بالا کلیک شد
  if (
    toolsItem.className == "toolsItem active" &&
    chatIteml.className == "chatIteml active"
  ) {
    if (bool == true) {
      startChat.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
      startChat.classList.toggle("active");
      chatIteml.classList.toggle("active");
      bool = false;
    } else {
      startChat.innerHTML = `<i class="fa-solid fa-pen"></i>`;
      startChat.classList.toggle("active");
      chatIteml.classList.toggle("active");
      bool = true;
    }
  }
});
// Down menu
startChat.addEventListener("click", () => {
  if (bool == true) {
    startChat.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    startChat.classList.toggle("active");
    chatIteml.classList.toggle("active");
    bool = false;
  } else {
    startChat.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    startChat.classList.toggle("active");
    chatIteml.classList.toggle("active");
    bool = true;
  }
  // اگر منوی بالا باز بود و روی منوی پایین کلیک شد
  if (
    chatIteml.className == "chatIteml active" &&
    toolsItem.className == "toolsItem active"
  ) {
    toolsItem.classList.toggle("active");
    menuDiv[0].classList.toggle("active");
    menuDiv[1].classList.toggle("active");
    menuDiv[2].classList.toggle("active");
  }
});

// Go to the account section
btnAccount.addEventListener("click", () => {
  chat.classList.toggle("active");
  account.classList.toggle("active");
  toolsItem.classList.toggle("active");
  menuDiv[0].classList.toggle("active");
  menuDiv[1].classList.toggle("active");
  menuDiv[2].classList.toggle("active");
});
// Return to chat page
i_pen1.addEventListener("click", () => {
  chat.classList.toggle("active");
  account.classList.toggle("active");
});

// Put information by local storage
let localUser = localStorage.getItem("USER_NAME");
let localGmail = localStorage.getItem("USER_EMAIL");
let creatTextNodeUserName = $.createTextNode(localUser);
let creatTextNodeUserGmail = $.createTextNode(localGmail);
userName.appendChild(creatTextNodeUserName);
userGmail.appendChild(creatTextNodeUserGmail);
