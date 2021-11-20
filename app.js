const input = document.querySelector("input");
const form = document.querySelector("form");
var i = 1; //  set your counter to 1

function percent() {
  let circle2 = document.querySelector(".circle2");
  let percent = document.querySelector("#percent");

  if (input.value === "") {
    percent.innerHTML = "0%";
  } else if (input.value > 100) {
    percent.innerHTML = "Overvalue! ";
    percent.classList.add("danger");

    circle2.style.strokeDashoffset = `calc((100 * 6) - ((100 * 6) * 100) / 100)`;
  } else if (input.value < 0) {
    percent.innerHTML = "Undervalue! ";
    percent.classList.add("danger");
    circle2.style.strokeDashoffset = `calc((100 * 6) - ((100 * 0) * 100) / 100)`;
  } else {
    percent.classList.remove("danger");
    circle2.style.strokeDashoffset = `calc((100 * 6) - ((100 * 6) * ${input.value}) / 100)`;
    // percent.textContent = `${input.value}%`;
    target = { val: 0 };

    gsap.to(target, {
      duration: 4,
      val: input.value,
      onUpdate: function () {
        percent.textContent = target.val.toFixed(0) + "%";
      },
    });
    // gsap.from("#percent", {
    //   textContent: 0 + "%",
    //   duration: 4,
    //   ease: Power1.easeIn,
    //   snap: { textContent: 1 },
    //   // stagger: 3,
    // });
    // for (let i = 0; input.value >= i; i++) {
    //   setTimeout(() => {
    //     percent.innerHTML = `${i}%`;
    //   }, 100 * i);
    // }
  }
  input.value = "";
  circle2.style.strokeDashoffset = `calc((100 * 6) - ((100 * 0) * ${input.value}) / 100)`;
}

form.addEventListener("submit", () => {
  percent();

  e.preventDefault();
});
