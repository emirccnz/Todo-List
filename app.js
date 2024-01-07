document.addEventListener('DOMContentLoaded', function () {
    pageLoaded();
})
let todoArray = [];
function warningEmpty() {

    const warning3 = document.getElementById("warning3");
    const warning2 = document.getElementById("warning2");
    const warningDiv = document.getElementById("warningSomething");
    const warning1 = document.getElementById("warning1");
    const warning4 = document.getElementById("warning4");
    const accessInput = document.getElementById("inputId");
    if (!accessInput || accessInput.value.trim() == '') {
        warning2.style.visibility = "hidden"
        warning3.style.visibility = "hidden"
        warning4.style.visibility = "hidden"
        warningDiv.style.backgroundColor = 'transparent';
        warning1.style.visibility = "visible";
        warningDiv.style.backgroundColor = "rgb(245, 214, 103)";
        warningDiv.style.borderRadius = "5px";

    } else {
        addTodos(accessInput, warningDiv, warning2, warning1, warning3, warning4);
        removeLi(warningDiv, warning1, warning2, warning3, warning4);
        removeAll(warning1, warning2, warning3, warning4, warningDiv);
    }
}

function addTodos(accessInput, warningDiv, warning2, warning1, warning3, warning4) {
    const addLi = document.createElement("li");
    const x = document.createElement("i");
    x.classList.add("fas", "fa-xmark");
    const addP = document.createElement("p");
    const arrivingUl = document.getElementById("ulElementId");
    arrivingUl.appendChild(addLi);
    addLi.classList.add("liElements");
    addLi.appendChild(addP);
    addLi.appendChild(x);
    x.style.position = "absolute";
    addP.textContent = accessInput.value;
    todoArray.push(accessInput.value);
    changeLocalStorage();

    warning1.style.visibility = "hidden"
    warning3.style.visibility = "hidden"
    warning4.style.visibility = "hidden"
    warningDiv.style.backgroundColor = 'transparent';
    warning2.style.visibility = "visible";
    warningDiv.style.backgroundColor = "#72E538";
    warningDiv.style.borderRadius = "5px";

}

function removeLi(warningDiv, warning1, warning2, warning3, warning4) {
    const Listx = document.getElementsByClassName("fas", "fa-xmark");
    for (let i = 0; i < Listx.length; i++) {
        const findliElement = Listx[i].parentElement;
        Listx[i].addEventListener("click", function () {
            findliElement.remove();
            const liElemntsTextCon = findliElement.textContent;
            todoArray.forEach(function (values) {
                if (values == liElemntsTextCon) {
                    const deleteItem = todoArray.indexOf(values);
                    todoArray.splice(deleteItem, 1);
                }

            })
            changeLocalStorage();
            warning1.style.visibility = "hidden"
            warning2.style.visibility = "hidden"
            warning4.style.visibility = "hidden"
            warningDiv.style.backgroundColor = 'transparent';
            warning3.style.visibility = "visible";
            warningDiv.style.backgroundColor = "#FA5656";
            warningDiv.style.borderRadius = "5px";

        })
    }
}

function removeAll(warning1, warning2, warning3, warning4, warningDiv) {
    const listLiElements = document.getElementsByClassName("liElements");
    const convertArray = Array.from(listLiElements);
    const clearAllButton = document.getElementById("clearAllButton");
    clearAllButton.addEventListener("click", function () {
        convertArray.forEach(element => {
            element.remove();
            todoArray = [];
            changeLocalStorage();
        });
        warning1.style.visibility = "hidden"
        warning2.style.visibility = "hidden"
        warning3.style.visibility = "hidden"
        warningDiv.style.backgroundColor = 'transparent';
        warning4.style.visibility = "visible";
        warningDiv.style.backgroundColor = "#F723ED";
        warningDiv.style.borderRadius = "5px";
    })

}
function changeLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todoArray));
}

function pageLoaded() {
    localStorageItems = JSON.parse(localStorage.getItem("todos"));
    todoArray = localStorageItems ? JSON.parse(localStorageItems) : [];
    todoArray.forEach(function (elements) {
        const addLiAgain = document.createElement("li");
        const xAgain = document.createElement("i");
        xAgain.classList.add("fas", "fa-xmark");
        const addPAgain = document.createElement("p");
        const arrivingUlAgain = document.getElementById("ulElementId");
        arrivingUlAgain.appendChild(addLiAgain);
        addLiAgain.classList.add("liElements");
        addLiAgain.appendChild(addPAgain);
        addLiAgain.appendChild(xAgain);
        xAgain.style.position = "absolute";
        addPAgain.textContent = elements;
    })
}
