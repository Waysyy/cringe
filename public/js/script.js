// Добавление статьи////////////////////////////////////////////////////
async function CreateUser(type, name, city, number, lastname, experience, speciality, numberCorp, degree, vacation, salary, worksClinic, worksHospital, countOperations, lethal, successful, department, specialization, numbercorps, numberBeds, busy, cabinetsname, cabinetsnumber, visit, contract, profile, patientsname,
    diagnos, time1, time2, anamnesDoctor, destination, operationsName, docName, operationDate, doctor) {

    const response = await fetch("api/Med", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            type: type,
            name: name,
            city: city,
            number: number,
            lastname: lastname,
            experience: experience,
            speciality: speciality,
            numberCorp: numberCorp,
            degree: degree,
            vacation: vacation,
            salary: salary,
            worksClinic: worksClinic,
            worksHospital: worksHospital,
            countOperations: countOperations,
            lethal: lethal,
            successful: successful,
            department: department,
            specialization: specialization,
            numbercorps: numbercorps,
            numberBeds: numberBeds,
            busy: busy,
            cabinetsname: cabinetsname,
            cabinetsnumber: cabinetsnumber,
            visit: new Date(),
            contract: contract,
            profile: profile,
            patientsname: patientsname,
            diagnos: diagnos,
            time1: time1,
            time2: time2,
            anamnesDoctor: anamnesDoctor,
            destination: destination,
            operationsName: operationsName,
            docName: docName,
            operationDate: operationDate,
            doctor: doctor
        })
    });
    if (response.ok === true) {
        const user = await response.json();
        reset();
        document.querySelector("tbody").append(row(user));
    }
}
// Изменение статьи////////////////////////////////////////////////////////
async function EditUser(userId, type, name, city, number, lastname, experience, speciality, numberCorp, degree, vacation, salary, worksClinic, worksHospital, countOperations, lethal, successful, department, specialization, numbercorps, numberBeds, busy, cabinetsname, cabinetsnumber, visit, contract, profile, patientsname,
    diagnos, time1, time2, anamnesDoctor, destination, operationsName, docName, operationDate, doctor) {
    const response = await fetch("api/Med", {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: userId,
            type: type,
            name: name,
            city: city,
            number: number,
            lastname: lastname,
            experience: experience,
            speciality: speciality,
            numberCorp: numberCorp,
            degree: degree,
            vacation: vacation,
            salary: salary,
            worksClinic: worksClinic,
            worksHospital: worksHospital,
            countOperations: countOperations,
            lethal: lethal,
            successful: successful,
            department: department,
            specialization: specialization,
            numbercorps: numbercorps,
            numberBeds: numberBeds,
            busy: busy,
            cabinetsname: cabinetsname,
            cabinetsnumber: cabinetsnumber,
            visit: new Date(),
            contract: contract,
            profile: profile,
            patientsname: patientsname,
            diagnos: diagnos,
            time1: time1,
            time2: time2,
            anamnesDoctor: anamnesDoctor,
            destination: destination,
            operationsName: operationsName,
            docName: docName,
            operationDate: operationDate,
            doctor: doctor
        })
    });
    if (response.ok === true) {
        const user = await response.json();
        reset();
        document.querySelector("tr[data-rowid='" + user._id + "']").replaceWith(row(user));
    }
}
// Удаление статьи/////////////////////////////////////////////////////
async function DeleteUser(id) {
    const response = await fetch("/api/Med/" + id, {
        method: "DELETE",
        headers: {
            "Accept": "application/json"
        }
    });
    if (response.ok === true) {
        const user = await response.json();
        document.querySelector("tr[data-rowid='" + user._id + "']").remove();
    }
}

// сброс формы
function reset() {
    const form = document.forms["userForm"];
    form.reset();
    form.elements["id"].value = 0;
}






////////////////////для заголовков///////////////////////////////
function The(text1, text2, text3, text4, text5, text6) {
    const tr = document.createElement("tr");
    tr.setAttribute("data-rowid", text1);

    const idTd = document.createElement("th");
    idTd.append(text1);
    tr.append(idTd);

    const nameTd = document.createElement("th");
    nameTd.append(text2);
    tr.append(nameTd);

    const ageTd = document.createElement("th");
    ageTd.append(text3);
    tr.append(ageTd);

    if (text4 != null) {
        const authTd = document.createElement("th");
        authTd.append(text4);
        tr.append(authTd);
    }

    if (text5 != null) {
        const Descr = document.createElement("th");
        Descr.append(text5);
        tr.append(Descr);
    }

    if (text6 != null) {
        const Comm = document.createElement("th");
        Comm.append(text6);
        tr.append(Comm);
    }


    const linksTd = document.createElement("th");


    tr.appendChild(linksTd);

    return tr;
}

