document.getElementById('sub').addEventListener('click', () =>{
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const age = document.getElementById("age").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const zipcode = document.getElementById("zipcode").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const dpart = document.getElementById("dpart").value;
    const salary = document.getElementById("salary").value;
    const years_service = document.getElementById("years_service").value;

    const newEmp = new Details(fname,lname,age,address,city,zipcode,state,country,jobTitle,dpart,salary,years_service);
    newEmp.createEmployees()
    newEmp.createDetails()

    let empArray = [];

    console.log(newEmp);

    addEmployee(newEmp);

    empArray.push(newEmp);

})

class Employee{
    constructor(fname,lname,age,address,city,zipcode,state,country){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.address = address;
        this.city = city;
        this.zipcode = zipcode;
        this.state = state;
        this.country = country;
    }

    createEmployees(){
        console.log(`First name: ${this.fname}  Last Name: ${this.lname}  Age: ${this.age}`)
        console.log(`Address: ${this.address}  City: ${this.city}  ZipCode: ${this.zipcode}`)
        console.log(`State: ${this.state}  Country: ${this.country}`)
    }
}

class Details extends Employee{
    constructor(fname,lname,age,address,city,zipcode,state,country,jobTitle,dpart,salary,years_service){
        super(fname,lname,age,address,city,zipcode,state,country)
        this.jobTitle = jobTitle;
        this.dpart = dpart;
        this.salary = salary;
        this.years_service = years_service;
    }

    createDetails(){
        console.log(`Details: ${this.jobTitle} in the ${this.dpart}  Salary: ${this.salary}  Years of Service: ${this.years_service}`)
    }

}

const employees = document.getElementById("employees");


function addEmployee(emp) {
  let div = document.createElement("div");

  div.innerHTML = 
`<h1>${emp.fname} ${emp.lname} </h1>
<br>
 <h3>Address</h3>

 <p>${emp.address}</p>
 <br>
 <p>${emp.city}, ${emp.state} ${emp.zipcode}</p>
 <br>
 <p>${emp.country}</p>
 
 <h3>Details</h3>
 <br>
 <p>Job Title:${emp.jobTitle}</p>
 <br>
 <p>Department:${emp.dpart}</p>
 <br>
 <p>Salary: $${emp.salary}</p>
 <br>
 <p>Years of Service:${emp.years_service}</p>`;

  employees.append(div);
}