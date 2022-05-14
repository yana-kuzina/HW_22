import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

import { createToDo, removeLi } from "./helpers";

const form = document.forms["todo-form"];
const list = document.getElementById("list");
const todoInput = form.elements["todo-input"];

form.onsubmit = (event) => {
  event.preventDefault();

  if (todoInput.value.trim().length === 0) {
    todoInput.classList.add("error");

    return;
  }

  const li = createToDo(todoInput.value);
  list.append(li);

  form.reset();
};

todoInput.onfocus = () => {
  const isErrorField = todoInput.classList.contains("error");

  if (isErrorField) {
    todoInput.classList.remove("error");
  }
};

list.onclick = function (event) {
  const button = event.target;
  const isRemoveButton = button.className === "remove-button";

  if (isRemoveButton) {
    removeLi(button);
  }
};

list.onchange = function (event) {
  const checkbox = event.target;
  checkbox.disabled = true;

  // 1 - find parent LI
  const parentLi = checkbox.closest("li");
  // 2 - find button in current LI
  const button = parentLi.querySelector("button");
  // 3 - disabled=true for button
  button.disabled = true;

  // add class for LI
  const span = parentLi.querySelector("span");
  span.classList.add("completed");
};
