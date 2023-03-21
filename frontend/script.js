let listStudents = [
  {
    name: "Илья",
    lastName: "Иванович",
    surname: "Олегович",
    birthday: new Date(1997, 02, 12),
    faculty: "Экономика",
    start: 2010,
  },
  {
    name: "Алла",
    lastName: "Клочкова",
    surname: " Александровна",
    birthday: new Date(1995, 04, 05),
    faculty: "Педагогика",
    start: 2011,
  },
  {
    name: "Александр",
    lastName: "Чорный",
    surname: "Альбертович",
    birthday: new Date(2000, 02, 01),
    faculty: "Дизайн",
    start: 2009,
  },
];

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
  const $tdStart = document.createElement("td");

  $tdFio.textContent = `${studObj.lastName} ${studObj.name} ${studObj.surname}`;
  $txBirthDay.textContent = formatDate(studObj.birthday);
  $tdFaculty.textContent = studObj.faculty;
  $tdStart.textContent = studObj.start;
  $tr.append($tdFio, $txBirthDay, $tdFaculty, $tdStart);
  $studTable.append($tr);
  return $tr;
}

function render(arr) {
  let copyArr = [...arr];

  const $studTable = document.getElementById("stud-table");

  $studTable.innerHTML = "";
  for (const studObj of copyArr) {
    const $newTr = $getNewStudentTR(studObj);
    $studTable.append($newTr);
  }
}

render(listStudents);
