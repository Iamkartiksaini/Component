const style = {
  streamlinedBox: "streamlinedBox",
  sidebar: "sidebar",
  active: "active",
  overview: "overview",
  chart: "chart",
  chartAnimation: "chartAnimation",
  bar: "bar",
  values: "values",
  latest: "latest",
  header: "header",
  item_list: "item_list",
  head: "head",
  list: "list",
  item: "item",
  left: "left",
  name: "name",
  right: "right",
  status: "status",
  slideInFromBottom: "slideInFromBottom",
  slideInFromBottom2: "slideInFromBottom2",
};

const h5Ele = document.getElementById("mainText");
const pEle = document.getElementById("des");

let activeTab = 1;
let click = "zero";

function handleItemClick(itemId) {
  if (click !== "zero") return;

  requestAnimationFrame(working);
  function working() {
    const allEle = document.querySelectorAll(".sideBarItem");
    allEle[activeTab - 1].classList.remove("active");
    allEle[itemId - 1].classList.add("active");
    const char = document.querySelector(`.chart`);
    const latest = document.querySelector(`.latest`);
    char.classList.add("chartAnimation");
    latest.classList.add("chartAnimation");
    h5Ele.classList.add("slideInFromBottom");
    pEle.classList.add("slideInFromBottom2");
    click = "one";
    activeTab = itemId;

    setTimeout(() => {
      char.classList.remove("chartAnimation");
      latest.classList.remove("chartAnimation");
      h5Ele.classList.remove("slideInFromBottom");
      pEle.classList.remove("slideInFromBottom2");
      click = "zero";
    }, 1000);
  }
}

// Sample data (replace with your actual data)
const sidebarItems = [
  { name: "People", id: 1 },
  { name: "Payroll", id: 2 },
  { name: "Benefit", id: 3 },
  { name: "Payment", id: 4 },
  { name: "Time Off", id: 5 },
  { name: "App", id: 6 },
  { name: "Devices", id: 7 },
];

const itemsData = [
  {
    imageSrc: "./thread-ux.png",
    name: "John Doe",
    role: "Role 1",
    status: "success",
    amount: "$100",
  },
  {
    imageSrc: "./thread-ux.png",
    name: "Jane Doe",
    role: "Role 2",
    status: "pending",
    amount: "$200",
  },
  {
    imageSrc: "./thread-ux.png",
    name: "Kartik Saini",
    role: "Role 3",
    status: "unpaid",
    amount: "$100",
  },
  {
    imageSrc: "./thread-ux.png",
    name: "Robert",
    role: "Role 2",
    status: "pending",
    amount: "$200",
  },
];

// Function to generate HTML elements based on data
function generateSidebarItems() {
  return sidebarItems
    .map(
      (item) =>
        `<p key="${item.id}" onClick="handleItemClick(${
          item.id
        })" class="sideBarItem ${activeTab === item.id ? "active" : ""}">${
          item.name
        }</p>`
    )
    .join("");
}

function generateItemsData() {
  return itemsData
    .map(
      (item, index) =>
        `<li class="item" key="${index}">
            <div class="left">
                <img height="20" width="20" src="${item.imageSrc}" alt="img">
                <div class="name">
                    <h6>${item.name}</h6>
                    <p>${item.role}</p>
                </div>
            </div>
            <div class="right">
                <p class="status ${item.status}">
                    ${
                      item.status.charAt(0).toUpperCase() + item.status.slice(1)
                    }
                </p>
                <p class="amount">${item.amount}</p>
            </div>
        </li>`
    )
    .join("");
}

// Use these functions to generate HTML dynamically
const sidebarHTML = generateSidebarItems();
const itemsHTML = generateItemsData();

// Then, you can insert the generated HTML into your DOM elements
// For example:
document.querySelector(".sidebar").innerHTML = sidebarHTML;
document.querySelector(".list").innerHTML = itemsHTML;
