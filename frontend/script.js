const SERVER_URL = "http://localhost:3000";

async function serverAddStudent(obj) {
  let response = await fetch(SERVER_URL + "/api/students", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(obj),
  });
  let data = await response.json();
  return data;
}

async function serverGetStudents() {
  let response = await fetch(SERVER_URL + "/api/students", {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  let data = await response.json();
  return data;
}

let serverData = await serverGetStudents();

//   let listStudents = [

//   {
//     name: "Илья",
//     lastName: "Иванович",
//     surname: "Олегович",
//     birthday: new Date(1997, 02, 12),
//     faculty: "Экономика",
//     start: 2010,
//   },
//   {
//     name: "Алла",
//     lastName: "Клочкова",
//     surname: " Александровна",
//     birthday: new Date(1995, 04, 05),
//     faculty: "Педагогика",
//     start: 2011,
//   },
//   {
//     name: "Александр",
//     lastName: "Чорный",
//     surname: "Альбертович",
//     birthday: new Date(2000, 02, 01),
//     faculty: "Дизайн",
//     start: 2009,
//   },
// ];

let listStudents = [];

if (serverData !== null) {
  listStudents = serverData;
}

function formatDate(date) {
  var dd = date.getDate();
  if (dd < 10) dd = "0" + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  var yy = date.getFullYear();
  if (yy < 10) yy = "0" + yy;

  return dd + "." + mm + "." + yy;
}

function $getNewStudentTR(studObj) {
  const $tr = document.createElement("tr");
  const $tdFio = document.createElement("td");
  const $txBirthDay = document.createElement("td");
  const $tdFaculty = document.createElement("td");
  const $tdStudyStart = document.createElement("td");
  const $tdDelete = document.createElement("td");
  const $tdBtnDelete = document.createElement("button");

  $tdBtnDelete.classList.add("btn", "btn-danger", "w-100");
  $tdBtnDelete.textContent = "Удалить";

  $tdFio.textContent = `${studObj.lastName} ${studObj.name} ${studObj.surname}`;
  $txBirthDay.textContent = formatDate(new Date(studObj.birthday));
  $tdFaculty.textContent = studObj.faculty;
  $tdStudyStart.textContent = studObj.studyStart;

  ////////

  $tdBtnDelete.addEventListener("click", function () {
    console.log(studObj);
  });
  //////////
  $tdDelete.append($tdBtnDelete);
  $tr.append($tdFio, $txBirthDay, $tdFaculty, $tdStudyStart, $tdDelete);
  // $studTable.append($tr);
  return $tr;
}

function render(arr) {
  let copyArr = [...arr];

  var $studTable = document.getElementById("stud-table");

  $studTable.innerHTML = "";
  for (const studObj of copyArr) {
    const $newTr = $getNewStudentTR(studObj);
    $studTable.append($newTr);
  }
}

render(listStudents);

document
  .getElementById("add-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    let newStudentObj = {
      name: document.getElementById("name-inp").value,
      lastname: document.getElementById("lastname-inp").value,
      surname: document.getElementById("surname-inp").value,
      birthday: new Date(document.getElementById("birthday-inp").value),
      faculty: document.getElementById("faculty-inp").value,
      studyStart: document.getElementById("studyStart-inp").value,
    };

    let serverDataObj = await serverAddStudent(newStudentObj);
    serverDataObj.birthday = new Date(serverDataObj.birthday);
    listStudents.push(serverDataObj);
    console.log(listStudents);
    render(listStudents);
  });
