// Form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const msg = document.getElementById("formMsg");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name.value || !email.value || !message.value) {
    msg.textContent = "All fields are required!";
    msg.style.color = "orange";
  } else if (!email.value.match(emailPattern)) {
    msg.textContent = "Invalid email format!";
    msg.style.color = "red";
  } else {
    msg.textContent = "Form submitted successfully!";
    msg.style.color = "lightgreen";
    name.value = "";
    email.value = "";
    message.value = "";
  }
});

// To-do list logic
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
