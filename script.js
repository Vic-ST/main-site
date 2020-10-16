const menuicon = document.querySelector(".menuicon")

const mobilenav = document.querySelector("#mobilenav")

menuicon.onclick = () => {
  if (mobilenav.style.top === "-100%") {
    mobilenav.style.top = "0";
    menuicon.classList.add("change");
  } else {
    mobilenav.style.top = "-100%";
    menuicon.classList.remove("change");
  }
}
