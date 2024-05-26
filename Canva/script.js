const mapingCards = 101;
const ele = document.querySelector(".gallery");

ele.innerHTML = Array.from({ length: 20 })
  .map((val, ind) => {
    return `
  <div class="card">
  <div class="profile-card">
    <img
      src="../Tweet/thread-ux.png"
      alt="tweet"
      loading="lazy"
      height="40"
      width="40"
    />
    <div class="right-section">
      <div class="text">
        <p>my name</p>
        <span>@username</span>
        <li>13 min</li>
      </div>
      <p class="des">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        ea!
      </p>
    </div>
  </div>
  <div class="icons">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.85 19H6C5.44772 19 5 18.5523 5 18V12C5 11.4477 5.44772 11 6 11H8.85C8.93284 11 9 11.0672 9 11.15V18.85C9 18.9328 8.93284 19 8.85 19Z"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M9 11L10.8321 8.25192C10.9416 8.08766 11 7.89465 11 7.69722V5C11 4.44772 11.4477 4 12 4H13C14.1046 4 15 4.89543 15 6V11"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M13 11H17.7655C18.9575 11 19.8849 12.0361 19.7532 13.2209L19.1977 18.2209C19.0851 19.2337 18.229 20 17.2099 20H13.4142C13.149 20 12.8946 19.8946 12.7071 19.7071L12.2929 19.2929C12.1054 19.1054 11.851 19 11.5858 19H9"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </div>
  <img
    class="main-image"
    src="../Tweet/thread-ux.png"
    alt="tweet"
    loading="lazy"
    height="300"
    width="400"
  />
</div>
  `;
  })
  .join("");

// document.querySelector("p").addEventListener("mouseup", function () {
//   var selectedText = getSelectedText();
//   if (selectedText !== "") {
//     console.log("Selected text: ", selectedText);
//   }
// });

// function getSelectedText() {
//   var selectedText = "";
//   if (window.getSelection) {
//     selectedText = window.getSelection().toString();
//   } else if (document.selection && document.selection.type != "Control") {
//     selectedText = document.selection.createRange().text;
//   }
//   return selectedText;
// }
