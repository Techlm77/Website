function changeP() {
  const para = document.getElementsByTagName("p")[0];

  if (para.innerText == "Test1") {
    para.innerText = "Worked!";
    return;
  }

  if (para.innerText == "Worked!") {
    para.innerText = "The function is working properly :)";
    return;
  }

};