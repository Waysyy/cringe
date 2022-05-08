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
    if (text2 != null) {
        const nameTd = document.createElement("th");
        nameTd.append(text2);
        tr.append(nameTd);
    }

    if (text4 != null) {
        const ageTd = document.createElement("th");
        ageTd.append(text3);
        tr.append(ageTd);
    }
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

/////////запрос 1//////////////////////////
async function Req1(number) {
    let vrachName = [];
    clearTable();
    let headd = document.querySelector("thead");


    headd.append(The("Специальность", "количество"))


    // отправляет запрос и получаем ответ
    const response = await fetch("/api/Med", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    // если запрос прошел нормально
    if (response.ok === true) {

        let j = 0;

        // получаем данные
        const Meds = await response.json();
        let rows = document.querySelector("tbody");
        Meds.forEach(Meds => {
            if (number == 1) {
                if (String(Meds.name) == "main hospital NY") ////для конкретного учр
                    for (let i = 0; i < 5; ++i) {
                    vrachName[j] = Meds.personal[i].speciality;
                    ++j;
                }
            }
            if (number == 2) {
                if (String(Meds.type) == "hospital") /// для госпиталя
                    for (let i = 0; i < 5; ++i) {
                    vrachName[j] = Meds.personal[i].speciality;
                    ++j;
                }
            }
            if (number == 3) {
                if (String(Meds.type) == "clinic") ////// для клиники
                    for (let i = 0; i < 5; ++i) {
                    vrachName[j] = Meds.personal[i].speciality;
                    ++j;
                }
            }
            if (number == 4) {
                if (String(Meds.city) == "NewYork") ///// для всего города
                    for (let i = 0; i < 5; ++i) {
                    vrachName[j] = Meds.personal[i].speciality;
                    ++j;
                }
            }

        });

        var result = {};
        for (var i = 0; i < vrachName.length; ++i) {
            var a = vrachName[i];
            if (result[a] != undefined)
                ++result[a];
            else
                result[a] = 1;
        }
        for (var key in result)
            rows.append(rowreq1(key, result[key]));

    }

}


//////////////////////////////////////////////////////////////////////////////////////

// Очистка таблицы
function clearTable() {
    document.querySelector("tbody").innerHTML = '';
    document.querySelector("thead").innerHTML = '';
}



function rowreq1(key, res) {

    const tr = document.createElement("tr");
    //tr.setAttribute("data-rowid", key);

    const idTd = document.createElement("td");
    idTd.append(key);
    tr.append(idTd);

    const nameTd = document.createElement("td");
    nameTd.append(res);
    tr.append(nameTd);

    const linksTd = document.createElement("th");


    tr.appendChild(linksTd);


    return tr;
}



/////////запрос 2//////////////////////////
async function Req2(number) {
    let vrachName = [];
    clearTable();
    let headd = document.querySelector("thead");


    headd.append(The("Специальность", "количество"))


    // отправляет запрос и получаем ответ
    const response = await fetch("/api/Med", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    // если запрос прошел нормально
    if (response.ok === true) {

        let j = 0;

        // получаем данные
        const Meds = await response.json();
        let rows = document.querySelector("tbody");
        Meds.forEach(Meds => {
            if (number == 1) {
                ////для конкретного учр
                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.name) == "main hospital NY" && String(Meds.personal[i].speciality) == "cleaner") {
                        vrachName[j] = Meds.personal[i].speciality;
                        ++j;
                    }
                }
            }
            if (number == 2) {
                /// для госпиталя
                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.type) == "hospital" && String(Meds.personal[i].speciality) == "cleaner") {
                        vrachName[j] = Meds.personal[i].speciality;
                        ++j;
                    }
                }
            }
            if (number == 3) {

                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.type) == "clinic" && String(Meds.personal[i].speciality) == "cleaner") ////// для клиники
                    {
                        vrachName[j] = Meds.personal[i].speciality;
                        ++j;
                    }
                }
            }
            if (number == 4) {

                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.city) == "NewYork" && String(Meds.personal[i].speciality) == "cleaner") ///// для всего города
                    {
                        vrachName[j] = Meds.personal[i].speciality;
                        ++j;
                    }
                }
            }

        });

        var result = {};
        for (var i = 0; i < vrachName.length; ++i) {
            var a = vrachName[i];
            if (result[a] != undefined)
                ++result[a];
            else
                result[a] = 1;
        }
        for (var key in result)
            rows.append(rowreq1(key, result[key]));

    }

}
/////////////////////////////////////////////////////////////////////////////////////////////

