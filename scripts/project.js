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
        listItem.textContent = `Id# ${employee.id} | ${employee.firstName} ${employee.lastName} -- Title: ${employee.jobPosition} ---Location, ${employee.city}`;
        employeeList.appendChild(listItem);
    });
}

function reset() {
    employeeList.innerHTML = "";
}

// function filterData() {
//     let c = data.filter(employee => employee.city.includes("Camas"));
//     displayEmployees(c);

// }

// Function: filterEmployee()
const filterEmployee = (employee) => {
    //reset();
    const filter = document.getElementById("filtered").value;
    switch (filter) {
        case "camas":
            displayEmployees(data.filter((employee) => employee.city.includes("Camas")));
            break;
        case "san jose":
            displayEmployees(data.filter((employee) => employee.city.includes("San Jose")));
            break;
        case "anderson":
            displayEmployees(data.filter((employee) => employee.city.includes("Anderson")));
            break;
        case "knoxville":
            displayEmployees(data.filter((employee) => employee.city.includes("Knoxville")));
            break;
        case "vancouver":
            displayEmployees(data.filter((employee) => employee.city.includes("Vancouver")));
            break;
        case "all":
        default:
            displayEmployees(data);
            break;
    }
};




// Event Listener: filterEmployees Element change
document.getElementById("filtered").addEventListener("change", () => {
    filterEmployee(employeeList);
});
getEmployees(url);