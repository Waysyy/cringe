const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectId;

const app = express();
const jsonParser = express.json();

const mongoClient = new MongoClient("mongodb://localhost:27017/");

let dbClient;

app.use(express.static(__dirname + "/public"));

mongoClient.connect(function(err, client) {
    if (err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db("Med").collection("MedicalOrg");
    app.listen(3000, function() {
        console.log("Сервер ожидает подключения...");
    });
});

app.get("/api/Med", function(req, res) {

    const collection = req.app.locals.collection;
    collection.find({}).toArray(function(err, Meds) {

        if (err) return console.log(err);
        res.send(Meds)
    });

});

app.get("/api/Med/:id", function(req, res) {

    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOne({ _id: id }, function(err, Meds) {

        if (err) return console.log(err);
        res.send(Meds);
    });
});

app.post("/api/Med", jsonParser, function(req, res) {

    if (!req.body) return res.sendStatus(400);

    const type = req.body.type;
    const name = req.body.name;
    const city = req.body.city;
    const number = req.body.number;
    const personal = [{ "lastname": req.body.lastname, "experience": req.body.experience, "speciality": req.body.speciality, "numberCorp": req.body.numberCorp, "degree": req.body.degree, "vacation": req.body.vacation, "salary": req.body.salary, "worksClinic": req.body.worksClinic, "worksHospital": req.body.worksHospital, "characteristics": [{ "canOperations": [{ "characteristics": req.body.characteristics, "lethal": req.body.lethal, "successful": req.body.successful }] }] }];
    const corps = [{ "department": req.body.department, "specialization": req.body.specialization, "number": req.body.numbercorps, "wards": [{ "numberBeds": req.body.numberBeds, "number": req.body.numberBeds, "busy": req.body.busy }] }];
    const cabinets = [{ "name": req.body.cabinetsname, "number": req.body.cabinetsnumber, "visit": [new Date()] }]
    const laboratory = [{ "contract": req.body.contract, "profile": [req.body.profile] }];
    const patients = [{ "name": req.body.patientsname, "anamnesis": [{ "diagnos": req.body.diagnos, "time": [req.body.time1, req.body.time2], "doctor": req.body.anamnesDoctor }], "destination": req.body.destination, "operations": [{ "name": req.body.operationsName, "docName": req.body.docName, "date": req.body.operationDate }], "doctor": req.body.doctor }];


    const Meds = {
        type: type,
        name: name,
        city: city,
        number: number,
        personal: personal,
        corps: corps,
        cabinets: cabinets,
        laboratory: laboratory,
        patients: patients
    };



    const collection = req.app.locals.collection;
    collection.insertOne(Meds, function(err, result) {

        if (err) return console.log(err);
        res.send(Meds);
    });
});

app.delete("/api/Med/:id", function(req, res) {

    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOneAndDelete({ _id: id }, function(err, result) {

        if (err) return console.log(err);
        let user = result.value;
        res.send(user);
    });
});



app.put("/api/Med", jsonParser, function(req, res) {

    if (!req.body) return res.sendStatus(400);
    const id = new objectId(req.body.id);
    const type = req.body.type;
    const name = req.body.name;
    const city = req.body.city;
    const number = req.body.number;
    const personal = [{ "lastname": req.body.lastname, "experience": req.body.experience, "speciality": req.body.speciality, "numberCorp": req.body.numberCorp, "degree": req.body.degree, "vacation": req.body.vacation, "salary": req.body.salary, "worksClinic": req.body.worksClinic, "worksHospital": req.body.worksHospital, "characteristics": [{ "canOperations": [{ "characteristics": req.body.characteristics, "lethal": req.body.lethal, "successful": req.body.successful }] }] }];
    const corps = [{ "department": req.body.department, "specialization": req.body.specialization, "number": req.body.numbercorps, "wards": [{ "numberBeds": req.body.numberBeds, "number": req.body.numberBeds, "busy": req.body.busy }] }];
    const cabinets = [{ "name": req.body.cabinetsname, "number": req.body.cabinetsnumber, "visit": [new Date()] }]
    const laboratory = [{ "contract": req.body.contract, "profile": [req.body.profile] }];
    const patients = [{ "name": req.body.patientsname, "anamnesis": [{ "diagnos": req.body.diagnos, "time": [req.body.time1, req.body.time2], "doctor": req.body.anamnesDoctor }], "destination": req.body.destination, "operations": [{ "name": req.body.operationsName, "docName": req.body.docName, "date": req.body.operationDate }], "doctor": req.body.doctor }];
    const collection = req.app.locals.collection;
    collection.findOneAndUpdate({ _id: id }, {
        $set: {
            type: type,
            name: name,
            city: city,
            number: number,
            personal: personal,
            corps: corps,
            cabinets: cabinets,
            laboratory: laboratory,
            patients: patients
        }
    }, { returnDocument: "after" }, function(err, result) {

        if (err) return console.log(err);
        const user = result.value;
        res.send(user);
    });
});

// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});