/////////запрос 3//////////////////////////
async function Req3(number) {
    let vrachName = [];
    clearTable();
    let headd = document.querySelector("thead");


    headd.append(The("Специальность", "количество"))


    // отправляет запрос и получаем ответ
    const response = await fetch("/api/Med", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    // если запрос прошел нормально
    if (response.ok === true) {

        let j = 0;

        // получаем данные
        const Meds = await response.json();
        let rows = document.querySelector("tbody");
        Meds.forEach(Meds => {
            if (number == 1) {
                ////для конкретного учр
                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.name) == "main hospital NY" && Meds.personal[i].experience > 5 && String(Meds.personal[i].speciality) == "therapist") {
                        vrachName[j] = Meds.personal[i].speciality;
                        ++j;
                    }
                }
            }
            if (number == 2) {
                /// для госпиталя
                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.type) == "hospital" && Meds.personal[i].experience > 5 && String(Meds.personal[i].speciality) == "therapist") {
                        vrachName[j] = Meds.personal[i].speciality;
                        ++j;
                    }
                }
            }
            if (number == 3) {

                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.type) == "clinic" && Meds.personal[i].experience > 5 && String(Meds.personal[i].speciality) == "therapist") ////// для клиники
                    {
                        vrachName[j] = Meds.personal[i].speciality;
                        ++j;
                    }
                }
            }
            if (number == 4) {

                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.city) == "NewYork" && Meds.personal[i].experience > 5 && String(Meds.personal[i].speciality) == "therapist") ///// для всего города
                    {
                        vrachName[j] = Meds.personal[i].speciality;
                        ++j;
                    }
                }
            }

        });

        var result = {};
        for (var i = 0; i < vrachName.length; ++i) {
            var a = vrachName[i];
            if (result[a] != undefined)
                ++result[a];
            else
                result[a] = 1;
        }
        for (var key in result)
            rows.append(rowreq1(key, result[key]));

    }

}
/////////////////////////////////////////////////////////////////////////////////////////////

/////////запрос 4//////////////////////////
async function Req4(number) {
    let vrachName = [];
    clearTable();
    let headd = document.querySelector("thead");


    headd.append(The("Специальность", "количество"))


    // отправляет запрос и получаем ответ
    const response = await fetch("/api/Med", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    // если запрос прошел нормально
    if (response.ok === true) {

        let j = 0;

        // получаем данные
        const Meds = await response.json();
        let rows = document.querySelector("tbody");
        Meds.forEach(Meds => {
            if (number == 1) {
                ////для конкретного учр
                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.name) == "main hospital NY" && String(Meds.personal[i].speciality) == "dentist" && String(Meds.personal[i].degree) == "doctor" ||
                        String(Meds.name) == "main hospital NY" && String(Meds.personal[i].speciality) == "dentist" && String(Meds.personal[i].degree) == "candidate") {
                        vrachName[j] = Meds.personal[i].speciality;
                        ++j;
                    }
                }
            }
            if (number == 2) {
                /// для госпиталя
                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.type) == "hospital" && String(Meds.personal[i].speciality) == "dentist" && String(Meds.personal[i].degree) == "doctor" ||
                        String(Meds.type) == "hospital" && String(Meds.personal[i].speciality) == "dentist" && String(Meds.personal[i].degree) == "candidate") {
                        vrachName[j] = Meds.personal[i].speciality;
                        ++j;
                    }
                }
            }
            if (number == 3) {

                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.type) == "clinic" && String(Meds.personal[i].speciality) == "dentist" && String(Meds.personal[i].degree) == "doctor" ||
                        String(Meds.type) == "clinic" && String(Meds.personal[i].speciality) == "dentist" && String(Meds.personal[i].degree) == "candidate") ////// для клиники
                    {
                        vrachName[j] = Meds.personal[i].speciality;
                        ++j;
                    }
                }
            }
            if (number == 4) {

                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.city) == "NewYork" && String(Meds.personal[i].speciality) == "dentist" && String(Meds.personal[i].degree) == "doctor" ||
                        String(Meds.city) == "NewYork" && String(Meds.personal[i].speciality) == "dentist" && String(Meds.personal[i].degree) == "candidate") ///// для всего города
                    {
                        vrachName[j] = Meds.personal[i].speciality;
                        ++j;
                    }
                }
            }

        });

        var result = {};
        for (var i = 0; i < vrachName.length; ++i) {
            var a = vrachName[i];
            if (result[a] != undefined)
                ++result[a];
            else
                result[a] = 1;
        }
        for (var key in result)
            rows.append(rowreq1(key, result[key]));

    }

}
/////////////////////////////////////////////////////////////////////////////////////////////

