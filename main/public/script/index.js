function showOptions(courseId) {
  const options = {
    1: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6"],
    2: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6"],
    3: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6"],
  };

  let container = document.getElementById("options-container");
  let messageBox = document.getElementById("message-box");
  //container.innerHTML=`<div style="color: black; font-weight: 400; margin-left:auto border:1px solid black " >Choose </div>`
  // Generate options with click event
  container.innerHTML = options[courseId]
    .map(
      (option) =>
        `<div style="margin-bottom:20px "  > <a href='./lib.html'class="option" onclick="selectOption('${option}  >')"> ${option}</a></div>`
    )
    .join("");

  // Show the options container
  container.style.display = "block";
}

// Function to hide the container and show message
function selectOption(option) {
  let container = document.getElementById("options-container");
  let messageBox = document.getElementById("message-box");

  // Hide options
  container.style.display = "none";

  // Show success message
  messageBox.innerHTML = `✅ You selected: <b>${option}</b>`;
  messageBox.style.display = "block";

  // Hide message after 3 seconds
  setTimeout(() => {
    messageBox.style.display = "none";
  }, 3000);
}

function handleKeyPress(event) {
  const queryInput = document.getElementById("query");
  const output = document.getElementById("output");

  // Check if Enter key is pressed
  if (event.key === "Enter") {
    const query = queryInput.value.trim();

    if (query) {
      output.innerHTML += `<div style="color: #fff;" ><span style="color: #fff;">root:$</span> ${query}</div>`; // Show command typed

      if (query.toLowerCase().includes("download")) {
        output.innerHTML += `<div style="color: #fff; >Downloading item...</div>`;
      } else {
        output.innerHTML += `<div style="color: #fff; >Command not found: ${query}</div>`;
      }

      queryInput.value = ""; // Clear input field
      output.scrollTop = output.scrollHeight; // Scroll to bottom
    }
  }
}

function createCards(data) {
  const container = document.querySelector(".book_container");
  container.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    card.classList.add("book_card");
    // card.setAttribute("onclick", "toggleDropdown(event)");
    card.innerHTML = `
            
    <div class="book_card_content" >
        <div class="book_img" ></div>
        
    </div>
    <div ><h1 style="color:#fff " class='book_title'   >${data[i]}</h1></div>
        <div class="btn_container" >
            <button class="button-31" role="button">
                <span class="text">Download</span>
              </button>
              <button class="button-31" role="button">
                <span class="text">Preview</span>
              </button>
        </div>
    
   
        `;
    container.appendChild(card);
  }
}

let data = ['c++','Numerical method','data stucture','statics','Computer organization'] ;

  createCards(data)


