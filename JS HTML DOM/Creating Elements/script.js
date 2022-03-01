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

  const board = document.createElement("div");
  menu.append(board);

  const cards = document.createElement("div");
  board.append(cards);

  const heading2 = document.createElement("h1");
  heading2.textContent = "Projects";
  cards.append(heading2);

  const production = document.createElement("div");
  cards.append(production);

  const cardred1 = document.createElement("div");
  production.append(cardred1);

  const rc1initial = document.createElement("div");
  rc1initial.textContent = "A";
  cardred1.append(rc1initial);

  const rc1desc = document.createElement("div");
  rc1desc.textContent = "Add an image";
  cardred1.append(rc1desc);

  const cardorange1 = document.createElement("div");
  production.append(cardorange1);

  const oc1initial = document.createElement("div");
  oc1initial.textContent = "R";
  cardorange1.append(oc1initial);

  const oc1desc = document.createElement("div");
  oc1desc.textContent = "Replace an image";
  cardorange1.append(oc1desc);

  const cardyellow1 = document.createElement("div");
  production.append(cardyellow1);

  const yc1initial = document.createElement("div");
  yc1initial.textContent = "A R";
  cardyellow1.append(yc1initial);

  const yc1desc = document.createElement("div");
  yc1desc.textContent = "Add / Replace an image";
  cardyellow1.append(yc1desc);

  const cardgreen1 = document.createElement("div");
  production.append(cardgreen1);

  const gc1initial = document.createElement("div");
  gc1initial.textContent = "A R";
  cardgreen1.append(gc1initial);

  const gc1desc = document.createElement("div");
  gc1desc.textContent = "Add / Replace an image v2";
  cardgreen1.append(gc1desc);

  const cardblue1 = document.createElement("div");
  production.append(cardblue1);

  const bc1initial = document.createElement("div");
  bc1initial.textContent = "L";
  cardblue1.append(bc1initial);

  const bc1desc = document.createElement("div");
  bc1desc.textContent = "List of images/videos";
  cardblue1.append(bc1desc);

  const cardpurple1 = document.createElement("div");
  production.append(cardpurple1);

  const purpc1initial = document.createElement("div");
  purpc1initial.textContent = "A";
  cardpurple1.append(purpc1initial);

  const purpc1desc = document.createElement("div");
  purpc1desc.textContent = "Add an images/video";
  cardpurple1.append(purpc1desc);

  const cardpink1 = document.createElement("div");
  production.append(cardpink1);

  const pic1initial = document.createElement("div");
  pic1initial.textContent = "R";
  cardpink1.append(pic1initial);

  const pic1desc = document.createElement("div");
  pic1desc.textContent = "Replace an image/video";
  cardpink1.append(pic1desc);

  const cardred2 = document.createElement("div");
  production.append(cardred2);

  const rc2initial = document.createElement("div");
  rc2initial.textContent = "D";
  cardred2.append(rc2initial);

  const rc2desc = document.createElement("div");
  rc2desc.textContent = "Display a video";
  cardred2.append(rc2desc);

  const cardorange2 = document.createElement("div");
  production.append(cardorange2);

  const oc2initial = document.createElement("div");
  oc2initial.textContent = "D";
  cardorange2.append(oc2initial);

  const oc2desc = document.createElement("div");
  oc2desc.textContent = "Display an image";
  cardorange2.append(oc2desc);

  const cardyellow2 = document.createElement("div");
  production.append(cardyellow2);

  const yc2initial = document.createElement("div");
  yc2initial.textContent = "U";
  cardyellow2.append(yc2initial);

  const yc2desc = document.createElement("div");
  yc2desc.textContent = "Upload an image/video (Add)";
  cardyellow2.append(yc2desc);

  const cardgreen2 = document.createElement("div");
  production.append(cardgreen2);

  const gc2initial = document.createElement("div");
  gc2initial.textContent = "R";
  cardgreen2.append(gc2initial);

  const gc2desc = document.createElement("div");
  gc2desc.textContent = "Replace an existed file";
  cardgreen2.append(gc2desc);

  const cardblue2 = document.createElement("div");
  production.append(cardblue2);

  const bc2initial = document.createElement("div");
  bc2initial.textContent = "U";
  cardblue2.append(bc2initial);

  const bc2desc = document.createElement("div");
  bc2desc.textContent = "Upload an image/video (Bug)";
  cardblue2.append(bc2desc);

  document.getElementsByTagName("div")[0].className = "project";
  document.getElementsByTagName("div")[1].className = "navbar";
  document.getElementsByTagName("div")[2].className = "left";

  document.getElementsByTagName("div")[3].className = "menu";
  document.getElementsByTagName("div")[4].className = "project";
  document.getElementsByTagName("div")[5].className = "select";

  document.getElementsByTagName("div")[6].className = "board";
  document.getElementsByTagName("div")[7].className = "cards";
  document.getElementsByTagName("div")[8].className = "production";

  document.getElementsByTagName("div")[9].className = "card red";
  document.getElementsByTagName("div")[10].className = "initial";
  document.getElementsByTagName("div")[11].className = "desc";

  document.getElementsByTagName("div")[12].className = "card orange";
  document.getElementsByTagName("div")[13].className = "initial";
  document.getElementsByTagName("div")[14].className = "desc";

  document.getElementsByTagName("div")[15].className = "card yellow";
  document.getElementsByTagName("div")[16].className = "initial";
  document.getElementsByTagName("div")[17].className = "desc";

  document.getElementsByTagName("div")[18].className = "card green";
  document.getElementsByTagName("div")[19].className = "initial";
  document.getElementsByTagName("div")[20].className = "desc";

  document.getElementsByTagName("div")[21].className = "card blue";
  document.getElementsByTagName("div")[22].className = "initial";
  document.getElementsByTagName("div")[23].className = "desc";

  document.getElementsByTagName("div")[24].className = "card purple";
  document.getElementsByTagName("div")[25].className = "initial";
  document.getElementsByTagName("div")[26].className = "desc";

  document.getElementsByTagName("div")[27].className = "card pink";
  document.getElementsByTagName("div")[28].className = "initial";
  document.getElementsByTagName("div")[29].className = "desc";

  document.getElementsByTagName("div")[30].className = "card red";
  document.getElementsByTagName("div")[31].className = "initial";
  document.getElementsByTagName("div")[32].className = "desc";

  document.getElementsByTagName("div")[33].className = "card orange";
  document.getElementsByTagName("div")[34].className = "initial";
  document.getElementsByTagName("div")[35].className = "desc";

  document.getElementsByTagName("div")[36].className = "card yellow";
  document.getElementsByTagName("div")[37].className = "initial";
  document.getElementsByTagName("div")[38].className = "desc";

  document.getElementsByTagName("div")[39].className = "card green";
  document.getElementsByTagName("div")[40].className = "initial";
  document.getElementsByTagName("div")[41].className = "desc";

  document.getElementsByTagName("div")[42].className = "card blue";
  document.getElementsByTagName("div")[43].className = "initial";
  document.getElementsByTagName("div")[44].className = "desc";

  document.getElementsByTagName("li")[7].className = "selected";
}