/////////запрос 5//////////////////////////
async function Req5(number) {
    let vrachName = [];
    clearTable();
    let headd = document.querySelector("thead");

    if (number == 1) {
        headd.append(The("Имя пациента", "Название организации"))
    }
    if (number == 2) {
        headd.append(The("Имя пациента", "Имя врача"))
    }
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
            if (number == 1) {

                ////для конкретного учр
                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.name) == "main hospital NY" && Meds.patients[i].doctor == null) {
                        vrachName.push({
                            name: Meds.patients[i].name,
                            last: Meds.name
                        })
                    }
                }
            }
            if (number == 2) {

                /// у конкр вр
                for (let i = 0; i < 5; ++i) {

                    if (new Date(Meds.patients[i].anamnesis[0].time[0]) > new Date("2000-07-14T16:00:00Z") && new Date(Meds.patients[i].anamnesis[0].time[1]) < new Date("2025-07-14T16:00:00Z")) {

                        vrachName.push({
                            name: Meds.patients[i].name,
                            last: Meds.personal[i].lastname
                        })
                    }
                }
            }

        });
        vrachName.forEach((vrachName) => {
            rows.append(rowreq5(vrachName));
        });
    }

}
/////////////////////////////////////////////////////////////////////////////////////////////

function rowreq5(param) {

    const tr = document.createElement("tr");
    tr.setAttribute("data-rowid", param.name);

    const idTd = document.createElement("td");
    idTd.append(param.name);
    tr.append(idTd);

    const nameTd = document.createElement("td");
    nameTd.append(param.last);
    tr.append(nameTd);



    const linksTd = document.createElement("th");


    tr.appendChild(linksTd);


    return tr;
}


/////////запрос 6//////////////////////////
async function Req6() {
    let vrachName = [];
    clearTable();
    let headd = document.querySelector("thead");


    headd.append(The("Имя пациента", "Лечащий врач", "Название организации", "Специальность"))


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


            ////для конкретного учр
            for (let i = 0; i < 5; ++i) {
                for (let j = 0; j < 5; ++j) {
                    if (String(Meds.name) == "main hospital NY" && String(Meds.personal[i].lastname) == String(Meds.patients[j].doctor) && Meds.personal[i].speciality == "dentist") {
                        vrachName.push({
                            name: Meds.patients[i].name,
                            doctor: Meds.personal[i].lastname,
                            org: Meds.name,
                            spec: Meds.personal[i].speciality
                        })
                    }
                }
            }
        });
        //console.log(vrachName);
        vrachName.forEach((vrachName) => {
            rows.append(rowreq6(vrachName));
        });
    }

}
/////////////////////////////////////////////////////////////////////////////////////////////

function rowreq6(user) {

    const tr = document.createElement("tr");
    tr.setAttribute("data-rowid", user.name);

    const idTd = document.createElement("td");
    idTd.append(user.name);
    tr.append(idTd);

    const nameTd = document.createElement("td");
    nameTd.append(user.doctor);
    tr.append(nameTd);

    const ageTd = document.createElement("td");
    ageTd.append(user.org);
    tr.append(ageTd);

    const spTd = document.createElement("td");
    spTd.append(user.spec);
    tr.append(spTd);

    const linksTd = document.createElement("th");


    tr.appendChild(linksTd);


    return tr;
}

