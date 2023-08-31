// ============================ [logic section] ============================

const addBtn = document.querySelector(".addBtn");
const todoList = document.querySelector(".todo-list");
const input = document.querySelector("input");

addBtn.addEventListener("click", () => {
  const newList = document.createElement("li");
  const text = input.value.trim();

  if (text !== "") {
    const container = document.createElement("div");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    const svgImg = document.createElement("img");
    svgImg.src = `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" type="button" width="18" height="18" color="red" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
        </svg>`;

    svgImg.addEventListener("click", () => {
      gsap.to(newList, {
        y: 50,
        duration: 1,
        opacity: 0,
        onComplete: () => {
          todoList.removeChild(newList);
        }
    });
    });

    container.appendChild(checkBox);
    container.classList.add("btnContainer");
    container.appendChild(svgImg);

    newList.textContent = text;
    newList.appendChild(container);
    
    gsap.from(newList, {
        duration: 1,
        opacity: 0,
        y: -50,
    });
    
    
    todoList.prepend(newList);
    input.value = "";
  }
  else{
    addBtn.style.animation = "myAnim 1s ease-in 200ms 1 normal none";
    
    setTimeout(() => {
      addBtn.style.animation = "";
    }, 1000);
  }
});


// ============================ [Animation section] ============================
    gsap.from("h1", {
        x: -10000,
        delay: 0,
    });

gsap.from(".todo-container", {
        x: 10000,
        delay: 0.5,
    });
