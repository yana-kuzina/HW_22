export function createToDo(value) {
  let li = document.createElement("li");
  li.className = "list-group-item";
  const span = document.createElement("span");
  span.innerHTML = value;
  li.append(span);

  const deleteButton = document.createElement("button");
  deleteButton.className = "remove-button btn btn-danger";
  deleteButton.innerText = "Delete";
  li.append(deleteButton);

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox"); // <input type=checkbox
  checkbox.className = "form-check-input";
  li.prepend(checkbox);

  return li;
}

export function removeLi(element) {
  const li = element.closest("li");
  li.remove();
}
