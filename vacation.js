const panels = document.querySelectorAll(".panels div");
console.log(panels);
for (let panel of panels) {
  panel.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("open");
    console.log("event type: ", e.type);
    console.log("event timeStamp: ", e.timeStamp);
    console.log("currentEvent: ", e.currentTarget);
    console.log("child of currentEvent", e.target);
  });
}
