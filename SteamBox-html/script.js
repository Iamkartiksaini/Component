const char = document.querySelector(`.chart`);
const latest = document.querySelector(`.latest`);
const h5Ele = document.getElementById("mainText");
const pEle = document.getElementById("des");

let activeTab = 1;
let click = "zero";

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
    imageSrc: "./download.png",
    name: "John Doe",
    role: "Role 1",
    status: "success",
    amount: "$100",
  },
  {
    imageSrc: "./download.png",
    name: "Jane Doe",
    role: "Role 2",
    status: "pending",
    amount: "$200",
  },
  {
    imageSrc: "./download.png",
    name: "Kartik Saini",
    role: "Role 3",
    status: "unpaid",
    amount: "$100",
  },
  {
    imageSrc: "./download.png",
    name: "Robert",
    role: "Role 2",
    status: "pending",
    amount: "$200",
  },
];

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

const sidebarHTML = generateSidebarItems();
const itemsHTML = generateItemsData();

document.querySelector(".sidebar").innerHTML = sidebarHTML;
document.querySelector(".list").innerHTML = itemsHTML;

const allEle = document.querySelectorAll(".sideBarItem");

function handleItemClick(itemId) {
  if (click !== "zero") return;

  requestAnimationFrame(working);

  function working() {
    allEle[activeTab - 1]?.classList.remove("active");
    allEle[itemId - 1].classList.add("active");

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

setTimeout(() => {
  char.classList.remove("chartAnimation");
  latest.classList.remove("chartAnimation");
  h5Ele.classList.remove("slideInFromBottom");
  pEle.classList.remove("slideInFromBottom2");
}, 500);