/////////загрузка всех пользователей//////////////////////////
async function GetAll() {

    clearTable();
    let headd = document.querySelector("thead");


    headd.append(The("Id", "Название Мед. Учреждения", "Тип", "Город", "Номер"))


    // отправляет запрос и получаем ответ
    const response = await fetch("/api/Med", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    // если запрос прошел нормально
    if (response.ok === true) {


        // получаем данные
        const Meds = await response.json();
        let rows = document.querySelector("tbody");
        Meds.forEach(Meds => {

            rows.append(row(Meds));


        });
    }
}


//////////////////////////////////////////////////////////////////////////////////////

// Очистка таблицы
function clearTable() {
    document.querySelector("tbody").innerHTML = '';
    document.querySelector("thead").innerHTML = '';
}







// создание строки для таблицы
function row(user) {

    const tr = document.createElement("tr");
    tr.setAttribute("data-rowid", user._id);

    const idTd = document.createElement("td");
    idTd.append(user._id);
    tr.append(idTd);

    const nameTd = document.createElement("td");
    nameTd.append(user.name);
    tr.append(nameTd);

    const ageTd = document.createElement("td");
    ageTd.append(user.type);
    tr.append(ageTd);

    const authTd = document.createElement("td");
    authTd.append(user.city);
    tr.append(authTd);

    const numTd = document.createElement("td");
    numTd.append(user.number);
    tr.append(numTd);



    const linksTd = document.createElement("td");

    const editLink = document.createElement("a");
    editLink.setAttribute("data-id", user._id);
    editLink.setAttribute("style", "cursor:pointer;padding:15px;");
    editLink.append("Изменить");
    editLink.addEventListener("click", e => {

        e.preventDefault();
        GoForm(user._id);
    });
    linksTd.append(editLink);

    const removeLink = document.createElement("a");
    removeLink.setAttribute("data-id", user._id);
    removeLink.setAttribute("style", "cursor:pointer;padding:15px;");
    removeLink.append("Удалить");
    removeLink.addEventListener("click", e => {

        e.preventDefault();
        DeleteUser(user._id);
    });

    linksTd.append(removeLink);
    //////////////////////////////Создать/////////////////
    const CreateLink = document.createElement("a");
    CreateLink.setAttribute("data-id", user._id);
    CreateLink.setAttribute("style", "cursor:pointer;padding:15px;");
    CreateLink.append("Создать");
    CreateLink.addEventListener("click", e => {

        e.preventDefault();
        GoForm(0);
    });

    linksTd.append(CreateLink);

    /////////////////////////////////////////////////


    tr.appendChild(linksTd);

    return tr;
}

function GetRequest() {

    document.location.href = '/URL2.html';
}


var sendButton = document.querySelector('#btn');
sendButton.addEventListener("click", GetRequest);

var sendButton = document.querySelector('#states');
sendButton.addEventListener("click", GetAll);


// отправка формы
function GoForm(id) {
    const form = document.forms["userForm"];
    //const id = form.elements["id"].value;
    const type = form.elements["type"].value;
    const name = form.elements["name"].value;
    const city = form.elements["city"].value;
    const number = form.elements["number"].value;
    const lastname = form.elements["lastname"].value;
    const experience = form.elements["experience"].value;
    const speciality = form.elements["speciality"].value;
    const numberCorp = form.elements["numberCorp"].value;
    const degree = form.elements["degree"].value;
    const vacation = form.elements["vacation"].value;
    const salary = form.elements["salary"].value;
    const worksClinic = form.elements["worksClinic"].value;
    const worksHospital = form.elements["worksHospital"].value;
    const countOperations = form.elements["countOperations"].value;
    const lethal = form.elements["lethal"].value;
    const successful = form.elements["successful"].value;
    const department = form.elements["department"].value;
    const specialization = form.elements["specialization"].value;
    const numbercorps = form.elements["numbercorps"].value;
    const numberBeds = form.elements["numberBeds"].value;
    const busy = form.elements["busy"].value;
    const cabinetsname = form.elements["cabinetsname"].value;
    const cabinetsnumber = form.elements["cabinetsnumber"].value;
    const visit = new Date();
    const contract = form.elements["contract"].value;
    const profile = form.elements["profile"].value;
    const patientsname = form.elements["patientsname"].value;
    const diagnos = form.elements["diagnos"].value;
    const time1 = form.elements["time1"].value;
    const time2 = form.elements["time2"].value;
    const anamnesDoctor = form.elements["anamnesDoctor"].value;
    const destination = form.elements["destination"].value;
    const operationsName = form.elements["operationsName"].value;

    const docName = form.elements["docName"].value;
    const operationDate = form.elements["operationDate"].value;
    const doctor = form.elements["doctor"].value;

    if (id == 0)
        CreateUser(type, name, city, number, lastname, experience, speciality, numberCorp, degree, vacation, salary, worksClinic, worksHospital, countOperations, lethal, successful, department, specialization, numbercorps, numberBeds, busy, cabinetsname, cabinetsnumber, visit, contract, profile, patientsname,
            diagnos, time1, time2, anamnesDoctor, destination, operationsName, docName, operationDate, doctor);
    else
        EditUser(id, type, name, city, number, lastname, experience, speciality, numberCorp, degree, vacation, salary, worksClinic, worksHospital, countOperations, lethal, successful, department, specialization, numbercorps, numberBeds, busy, cabinetsname, cabinetsnumber, visit, contract, profile, patientsname,
            diagnos, time1, time2, anamnesDoctor, destination, operationsName, docName, operationDate, doctor);

}