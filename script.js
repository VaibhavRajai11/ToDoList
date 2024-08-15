const inpbox = document.getElementById("inpbx");
const list = document.getElementById("list-container");

function add() {
    if (inpbox.value === '') {
        window.alert("Enter Something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inpbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inpbox.value = "";
    savedata();
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", list.innerHTML);
}

function show() {
    const storedData = localStorage.getItem("data");
    if (storedData) {
        list.innerHTML = storedData;
        list.querySelectorAll("span").forEach(span => {
            span.addEventListener("click", function() {
                this.parentElement.remove();
                savedata();
            });
        });
    }
}

show();
