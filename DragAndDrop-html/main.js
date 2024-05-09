const accordionTab = document.querySelectorAll(".AccordionTab");

accordionTab.forEach((tab, ind) => {
  tab.addEventListener("click", (e) => {
    accordionTab.forEach((tb, ind) => {
      tb.classList.remove("active");
    });
    tab.classList.add("active");
  });
});
