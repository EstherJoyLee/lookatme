window.addEventListener("DOMContentLoaded", () => {
  alert("aaa");
  const grid = new Isotope("section", {
    itemSelector: "article",
    columnWidth: "article", // itemSelector 와 동일한 값을 지정하면 자동으로 넓이 값을 계산해줌
    transitionDuration: "0.5s",
  }); // first param: parent of target elem

  const btns = document.querySelectorAll("main ul li");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const isOn = e.currentTarget.classList.contains("on");
      if (!isOn) return;
      activation(e);
    });
  });

  const activation = function (e) {
    for (let btn of btns) {
      btn.classList.remove("on");
    }
    e.currentTarget.classList.add("on");
    const btn_a = e.currentTarget.querySelector("a");
    const a_href = btn_a.getAttribute("href");

    grid.arrange({
      filter: a_href,
    });
  };
});
