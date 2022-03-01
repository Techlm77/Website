function selectProject() {
  const body = document.body;

  const projectbody = document.createElement("div");
  body.append(projectbody);

  const navbar = document.createElement("div");
  projectbody.append(navbar);

  const left = document.createElement("div");
  navbar.append(left);

  const ultopnav = document.createElement("ul");
  left.append(ultopnav);

  const licurrentpage = document.createElement("li");
  ultopnav.append(licurrentpage);

  const selectpage = [
    "Home",
    "Projects",
    "About",
    "Contact"
  ];

  for (let currentpage of selectpage) {
    let selectedpage = document.createElement("li");
    selectedpage.textContent = currentpage;

    licurrentpage.appendChild(selectedpage);
  };

  const menu = document.createElement("div");
  projectbody.append(menu);

  const project = document.createElement("div");
  menu.append(project);

  const select = document.createElement("div");
  project.append(select);

  const heading = document.createElement("h1");
  heading.textContent = "projects";
  select.append(heading);

  const ulist = document.createElement("ul");
  select.append(ulist);

  const projectlist = [
    "3D Shapes",
    "Design",
    "File Upload",
    "Games",
    "Random stuff",
    "Terminal/Command",
    "Trigonometry",
    "Unity"
  ];

  for (let projects of projectlist) {
    let newprolist = document.createElement("li");
    newprolist.textContent = projects;

    ulist.appendChild(newprolist);
  };

  document.getElementsByTagName("div")[0].className = "project";
  document.getElementsByTagName("div")[1].className = "navbar";
  document.getElementsByTagName("div")[2].className = "left";

  document.getElementsByTagName("div")[3].className = "menu";
  document.getElementsByTagName("div")[4].className = "project";
  document.getElementsByTagName("div")[5].className = "select";

  document.getElementsByTagName("li")[7].className = "selected";
}
