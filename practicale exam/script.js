let button = document.querySelectorAll("button");
// console.log(button);
button[1].addEventListener("click", function hideButton() {
  button[1].remove();
});

function replaceImg(parmeter) {
  parmeter.src = "imges/anothercar.jpg";
}
let appointment = document.querySelectorAll(".appointment");

button[2].addEventListener("click", function DecrementAppointment() {
  if (appointment[0].innerText > 0) {
    --appointment[0].innerText;
  }
});
button[3].addEventListener("click", function DecrementAppointment() {
  if (appointment[1].innerText > 0) {
    --appointment[1].innerText;
  }
});
button[4].addEventListener("click", function DecrementAppointment() {
  if (appointment[2].innerText > 0) {
    --appointment[2].innerText;
  }
});
button[5].addEventListener("click", function DecrementAppointment() {
  if (appointment[3].innerText > 0) {
    --appointment[3].innerText;
  }
});
button[6].addEventListener("click", function DecrementAppointment() {
  if (appointment[4].innerText > 0) {
    --appointment[4].innerText;
  }
});
button[7].addEventListener("click", function DecrementAppointment() {
  if (appointment[5].innerText > 0) {
    --appointment[5].innerText;
  }
});

let feedback = document.getElementById("feedback");

let feedbackPic = document.getElementById("personFeedback");

function ShowAnother() {
  feedback.innerHTML =
    "this is the second feedbackLorem ipsum dolor sit, amet consectetur adipisicing elit. Quas error similique omnis tenetur necessitatibus veniam aliquid molestiae accusamus assumenda veritatis rerum iure dignissimos odio architecto voluptatem numquam cumque, libero placeat quasi sapiente molestias. Maxime facere laboriosam quae esse in enim quia odit dignissimos praesentium mod";
  feedbackPic.src = "imges/clenttwo.jpg";
}