/////////запрос 7//////////////////////////
async function Req7(number) {
    let vrachName = [];
    let busy = [];
    clearTable();
    let headd = document.querySelector("thead");

    if (number == 1 || number == 3 || number == 5) {
        headd.append(The("Количество"))
    }
    if (number == 2 || number == 4) {
        headd.append(The("Количество", "Отделение"))
    }


    // отправляет запрос и получаем ответ
    const response = await fetch("/api/Med", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    // если запрос прошел нормально
    if (response.ok === true) {

        let k = 0;

        // получаем данные
        const Meds = await response.json();
        let rows = document.querySelector("tbody");
        Meds.forEach(Meds => {
            if (number == 1) {
                ////для конкретного учр
                for (let j = 0; j < 5; ++j) {
                    for (let i = 0; i < 5; ++i) {
                        if (String(Meds.name) == "main hospital NY") {
                            vrachName[k] = Meds.corps[j].wards[i];
                            ++k;
                        }
                    }
                    //console.log(vrachName);
                }
            }
            if (number == 2) {
                ////по отделениям для конкретного учр
                for (let j = 0; j < 5; ++j) {
                    for (let i = 0; i < 5; ++i) {
                        if (String(Meds.name) == "main hospital NY") {
                            vrachName.push({
                                col: Meds.corps[j].wards[i].numberBeds,
                                doctor: Meds.corps[j].department
                            })
                        }
                    }
                    //console.log(vrachName);
                }
            }
            if (number == 3) {
                ////общ для конкретного учр
                for (let j = 0; j < 5; ++j) {
                    for (let i = 0; i < 5; ++i) {
                        if (String(Meds.name) == "main hospital NY") {

                            vrachName[k] = Meds.corps[j].wards[i].numberBeds;
                            ++k;

                        }
                        //console.log(vrachName);
                    }
                }
            }
            if (number == 4) {
                ////по отделениям для конкретного учр
                for (let j = 0; j < 5; ++j) {
                    for (let i = 0; i < 5; ++i) {
                        if (String(Meds.name) == "main hospital NY") {
                            vrachName.push({
                                col: Meds.corps[j].wards[i].numberBeds - Meds.corps[j].wards[i].busy,
                                doctor: Meds.corps[j].department
                            })
                        }
                    }
                    //console.log(vrachName);
                }
            }
            if (number == 5) {
                ////по отделениям для конкретного учр
                for (let j = 0; j < 5; ++j) {
                    for (let i = 0; i < 5; ++i) {
                        if (String(Meds.name) == "main hospital NY" && Meds.corps[j].wards[i].busy == 0) {
                            vrachName.push({
                                col: 1,
                                doctor: Meds.corps[j].department
                            })
                        }
                    }
                    //console.log(vrachName);
                }

            }

        });

        if (number == 1) {
            rows.append(rowreq7(1, vrachName.length))
        }
        if (number == 2) {
            //rows.append(rowreq7(2, vrachName))
            let res = Object.fromEntries(vrachName.map(item => [item.doctor, 0]));
            vrachName.forEach(item => {
                res[item.doctor] += item.col
            })
            for (var key in res)
                rows.append(rowreq1(res[key], key));

        }
        if (number == 3) {
            let result = vrachName.reduce(function(sum, elem) {
                return sum + elem;
            }, 0);
            rows.append(rowreq7(1, result))
        }
        if (number == 4) {
            //rows.append(rowreq7(2, vrachName))
            let res = Object.fromEntries(vrachName.map(item => [item.doctor, 0]));
            vrachName.forEach(item => {
                res[item.doctor] += item.col
            })
            for (var key in res) {
                rows.append(rowreq1(res[key], key));
            }
        }
        if (number == 5) {
            //rows.append(rowreq7(2, vrachName))
            let res = Object.fromEntries(vrachName.map(item => [item.doctor, 0]));
            vrachName.forEach(item => {
                res[item.doctor] += item.col
            })
            for (var key in res) {
                rows.append(rowreq1(res[key], key));
            }
        }

    }

}


/////////////////////////////////////////////////////////////////////////////////////////////


function rowreq7(num, user) {

    const tr = document.createElement("tr");
    // tr.setAttribute("data-rowid", user);
    if (num == 1) {
        const idTd = document.createElement("td");
        idTd.append(user);
        tr.append(idTd);
    }
    if (num == 2) {
        const idTd = document.createElement("td");
        idTd.append(user.col);
        tr.append(idTd);

        const colTd = document.createElement("td");
        colTd.append(user.doctor);
        tr.append(colTd);
    }
    const linksTd = document.createElement("th");

    tr.appendChild(linksTd);

    return tr;
}

/////////запрос 8//////////////////////////
async function Req8(number) {
    let vrachName2 = [];
    clearTable();
    let headd = document.querySelector("thead");

    if (number == 1) {
        headd.append(The("количество"))
    }
    if (number == 2) {
        headd.append(The("количество посещений", "Номер кабинета"))
    }
    // отправляет запрос и получаем ответ
    const response = await fetch("/api/Med", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    // если запрос прошел нормально
    if (response.ok === true) {

        let j = 0;

        // получаем данные
        const Meds = await response.json();
        let rows = document.querySelector("tbody");
        Meds.forEach(Meds => {
            if (number == 1) {
                if (String(Meds.name) == "main clinic NY") ////для конкретного учр
                    for (let i = 0; i < 5; ++i) {
                    for (let k = 0; k < 5; ++k) {
                        vrachName2[j] = Meds.corps[i].cabinets[k].number;
                        ++j;
                    }
                }
            }
            if (number == 2) {
                ////по отделениям для конкретного учр
                for (let k = 0; k < 5; ++k) {
                    for (let i = 0; i < 5; ++i) {
                        for (let l = 0; l < Meds.corps[k].cabinets[i].visit.length; ++l) {
                            if (String(Meds.name) == "main clinic NY" && new Date(Meds.corps[k].cabinets[i].visit[l]) > new Date("2000-07-14T16:00:00Z") && new Date(Meds.corps[k].cabinets[i].visit[l]) < new Date("2025-07-14T16:00:00Z")) {
                                vrachName2.push({
                                    col: Meds.corps[k].cabinets[i].visit.length / Meds.corps[k].cabinets[i].visit.length,
                                    cabinet: Meds.corps[k].cabinets[i].number
                                })
                            }
                        }
                    }
                }
            }
        });


        if (number == 1) {
            rows.append(rowreq7(1, vrachName2.length))
        }

        if (number == 2) {
            let res = Object.fromEntries(vrachName2.map(item => [item.cabinet, 0]));
            vrachName2.forEach(item => {
                res[item.cabinet] += item.col
            })
            for (var key in res) {
                rows.append(rowreq1(res[key], key));
                console.log(res[key], key);
            }

        }
    }

}

// создание строки для таблицы
function rowreq8(user) {

    const tr = document.createElement("tr");
    tr.setAttribute("data-rowid", user.col);
    const idTd = document.createElement("td");
    idTd.append(user.col);
    tr.append(idTd);

    const nameTd = document.createElement("td");
    nameTd.append(user.cabinet);
    tr.append(nameTd);

    const linksTd = document.createElement("th");

    tr.appendChild(linksTd);

    return tr;
}

/////////запрос 9//////////////////////////
async function Req9(number) {
    let vrachName2 = [];
    clearTable();
    let headd = document.querySelector("thead");


    headd.append(The("Количество текущих пациентов", "Врач"))

    // отправляет запрос и получаем ответ
    const response = await fetch("/api/Med", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    // если запрос прошел нормально
    if (response.ok === true) {

        let j = 0;

        // получаем данные
        const Meds = await response.json();
        let rows = document.querySelector("tbody");
        Meds.forEach(Meds => {
            if (number == 2) {
                ////для всех вр больницы
                for (let i = 0; i < 5; ++i) {
                    var dest = String(Meds.patients[i].destination)
                    if (dest.match(/therapist/)) {
                        vrachName2.push({
                            col: 1,
                            cabinet: Meds.patients[i].doctor
                        })
                    }
                }
            }
            if (number == 1) {
                ////для всех вр больницы
                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.name) == "main clinic NY") {
                        vrachName2.push({
                            col: 1,
                            cabinet: Meds.patients[i].doctor
                        })
                    }
                }
            }
            if (number == 3) {
                ////для всех вр больницы
                for (let i = 0; i < 5; ++i) {
                    if (String(Meds.patients[i].doctor) == "Heck") {
                        vrachName2.push({
                            col: 1,
                            cabinet: Meds.patients[i].doctor
                        })
                    }
                }
            }

        });
        console.log(vrachName2);

        let res = Object.fromEntries(vrachName2.map(item => [item.cabinet, 0]));
        vrachName2.forEach(item => {
            res[item.cabinet] += item.col
        })
        for (var key in res) {
            rows.append(rowreq1(res[key], key));
            console.log(res[key], key);
        }

    }

}

