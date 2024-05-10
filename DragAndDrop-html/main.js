const applicantArray = [
  {
    id: 1,
    title: "Huma Therman",
    companyName: "Codinglimits Pvt Ltd.",
    address: "Haryana",
  },
  {
    id: 2,
    title: "John Doe",
    companyName: "Tech Innovators Inc.",
    address: "Bangalore",
  },
  {
    id: 3,
    title: "Alice Smith",
    companyName: "Infinite Coders Ltd.",
    address: "Delhi",
  },
  {
    id: 4,
    title: "Bob Johnson",
    companyName: "TechSolutions Co.",
    address: "Mumbai",
  },
  {
    id: 5,
    title: "Samantha Lee",
    companyName: "Digital Innovations Ltd.",
    address: "Chennai",
  },
];

//Mapping Sections

const sectionsArray = {
  ["Screen Select"]: applicantArray,
  [`Interview L1`]: [],
  [`Interview L2`]: [],
  [`Assessments`]: [],
  [`Offer`]: [],
};

let activeTab = 0;

const mainLeftSection = document.getElementById("mainLeftSection");

// Initiallize HTML
mainLeftSection.innerHTML = Object.keys(sectionsArray)
  .map((sectionId, ind) => {
    return `<div data-item-section="${sectionId}"  class="AccordionTab ${
      activeTab === ind ? "active" : ""
    }">
  <div class="AccordionTabHeader">
    <span>
      <i class="pi pi-angle-down"></i>
      <p>${sectionId}</p>
    </span>
  </div>
  <div class="tabContent">
    <div class="tabContentHeader">
      <div class="leftSection">
        <h4>${sectionId}</h4>
      </div>
      <div class="rightSection">
        <i class="pi pi-search"></i>
        <i class="pi pi-filter"></i>
        <i class="pi pi-sort-amount-up"></i>
        <!-- The following icon is replaced with a button for simplicity -->
        <button
          class="pi pi-window-maximize"
          onclick="toggleFullView()"
        ></button>
      </div>
    </div>
    <div data-list-conatiner="${sectionId}" class="tabContent_Data">
    ${sectionsArray[sectionId]
      .map((item, index) => {
        return `<div draggable="true" ondragstart="dragStart(event, ${index}, '${sectionId}')" class="item" data-item-index="${index}" data-item-section="${sectionId}">
                  <h3>${item.title}</h3>
                  <p>${item.companyName}</p>
                </div>`;
      })
      .join("")}
    </div>
  </div>
</div>`;
  })
  .join("");

const accordionTab = document.querySelectorAll(".AccordionTab");

// Attaching addEventListeners HTML
accordionTab.forEach((tab, ind) => {
  tab.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  tab.addEventListener("drop", (e) => handleDrop(event, tab));

  tab.addEventListener("click", (e) => {
    if (tab.classList.contains("active")) return;
    accordionTab.forEach((tb, ind) => {
      tb.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

function dragStart(event, index, sectionId) {
  try {
    event.dataTransfer.setData("text/plain", "from " + sectionId);
    event.dataTransfer.setData(
      "application/json",
      JSON.stringify({ index, sectionId })
    );
  } catch (error) {
    console.error("Error setting drag data:", error);
  }
}

const handleDrop = (e, tab) => {
  e.preventDefault();

  const data1 = e.dataTransfer.getData("text/plain");
  const data2 = e.dataTransfer.getData("application/json");
  const parseData = JSON.parse(data2);
  const droppingTo = tab.getAttribute("data-item-section");

  const { index, sectionId } = parseData;

  updateArrays({
    obj: sectionsArray,
    from: sectionId,
    itemIndex: index,
    to: droppingTo,
  });
};

function updateArrays({ obj, from, to, itemIndex }) {
  const data = obj[from][itemIndex];
  obj[from].splice(itemIndex, 1);
  obj[to].push(data);
  reMapping(to);
  reMapping(from);
}

function reMapping(to) {
  const droppingTo = document.querySelector(`[data-list-conatiner="${to}"]`);
  return (droppingTo.innerHTML = sectionsArray[to]
    .map((item, index) => {
      return `<div draggable="true" ondragstart="dragStart(event, ${index}, '${to}')" class="item" data-item-index="${index}" data-item-section="${to}">
                <h3>${item.title}</h3>
                <p>${item.companyName}</p>
              </div>`;
    })
    .join(""));
}
