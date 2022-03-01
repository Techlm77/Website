function selectProject() {
  const body = document.body;
  const menu = document.createElement("div");
  const project = document.createElement("div");
  const select = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "projects";

  const ulist = document.createElement("ul");
  const litem = document.createElement("li");
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

    litem.appendChild(newprolist);
  };

  ulist.append(litem);
  select.append(heading);
  select.append(ulist);
  project.append(select);
  menu.append(project);
  body.append(menu);

  document.getElementsByTagName("div")[0].className = "menu";
  document.getElementsByTagName("div")[1].className = "project";
  document.getElementsByTagName("div")[2].className = "select";
}
