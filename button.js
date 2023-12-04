const addStaff = document.getElementById("myButtonAddStaff");
const showForm = document.getElementById("myFormAddStaff");
const closeForm = document.getElementById("closeFrom");
addStaff.addEventListener("click", () => {
  showForm.style.display = "block";
});


// const closeForm = document.getElementById("closeFrom");
// closeForm.addEventListener("click", () =>{
//   showForm.style.display = "non";
// });

// Cấp ID tăng dần
let idCounter = 1;
function ID() {
  const newID = idCounter++;
  return newID;
}

//Tính lương Nhân Viên
function CalSalary(baseSalary, productSalary, productQuantity) {
  let Total = baseSalary + productSalary * productQuantity;
  if (productQuantity < 50) {
    Total *= 0.9;
  } else if (productQuantity > 50) {
    let extend = productQuantity - 50;
    let bonus = productSalary * extend * 0.1;
    Total += bonus;
  }
  return Total;
}

// Sắp xếp danh sách nhân viên tăng dần theo tổng lương
employees.sort((a, b) => {
  const totalSalaryA = a.Total;
  const totalSalaryB = b.Total;
  return totalSalaryA - totalSalaryB;
});

employees.forEach((employee) => {
  const totalSalaryAB = employee.calculateTotalSalary();
});

// Lấy giá trị từ Form Input để đưa data sang Table Danh Sách Nhân Viên
function addValueStaff() {
  const valueFullName = document.getElementById("InputFullName").value;
  const valueBaseSalary = document.getElementById("InputBaseSalary").value;
  const valueProductSalary =
    document.getElementById("InputProductSalary").value;
  const valueProductQuantity = document.getElementById(
    "InputProductQuantity"
  ).value;
  if (
    valueFullName === "" ||
    valueBaseSalary === "" ||
    valueProductSalary === "" ||
    valueProductQuantity === ""
  ) {
    alert("Please fill in the above information completely!");
  } else {
    const table = document.getElementById("myTable");
    // -1 nghĩa là chèn một dòng mới vào cuối cùng của bảng đó
    const newStaff = table.insertRow(-1);

    const cellID = newStaff.insertCell(0);
    const cellFullName = newStaff.insertCell(1);
    const cellBaseSalary = newStaff.insertCell(2);
    const cellProductSalary = newStaff.insertCell(3);
    const cellTotalSalary = newStaff.insertCell(4);

    cellID.innerHTML = ID();
    cellFullName.innerHTML = valueFullName;
    cellBaseSalary.innerHTML = valueBaseSalary;
    cellProductSalary.innerHTML = valueProductSalary;
    const totalSalary = CalSalary(
      valueBaseSalary,
      valueProductSalary,
      valueProductQuantity
    );
    cellTotalSalary.innerHTML = totalSalary;

    document.getElementById("InputFullName").value = "";
    document.getElementById("InputBaseSalary").value = "";
    document.getElementById("InputProductSalary").value = "";
    document.getElementById("InputProductQuantity").value = "";
    alert("New employee added successfully!");
  }
}
// Dánh Sách Nhân Viên Vừa Được Thêm
function reViewStaff() {
  const btnReview = document.getElementById("myButtonReview");
  const showListStaff = document.getElementById("myTable");
  const showForm = document.getElementById("myFormAddStaff");

  btnReview.addEventListener("click", () => {
    showListStaff.style.display = "block";
  });
  btnReview.addEventListener("click", () => {
    showForm.style.display = "none";
  });
}
