const applicantArray = [
  {
    title: "Huma Therman",
    companyName: "Codinglimits Pvt Ltd.",
    address: "Haryana",
  },
  {
    title: "John Doe",
    companyName: "Tech Innovators Inc.",
    address: "Bangalore",
  },
  {
    title: "Alice Smith",
    companyName: "Infinite Coders Ltd.",
    address: "Delhi",
  },
  {
    title: "Bob Johnson",
    companyName: "TechSolutions Co.",
    address: "Mumbai",
  },
  {
    title: "Samantha Lee",
    companyName: "Digital Innovations Ltd.",
    address: "Chennai",
  },
  {
    title: "Michael Jordan",
    companyName: "Sports Gear Inc.",
    address: "Chicago",
  },
  {
    title: "Emma Watson",
    companyName: "Creative Minds Co.",
    address: "London",
  },
  {
    title: "Alex Rodriguez",
    companyName: "Data Solutions Ltd.",
    address: "New York",
  },
  {
    title: "Sophia Garcia",
    companyName: "Tech Innovations Ltd.",
    address: "Mexico City",
  },
  {
    title: "Daniel Kim",
    companyName: "Innovative Creations Inc.",
    address: "Seoul",
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
let draggingOverItemIndex = 0;

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
        return `<div draggable="true" ondragstart="dragStart(event, ${index}, '${sectionId}')"
        ondragover="mouseOverHandler(event,${index}, '${sectionId}')"   
        class="item"
           data-item-index="${index}"
           data-item-section="${sectionId}">
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

  if (sectionId === droppingTo) {
    reOrderArray({
      obj: sectionsArray,
      from: sectionId,
      draggingItemIndex: index,
      dropOverIndex: draggingOverItemIndex,
    });
  } else {
    updateArrays({
      obj: sectionsArray,
      from: sectionId,
      to: droppingTo,
      itemIndex: index,
    });
  }
};

function updateArrays({ obj, from, to, itemIndex }) {
  const data = obj[from][itemIndex];
  obj[from].splice(itemIndex, 1);
  obj[to].push(data);
  reMapping(to);
  reMapping(from);
}

function reOrderArray({ obj, from, draggingItemIndex, dropOverIndex }) {
  const shiftData = obj[from][draggingItemIndex];
  obj[from].splice(draggingItemIndex, 1);
  obj[from].splice(dropOverIndex, 0, shiftData);
  reMapping(from);
}

function reMapping(to) {
  const droppingTo = document.querySelector(`[data-list-conatiner="${to}"]`);
  return (droppingTo.innerHTML = sectionsArray[to]
    .map((item, index) => {
      return `<div draggable="true" ondragstart="dragStart(event, ${index}, '${to}')" 
      ondragover="mouseOverHandler(event,${index}, '${to}')"   
        class="item"
        data-item-index="${index}"
        data-item-section="${to}">
                <h3>${item.title}</h3>
                <p>${item.companyName}</p>
              </div>`;
    })
    .join(""));
}

function mouseOverHandler(event, overThisItem) {
  event.preventDefault();
  draggingOverItemIndex = overThisItem;
}
