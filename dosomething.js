var selectedrow = null;

function submitForm() {
    var formdata = catchData();
    if (selectedrow == null) {
        createData(formdata);
    } else {
        updateRecord(formdata);
    }
    resetForm();
}

function catchData() {
    formdata = {};
    formdata["name"] = document.getElementById("name").value;
    formdata["message"] = document.getElementById("message").value;
    return formdata;
}

function createData(data) {
    var table = document.getElementById("show").getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);
    var cellOne = newrow.insertCell(0);
    cellOne.innerHTML = data.name;
    var cellTwo = newrow.insertCell(1);
    cellTwo.innerHTML = data.message;
    var cellThree = newrow.insertCell(2);
    cellThree.innerHTML = "<button type='submit' class='btn btn-primary' onClick='onEdit(this)'>Edit</button>"
    var cellFour = newrow.insertCell(3);
    cellFour.innerHTML = "<button type='submit' class='btn btn-danger' onClick='onDelete(this)'>Delete</button>"
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
    selectedrow = null;
}


function onEdit(td) {
    selectedrow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedrow.cells[0].innerHTML;
    document.getElementById("message").value = selectedrow.cells[1].innerHTML;
}

function updateRecord(formdata) {
    selectedrow.cells[0].innerHTML = formdata.name;
    selectedrow.cells[1].innerHTML = formdata.message;
}

function onDelete(td) {
    if (confirm("Are you sure you want to delete?")) {
        row = td.parentElement.parentElement;
        document.getElementById("show").deleteRow(row.rowIndex);
        resetForm();
    }
}