/////////запрос 10//////////////////////////
async function Req10(number) {
    let vrachName2 = [];
    clearTable();
    let headd = document.querySelector("thead");


    headd.append(The("Количество текущих пациентов"))

    // отправляет запрос и получаем ответ
    const response = await fetch("/api/Med", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    // если запрос прошел нормально
    if (response.ok === true) {

        let j = 0;

        // получаем данные
        const Meds = await response.json();
        let rows = document.querySelector("tbody");
        Meds.forEach(Meds => {
            if (number == 1) {
                ////для всех вр больницы
                for (let i = 0; i < 5; ++i) {

                    if (String(Meds.name) == "main hospital NY" && Meds.patients[i].operations != null && Meds.patients[i].operations != "") {
                        vrachName2.push({
                            patient: Meds.patients[i].name

                        })
                    }
                }
            }
            if (number == 2) {
                ////для всех вр больницы
                for (let i = 0; i < 5; ++i) {

                    if (String(Meds.name) == "main clinic NY" && Meds.patients[i].operations != null && Meds.patients[i].operations != "") {
                        vrachName2.push({
                            patient: Meds.patients[i].name

                        })
                    }
                }
            }
            if (number == 3) {
                ////для всех вр больницы
                for (let i = 0; i < 5; ++i) {
                    if (Meds.patients[i].operations != null && Meds.patients[i].operations != "") {
                        if (String(Meds.patients[i].operations[0].docName) == "Harrison" && new Date(Meds.patients[i].operations[0].date) > new Date("2000-07-14T16:00:00Z") && new Date(Meds.patients[i].operations[0].date) < new Date("2025-07-14T16:00:00Z")) {
                            vrachName2.push({
                                patient: Meds.patients[i].name

                            })

                        }

                    }

                }

            }

        });

        vrachName2.forEach((vrachName2) => {
            rows.append(rowreq10(vrachName2));
        });
    }
}

function rowreq10(user) {

    const tr = document.createElement("tr");

    const idTd = document.createElement("td");
    idTd.append(user.patient);
    tr.append(idTd);

    const linksTd = document.createElement("th");


    tr.appendChild(linksTd);


    return tr;
}

var sendButton = document.querySelector('#req1');
sendButton.addEventListener("click", () => Req1(1));

var sendButton = document.querySelector('#req2');
sendButton.addEventListener("click", () => Req1(2));

var sendButton = document.querySelector('#req3');
sendButton.addEventListener("click", () => Req1(3));

var sendButton = document.querySelector('#req4');
sendButton.addEventListener("click", () => Req1(4));

var sendButton = document.querySelector('#req5');
sendButton.addEventListener("click", () => Req2(1));

var sendButton = document.querySelector('#req6');
sendButton.addEventListener("click", () => Req2(2));

var sendButton = document.querySelector('#req7');
sendButton.addEventListener("click", () => Req2(3));

var sendButton = document.querySelector('#req8');
sendButton.addEventListener("click", () => Req2(4));

var sendButton = document.querySelector('#req9');
sendButton.addEventListener("click", () => Req3(1));

var sendButton = document.querySelector('#req10');
sendButton.addEventListener("click", () => Req3(2));

var sendButton = document.querySelector('#req11');
sendButton.addEventListener("click", () => Req3(3));

var sendButton = document.querySelector('#req12');
sendButton.addEventListener("click", () => Req3(4));

var sendButton = document.querySelector('#req13');
sendButton.addEventListener("click", () => Req4(1));

var sendButton = document.querySelector('#req14');
sendButton.addEventListener("click", () => Req4(2));

var sendButton = document.querySelector('#req15');
sendButton.addEventListener("click", () => Req4(3));

var sendButton = document.querySelector('#req16');
sendButton.addEventListener("click", () => Req4(4));

var sendButton = document.querySelector('#req17');
sendButton.addEventListener("click", () => Req5(1));

var sendButton = document.querySelector('#req18');
sendButton.addEventListener("click", () => Req5(2));

var sendButton = document.querySelector('#req19');
sendButton.addEventListener("click", Req6);

var sendButton = document.querySelector('#req20');
sendButton.addEventListener("click", () => Req7(1));

var sendButton = document.querySelector('#req21');
sendButton.addEventListener("click", () => Req7(2));

var sendButton = document.querySelector('#req22');
sendButton.addEventListener("click", () => Req7(3));

var sendButton = document.querySelector('#req23');
sendButton.addEventListener("click", () => Req7(4));

var sendButton = document.querySelector('#req24');
sendButton.addEventListener("click", () => Req7(5));

var sendButton = document.querySelector('#req25');
sendButton.addEventListener("click", () => Req8(1));

var sendButton = document.querySelector('#req26');
sendButton.addEventListener("click", () => Req8(2));

var sendButton = document.querySelector('#req27');
sendButton.addEventListener("click", () => Req9(1));

var sendButton = document.querySelector('#req28');
sendButton.addEventListener("click", () => Req9(2));

var sendButton = document.querySelector('#req29');
sendButton.addEventListener("click", () => Req9(3));

var sendButton = document.querySelector('#req30');
sendButton.addEventListener("click", () => Req10(1));

var sendButton = document.querySelector('#req31');
sendButton.addEventListener("click", () => Req10(2));

var sendButton = document.querySelector('#req32');
sendButton.addEventListener("click", () => Req10(3));