var entries = localStorage.getItem("entries")
  ? JSON.parse(localStorage.getItem("entries"))
  : [];
var res = {};
function updateTable() {
  let entries_table = document.getElementById("entries_table");
  for (let i = 1; i < entries_table.rows.length; i++) {
    entries_table.deleteRow(i);
  }
  entries.map((entry, index) => {
    let row = document.createElement("tr");
    Object.keys(entry).forEach((item) => {
      let cell = document.createElement("td");
      if (item == "agreed") {
        cell.textContent = entry[item] == "on" ? true : false;
      } else {
        cell.textContent = entry[item];
      }
      cell.className = "p-2 border-b border-l text-left";
      row.appendChild(cell);
    });
    entries_table.appendChild(row);
  });
}
updateTable();
document.getElementById("reg_form").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(document.getElementById("reg_form"));
  for (const [name, value] of data) {
    res[name] = value;
  }
  entries.push(res);
  localStorage.setItem("entries", JSON.stringify(entries));
  updateTable();
});
