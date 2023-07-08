const item = document.getElementById("item");
const toDoBox = document.getElementById("to-do-box");

const addToDo = (data) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${data}
            <i class="fas fa-times"></i>`;
  listItem.addEventListener("click", () => {
    listItem.classList.toggle("done");
  });
  listItem.querySelector("i").addEventListener("click", () => {
    listItem.remove();
  });
  toDoBox.appendChild(listItem);
};

item.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addToDo(item.value);
    item.value = "";
  }
});
