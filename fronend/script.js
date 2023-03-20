let listStudents = [
  {
    name: "Илья",
    lastname: "Иванович",
    surname: "Олегович",
    birthday: new Date(1997, 02, 12),
    faculty: "Экономика",
    start: 2010,
  },
  {
    name: "Алла",
    lastname: "Клочкова",
    surname: " Александровна",
    birthday: new Date(1995, 04, 05),
    faculty: "Педагогика",
    start: 2011,
  },
  {
    name: "Александр",
    lastname: "Чорный",
    surname: "Альбертович",
    birthday: new Date(2000, 02, 01),
    faculty: "Дизайн",
    start: 2009,
  },
];

const $studTable = document.getElementById("stud-table");

for (const studObj of listStudents) {
  const $tr = document.createElement("tr");
}
