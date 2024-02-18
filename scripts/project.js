//Declare variables
const url = "https://raw.githubusercontent.com/signguy76/jsonEmployees/main/employees.json";
const employeeList = document.querySelector("ul");
let data = null;

async function getEmployees(URL) {
    const response = await fetch(URL);
    if (response.ok) {
        data = await response.json();
        //console.log(data);
        displayEmployees(data);
    }
}

function displayEmployees(workers) {
    reset();
    workers.forEach(employee => {
        const listItem = document.createElement("li");
        listItem.textContent = `${employee.firstName} ${employee.lastName}`;
        employeeList.appendChild(listItem);
    });
}

function reset() {
    employeeList.innerHTML = "";
}

function filterData() {
    let c = data.filter(employee => employee.city.includes("Camas"));
    displayEmployees(c);

}



document.querySelector("button").addEventListener("click", filterData);

getEmployees(url);