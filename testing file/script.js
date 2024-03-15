

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   if (element.classList.contains("dark")) {
    element.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  } else {
    element.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  }
}


function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === true ;
    localStorage.setItem('darkmode', !wasDarkmode);
    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode);
}

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === true );
}

const toggleButton = document.querySelector(".toggle-button");
const body = document.body;

toggleButton.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  }
});

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  body.classList.add(currentTheme);
}

if (currentTheme=='dark'){
    body.classList.add('dark-mode');
    }
    else{
    body.classList.add('light-mode');
    }

    