const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);

let Med = [{
        name: "main hospital CH",
        type: "hospital",
        city: "Chicago",
        number: 1,
        "personal": [{ "lastname": "Lay", "experience": 20, "speciality": "dentist", "numberCorp": 1, "degree": "doctor", "vacation": 40, "salary": 4000, "worksClinic": null, "worksHospital": 1, "characteristics": [{ "canOperations": [{ "countOperations": 30, "lethal": 0, "successful": 30 }] }] },
            { "lastname": "Smith", "experience": 23, "speciality": "radiologist", "numberCorp": 2, "degree": "", "vacation": 40, "salary": 4500, "worksClinic": null, "worksHospital": 1, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Heck", "experience": 10, "speciality": "therapist", "numberCorp": 4, "degree": "candidate", "vacation": 30, "salary": 3000, "worksClinic": 1, "worksHospital": 1, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Sir", "experience": 3, "speciality": "nurse", "numberCorp": 3, "degree": "", "vacation": 20, "salary": 2000, "worksClinic": null, "worksHospital": 1, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Leed", "experience": 5, "speciality": "cleaner", "numberCorp": 1, "degree": "", "vacation": 30, "salary": 1000, "worksClinic": 1, "worksHospital": 1, "characteristics": [{ "canOperations": null }] }
        ],
        "corps": [{
                "department": "dental",
                "specialization": "dental",
                "number": 1,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 3, "number": 2, "busy": 2 },
                    { "numberBeds": 5, "number": 3, "busy": 0 },
                    { "numberBeds": 2, "number": 4, "busy": 1 },
                    { "numberBeds": 3, "number": 5, "busy": 2 }
                ],
                "cabinets": [{ "name": "dentist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-17T16:00:00Z"), new Date("2020-04-17T16:00:00Z"), new Date("2020-07-19T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-05-23T16:00:00Z"), new Date("2020-03-12T16:00:00Z"), new Date("2019-03-03T16:00:00Z")] },
                    { "name": "dentist", "number": 4, "visit": [new Date("2020-04-11T16:00:00Z"), new Date("2019-04-15T16:00:00Z"), new Date("2019-02-13T16:00:00Z")] },
                    { "name": "dentist", "number": 5, "visit": [new Date("2020-05-14T16:00:00Z"), new Date("2020-01-17T16:00:00Z"), new Date("2020-07-20T16:00:00Z")] }
                ]
            },
            {
                "department": "Xray",
                "specialization": "injury",
                "number": 2,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 2 },
                    { "numberBeds": 6, "number": 3, "busy": 1 },
                    { "numberBeds": 4, "number": 4, "busy": 0 },
                    { "numberBeds": 3, "number": 5, "busy": 0 }
                ],
                "cabinets": [{
                        "name": "radiologist",
                        "number": 2,
                        "visit": [
                            [new Date("2020-07-17T16:00:00Z")]
                        ]
                    },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-11-17T16:00:00Z"), new Date("2020-09-17T16:00:00Z"), new Date("2020-09-19T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-01-23T16:00:00Z"), new Date("2020-01-12T16:00:00Z"), new Date("2019-05-03T16:00:00Z")] },
                    { "name": "Xray", "number": 4, "visit": [new Date("2020-04-12T16:00:00Z"), new Date("2019-04-30T16:00:00Z"), new Date("2019-02-11T16:00:00Z")] },
                    { "name": "radiologist", "number": 5, "visit": [new Date("2020-05-14T16:00:00Z"), new Date("2020-01-17T16:00:00Z"), new Date("2020-07-20T16:00:00Z")] }
                ]
            },
            {
                "department": "therapeutic",
                "specialization": "other",
                "number": 3,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 2 },
                    { "numberBeds": 6, "number": 3, "busy": 5 },
                    { "numberBeds": 3, "number": 4, "busy": 2 },
                    { "numberBeds": 3, "number": 5, "busy": 1 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-11-17T16:00:00Z"), new Date("2020-03-17T16:00:00Z"), new Date("2020-07-16T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-11-23T16:00:00Z"), new Date("2020-03-11T16:00:00Z"), new Date("2019-03-01T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-04-14T16:00:00Z"), new Date("2019-04-11T16:00:00Z"), new Date("2019-02-17T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-05-12T16:00:00Z"), new Date("2020-01-11T16:00:00Z"), new Date("2020-07-21T16:00:00Z")] }
                ]
            },
            {
                "department": "therapeutic",
                "specialization": "other",
                "number": 4,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 1 },
                    { "numberBeds": 6, "number": 3, "busy": 2 },
                    { "numberBeds": 6, "number": 4, "busy": 2 },
                    { "numberBeds": 3, "number": 5, "busy": 0 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-13T16:00:00Z"), new Date("2020-04-12T16:00:00Z"), new Date("2020-07-12T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-04-23T16:00:00Z"), new Date("2020-03-11T16:00:00Z"), new Date("2019-03-01T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-02-11T16:00:00Z"), new Date("2019-02-15T16:00:00Z"), new Date("2019-02-13T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-02-14T16:00:00Z"), new Date("2020-01-13T16:00:00Z"), new Date("2020-01-20T16:00:00Z")] }
                ]
            },
            {
                "department": "surgical",
                "specialization": "surgery",
                "number": 5,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 0 },
                    { "numberBeds": 6, "number": 3, "busy": 4 },
                    { "numberBeds": 6, "number": 4, "busy": 1 },
                    { "numberBeds": 3, "number": 5, "busy": 2 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-14T16:00:00Z"), new Date("2020-04-13T16:00:00Z"), new Date("2020-07-29T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-02-23T16:00:00Z"), new Date("2020-02-12T16:00:00Z"), new Date("2019-02-03T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-05-11T16:00:00Z"), new Date("2019-01-15T16:00:00Z"), new Date("2019-01-13T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-06-14T16:00:00Z"), new Date("2020-08-17T16:00:00Z"), new Date("2020-09-20T16:00:00Z")] }
                ]
            }
        ],

        "laboratory": [{ "contract": 1, "profile": ["biochemical", "physiological"] }],
        "patients": [{ "name": "Sally", "anamnesis": [{ diagnos: "flu", time: [new Date("2020-07-14T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Heck" }, { diagnos: "flu", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a therapist", "operations": null, "doctor": "Heck" },
            { "name": "Lola", "anamnesis": [{ diagnos: "pain in arm", time: [new Date("2020-08-11T16:00:00Z"), new Date("2020-09-21T16:00:00Z")], doctor: "Smith" }, { diagnos: "pain in arm", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a radiologist", "operations": [{ name: "removal of a cyst from the arm", docName: "Leed", date: new Date("2019-09-21T16:00:00Z") }], "doctor": "Smith" },
            { "name": "Samuil", "anamnesis": [{ diagnos: "headache", time: [new Date("2020-04-14T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Heck" }, { diagnos: "chills", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a therapist", "operations": [], "doctor": "Heck" },
            { "name": "Sam", "anamnesis": [{ diagnos: "caries", time: [new Date("2020-06-14T16:00:00Z"), new Date("2020-07-01T16:00:00Z")], doctor: "Lay" }, { diagnos: "caries", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a dentist", "operations": [{ name: "removal of a tooth", docName: "Lay", date: new Date("2018-09-11T16:00:00Z") }], "doctor": "Lay" },
            { "name": "Olly", "anamnesis": [{ diagnos: "flu", time: [new Date("2020-06-13T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Heck" }], "destination": null, "operations": null, "doctor": null }
        ]
    },
    {
        name: "main clinic NY",
        type: "clinic",
        city: "NewYork",
        number: 2,
        "personal": [{ "lastname": "Slat", "experience": 20, "speciality": "dentist", "numberCorp": 1, "degree": "doctor", "vacation": 40, "salary": 4000, "worksClinic": 1, "worksHospital": null, "characteristics": [{ "canOperations": [{ "countOperations": 30, "lethal": 0, "successful": 30 }] }] },
            { "lastname": "Fear", "experience": 23, "speciality": "radiologist", "numberCorp": 2, "degree": "", "vacation": 40, "salary": 4500, "worksClinic": 1, "worksHospital": null, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Gar", "experience": 10, "speciality": "therapist", "numberCorp": 4, "degree": "candidate", "vacation": 30, "salary": 3000, "worksClinic": 1, "worksHospital": null, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Horri", "experience": 3, "speciality": "nurse", "numberCorp": 3, "degree": "", "vacation": 20, "salary": 2000, "worksClinic": 1, "worksHospital": null, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Harrison", "experience": 30, "speciality": "surgeon", "numberCorp": 5, "degree": "doctor", "vacation": 45, "salary": 5000, "worksClinic": 1, "worksHospital": null, "characteristics": [{ "canOperations": [{ "countOperations": 50, "lethal": 1, "successful": 49 }] }] }
        ],
        "corps": [{
                "department": "dental",
                "specialization": "dental",
                "number": 5,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 3, "number": 2, "busy": 2 },
                    { "numberBeds": 5, "number": 3, "busy": 0 },
                    { "numberBeds": 2, "number": 4, "busy": 1 },
                    { "numberBeds": 3, "number": 5, "busy": 2 }
                ],
                "cabinets": [{ "name": "dentist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-17T16:00:00Z"), new Date("2020-04-17T16:00:00Z"), new Date("2020-07-19T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-05-23T16:00:00Z"), new Date("2020-03-12T16:00:00Z"), new Date("2019-03-03T16:00:00Z")] },
                    { "name": "dentist", "number": 4, "visit": [new Date("2020-04-11T16:00:00Z"), new Date("2019-04-15T16:00:00Z"), new Date("2019-02-13T16:00:00Z")] },
                    { "name": "dentist", "number": 5, "visit": [new Date("2020-05-14T16:00:00Z"), new Date("2020-01-17T16:00:00Z"), new Date("2020-07-20T16:00:00Z")] }
                ]
            },
            {
                "department": "Xray",
                "specialization": "injury",
                "number": 2,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 2 },
                    { "numberBeds": 6, "number": 3, "busy": 1 },
                    { "numberBeds": 4, "number": 4, "busy": 0 },
                    { "numberBeds": 3, "number": 5, "busy": 0 }
                ],
                "cabinets": [{ "name": "radiologist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-11-17T16:00:00Z"), new Date("2020-09-17T16:00:00Z"), new Date("2020-09-19T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-01-23T16:00:00Z"), new Date("2020-01-12T16:00:00Z"), new Date("2019-05-03T16:00:00Z")] },
                    { "name": "Xray", "number": 4, "visit": [new Date("2020-04-12T16:00:00Z"), new Date("2019-04-30T16:00:00Z"), new Date("2019-02-11T16:00:00Z")] },
                    { "name": "radiologist", "number": 5, "visit": [new Date("2020-05-14T16:00:00Z"), new Date("2020-01-17T16:00:00Z"), new Date("2020-07-20T16:00:00Z")] }
                ]
            },
            {
                "department": "therapeutic",
                "specialization": "other",
                "number": 3,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 2 },
                    { "numberBeds": 6, "number": 3, "busy": 5 },
                    { "numberBeds": 3, "number": 4, "busy": 2 },
                    { "numberBeds": 3, "number": 5, "busy": 1 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-11-17T16:00:00Z"), new Date("2020-03-17T16:00:00Z"), new Date("2020-07-16T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-11-23T16:00:00Z"), new Date("2020-03-11T16:00:00Z"), new Date("2019-03-01T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-04-14T16:00:00Z"), new Date("2019-04-11T16:00:00Z"), new Date("2019-02-17T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-05-12T16:00:00Z"), new Date("2020-01-11T16:00:00Z"), new Date("2020-07-21T16:00:00Z")] }
                ]
            },
            {
                "department": "therapeutic",
                "specialization": "other",
                "number": 4,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 1 },
                    { "numberBeds": 6, "number": 3, "busy": 2 },
                    { "numberBeds": 6, "number": 4, "busy": 2 },
                    { "numberBeds": 3, "number": 5, "busy": 0 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-13T16:00:00Z"), new Date("2020-04-12T16:00:00Z"), new Date("2020-07-12T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-04-23T16:00:00Z"), new Date("2020-03-11T16:00:00Z"), new Date("2019-03-01T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-02-11T16:00:00Z"), new Date("2019-02-15T16:00:00Z"), new Date("2019-02-13T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-02-14T16:00:00Z"), new Date("2020-01-13T16:00:00Z"), new Date("2020-01-20T16:00:00Z")] }
                ]
            },
            {
                "department": "surgical",
                "specialization": "surgery",
                "number": 5,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 0 },
                    { "numberBeds": 6, "number": 3, "busy": 4 },
                    { "numberBeds": 6, "number": 4, "busy": 1 },
                    { "numberBeds": 3, "number": 5, "busy": 2 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-14T16:00:00Z"), new Date("2020-04-13T16:00:00Z"), new Date("2020-07-29T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-02-23T16:00:00Z"), new Date("2020-02-12T16:00:00Z"), new Date("2019-02-03T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-05-11T16:00:00Z"), new Date("2019-01-15T16:00:00Z"), new Date("2019-01-13T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-06-14T16:00:00Z"), new Date("2020-08-17T16:00:00Z"), new Date("2020-09-20T16:00:00Z")] }
                ]
            }
        ],

        "laboratory": [{ "contract": 1, "profile": ["biochemical", "physiological"] }],
        "patients": [{ "name": "Sally", "anamnesis": [{ diagnos: "flu", time: [new Date("2020-07-14T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Gar" }, { diagnos: "flu", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a therapist", "operations": null, "doctor": "Gar" },
            { "name": "Sid", "anamnesis": [{ diagnos: "pain in arm", time: [new Date("2020-08-11T16:00:00Z"), new Date("2020-09-21T16:00:00Z")], doctor: "Harrison" }, { diagnos: "pain in arm", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a radiologist", "operations": [{ name: "removal of a cyst from the arm", docName: "Harrison", date: new Date("2019-09-21T16:00:00Z") }], "doctor": "Fear" },
            { "name": "Nancy", "anamnesis": [{ diagnos: "headache", time: [new Date("2020-04-14T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Gar" }, { diagnos: "chills", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a therapist", "operations": [], "doctor": "Gar" },
            { "name": "Bill", "anamnesis": [{ diagnos: "caries", time: [new Date("2020-06-14T16:00:00Z"), new Date("2020-07-01T16:00:00Z")], doctor: "Slat" }, { diagnos: "caries", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a dentist", "operations": [{ name: "removal of a tooth", docName: "Slat", date: new Date("2018-09-11T16:00:00Z") }], "doctor": "Slat" },
            { "name": "Niya", "anamnesis": [{ diagnos: "flu", time: [new Date("2020-06-13T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Gar" }], "destination": null, "operations": null, "doctor": null }
        ]
    },
    {
        name: "main clinic CH",
        type: "clinic",
        city: "Chicago",
        number: 1,
        "personal": [{ "lastname": "Robins", "experience": 20, "speciality": "dentist", "numberCorp": 1, "degree": "doctor", "vacation": 40, "salary": 4000, "worksClinic": 1, "worksHospital": null, "characteristics": [{ "canOperations": [{ "countOperations": 30, "lethal": 0, "successful": 30 }] }] },
            { "lastname": "Lock", "experience": 23, "speciality": "radiologist", "numberCorp": 2, "degree": "", "vacation": 40, "salary": 4500, "worksClinic": 1, "worksHospital": null, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Heck", "experience": 10, "speciality": "therapist", "numberCorp": 4, "degree": "candidate", "vacation": 30, "salary": 3000, "worksClinic": 1, "worksHospital": 1, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Dayz", "experience": 3, "speciality": "nurse", "numberCorp": 3, "degree": "", "vacation": 20, "salary": 2000, "worksClinic": 1, "worksHospital": null, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Leed", "experience": 30, "speciality": "surgeon", "numberCorp": 5, "degree": "doctor", "vacation": 45, "salary": 5000, "worksClinic": 1, "worksHospital": null, "characteristics": [{ "canOperations": [{ "countOperations": 40, "lethal": 3, "successful": 37 }] }] }
        ],
        "corps": [{
                "department": "dental",
                "specialization": "dental",
                "number": 1,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 3, "number": 2, "busy": 2 },
                    { "numberBeds": 5, "number": 3, "busy": 0 },
                    { "numberBeds": 2, "number": 4, "busy": 1 },
                    { "numberBeds": 3, "number": 5, "busy": 2 }
                ],
                "cabinets": [{ "name": "dentist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-17T16:00:00Z"), new Date("2020-04-17T16:00:00Z"), new Date("2020-07-19T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-05-23T16:00:00Z"), new Date("2020-03-12T16:00:00Z"), new Date("2019-03-03T16:00:00Z")] },
                    { "name": "dentist", "number": 4, "visit": [new Date("2020-04-11T16:00:00Z"), new Date("2019-04-15T16:00:00Z"), new Date("2019-02-13T16:00:00Z")] },
                    { "name": "dentist", "number": 5, "visit": [new Date("2020-05-14T16:00:00Z"), new Date("2020-01-17T16:00:00Z"), new Date("2020-07-20T16:00:00Z")] }
                ]
            },
            {
                "department": "Xray",
                "specialization": "injury",
                "number": 2,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 2 },
                    { "numberBeds": 6, "number": 3, "busy": 1 },
                    { "numberBeds": 4, "number": 4, "busy": 0 },
                    { "numberBeds": 3, "number": 5, "busy": 0 }
                ],
                "cabinets": [{ "name": "radiologist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-11-17T16:00:00Z"), new Date("2020-09-17T16:00:00Z"), new Date("2020-09-19T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-01-23T16:00:00Z"), new Date("2020-01-12T16:00:00Z"), new Date("2019-05-03T16:00:00Z")] },
                    { "name": "Xray", "number": 4, "visit": [new Date("2020-04-12T16:00:00Z"), new Date("2019-04-30T16:00:00Z"), new Date("2019-02-11T16:00:00Z")] },
                    { "name": "radiologist", "number": 5, "visit": [new Date("2020-05-14T16:00:00Z"), new Date("2020-01-17T16:00:00Z"), new Date("2020-07-20T16:00:00Z")] }
                ]
            },
            {
                "department": "therapeutic",
                "specialization": "other",
                "number": 3,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 2 },
                    { "numberBeds": 6, "number": 3, "busy": 5 },
                    { "numberBeds": 3, "number": 4, "busy": 2 },
                    { "numberBeds": 3, "number": 5, "busy": 1 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-11-17T16:00:00Z"), new Date("2020-03-17T16:00:00Z"), new Date("2020-07-16T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-11-23T16:00:00Z"), new Date("2020-03-11T16:00:00Z"), new Date("2019-03-01T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-04-14T16:00:00Z"), new Date("2019-04-11T16:00:00Z"), new Date("2019-02-17T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-05-12T16:00:00Z"), new Date("2020-01-11T16:00:00Z"), new Date("2020-07-21T16:00:00Z")] }
                ]
            },
            {
                "department": "therapeutic",
                "specialization": "other",
                "number": 4,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 1 },
                    { "numberBeds": 6, "number": 3, "busy": 2 },
                    { "numberBeds": 6, "number": 4, "busy": 2 },
                    { "numberBeds": 3, "number": 5, "busy": 0 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-13T16:00:00Z"), new Date("2020-04-12T16:00:00Z"), new Date("2020-07-12T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-04-23T16:00:00Z"), new Date("2020-03-11T16:00:00Z"), new Date("2019-03-01T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-02-11T16:00:00Z"), new Date("2019-02-15T16:00:00Z"), new Date("2019-02-13T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-02-14T16:00:00Z"), new Date("2020-01-13T16:00:00Z"), new Date("2020-01-20T16:00:00Z")] }
                ]
            },
            {
                "department": "surgical",
                "specialization": "surgery",
                "number": 5,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 0 },
                    { "numberBeds": 6, "number": 3, "busy": 4 },
                    { "numberBeds": 6, "number": 4, "busy": 1 },
                    { "numberBeds": 3, "number": 5, "busy": 2 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-14T16:00:00Z"), new Date("2020-04-13T16:00:00Z"), new Date("2020-07-29T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-02-23T16:00:00Z"), new Date("2020-02-12T16:00:00Z"), new Date("2019-02-03T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-05-11T16:00:00Z"), new Date("2019-01-15T16:00:00Z"), new Date("2019-01-13T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-06-14T16:00:00Z"), new Date("2020-08-17T16:00:00Z"), new Date("2020-09-20T16:00:00Z")] }
                ]
            }
        ],

        "laboratory": [{ "contract": 1, "profile": ["biochemical", "physiological"] }],
        "patients": [{ "name": "Sally", "anamnesis": [{ diagnos: "flu", time: [new Date("2020-07-14T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Heck" }, { diagnos: "flu", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a therapist", "operations": null, "doctor": "Heck" },
            { "name": "Katrin", "anamnesis": [{ diagnos: "pain in arm", time: [new Date("2020-08-11T16:00:00Z"), new Date("2020-09-21T16:00:00Z")], doctor: "Lock" }, { diagnos: "pain in arm", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a radiologist", "operations": [{ name: "removal of a cyst from the arm", docName: "Leed", date: new Date("2019-09-21T16:00:00Z") }], "doctor": "Lock" },
            { "name": "Horry", "anamnesis": [{ diagnos: "headache", time: [new Date("2020-04-14T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Heck" }, { diagnos: "chills", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a therapist", "operations": [], "doctor": "Heck" },
            { "name": "Jake", "anamnesis": [{ diagnos: "caries", time: [new Date("2020-06-14T16:00:00Z"), new Date("2020-07-01T16:00:00Z")], doctor: "Robins" }, { diagnos: "caries", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a dentist", "operations": [{ name: "removal of a tooth", docName: "Robins", date: new Date("2018-09-11T16:00:00Z") }], "doctor": "Robins" },
            { "name": "Sanny", "anamnesis": [{ diagnos: "flu", time: [new Date("2020-06-13T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Heck" }], "destination": null, "operations": null, "doctor": null }
        ]
    },
    {
        name: "main hospital NY",
        type: "hospital",
        city: "NewYork",
        number: 1,
        "personal": [{ "lastname": "Sall", "experience": 20, "speciality": "dentist", "numberCorp": 1, "degree": "doctor", "vacation": 40, "salary": 4000, "worksClinic": null, "worksHospital": 1, "characteristics": [{ "canOperations": [{ "countOperations": 30, "lethal": 0, "successful": 30 }] }] },
            { "lastname": "Hort", "experience": 23, "speciality": "radiologist", "numberCorp": 2, "degree": "", "vacation": 40, "salary": 4500, "worksClinic": null, "worksHospital": 1, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Jay", "experience": 10, "speciality": "therapist", "numberCorp": 4, "degree": "candidate", "vacation": 30, "salary": 3000, "worksClinic": null, "worksHospital": 1, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Lake", "experience": 3, "speciality": "nurse", "numberCorp": 3, "degree": "", "vacation": 20, "salary": 2000, "worksClinic": null, "worksHospital": 1, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Hif", "experience": 5, "speciality": "cleaner", "numberCorp": 1, "degree": "", "vacation": 30, "salary": 1000, "worksClinic": null, "worksHospital": 1, "characteristics": [{ "canOperations": null }] }
        ],
        "corps": [{
                "department": "dental",
                "specialization": "dental",
                "number": 1,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 3, "number": 2, "busy": 2 },
                    { "numberBeds": 5, "number": 3, "busy": 0 },
                    { "numberBeds": 2, "number": 4, "busy": 1 },
                    { "numberBeds": 3, "number": 5, "busy": 2 }
                ],
                "cabinets": [{ "name": "dentist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-17T16:00:00Z"), new Date("2020-04-17T16:00:00Z"), new Date("2020-07-19T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-05-23T16:00:00Z"), new Date("2020-03-12T16:00:00Z"), new Date("2019-03-03T16:00:00Z")] },
                    { "name": "dentist", "number": 4, "visit": [new Date("2020-04-11T16:00:00Z"), new Date("2019-04-15T16:00:00Z"), new Date("2019-02-13T16:00:00Z")] },
                    { "name": "dentist", "number": 5, "visit": [new Date("2020-05-14T16:00:00Z"), new Date("2020-01-17T16:00:00Z"), new Date("2020-07-20T16:00:00Z")] }
                ]
            },
            {
                "department": "Xray",
                "specialization": "injury",
                "number": 2,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 2 },
                    { "numberBeds": 6, "number": 3, "busy": 1 },
                    { "numberBeds": 4, "number": 4, "busy": 0 },
                    { "numberBeds": 3, "number": 5, "busy": 0 }
                ],
                "cabinets": [{ "name": "radiologist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-11-17T16:00:00Z"), new Date("2020-09-17T16:00:00Z"), new Date("2020-09-19T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-01-23T16:00:00Z"), new Date("2020-01-12T16:00:00Z"), new Date("2019-05-03T16:00:00Z")] },
                    { "name": "Xray", "number": 4, "visit": [new Date("2020-04-12T16:00:00Z"), new Date("2019-04-30T16:00:00Z"), new Date("2019-02-11T16:00:00Z")] },
                    { "name": "radiologist", "number": 5, "visit": [new Date("2020-05-14T16:00:00Z"), new Date("2020-01-17T16:00:00Z"), new Date("2020-07-20T16:00:00Z")] }
                ]
            },
            {
                "department": "therapeutic",
                "specialization": "other",
                "number": 3,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 2 },
                    { "numberBeds": 6, "number": 3, "busy": 5 },
                    { "numberBeds": 3, "number": 4, "busy": 2 },
                    { "numberBeds": 3, "number": 5, "busy": 1 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-11-17T16:00:00Z"), new Date("2020-03-17T16:00:00Z"), new Date("2020-07-16T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-11-23T16:00:00Z"), new Date("2020-03-11T16:00:00Z"), new Date("2019-03-01T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-04-14T16:00:00Z"), new Date("2019-04-11T16:00:00Z"), new Date("2019-02-17T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-05-12T16:00:00Z"), new Date("2020-01-11T16:00:00Z"), new Date("2020-07-21T16:00:00Z")] }
                ]
            },
            {
                "department": "therapeutic",
                "specialization": "other",
                "number": 4,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 1 },
                    { "numberBeds": 6, "number": 3, "busy": 2 },
                    { "numberBeds": 6, "number": 4, "busy": 2 },
                    { "numberBeds": 3, "number": 5, "busy": 0 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-13T16:00:00Z"), new Date("2020-04-12T16:00:00Z"), new Date("2020-07-12T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-04-23T16:00:00Z"), new Date("2020-03-11T16:00:00Z"), new Date("2019-03-01T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-02-11T16:00:00Z"), new Date("2019-02-15T16:00:00Z"), new Date("2019-02-13T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-02-14T16:00:00Z"), new Date("2020-01-13T16:00:00Z"), new Date("2020-01-20T16:00:00Z")] }
                ]
            },
            {
                "department": "surgical",
                "specialization": "surgery",
                "number": 5,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 0 },
                    { "numberBeds": 6, "number": 3, "busy": 4 },
                    { "numberBeds": 6, "number": 4, "busy": 1 },
                    { "numberBeds": 3, "number": 5, "busy": 2 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-14T16:00:00Z"), new Date("2020-04-13T16:00:00Z"), new Date("2020-07-29T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-02-23T16:00:00Z"), new Date("2020-02-12T16:00:00Z"), new Date("2019-02-03T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-05-11T16:00:00Z"), new Date("2019-01-15T16:00:00Z"), new Date("2019-01-13T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-06-14T16:00:00Z"), new Date("2020-08-17T16:00:00Z"), new Date("2020-09-20T16:00:00Z")] }
                ]
            }
        ],

        "laboratory": [{ "contract": 1, "profile": ["biochemical", "physiological"] }],
        "patients": [{ "name": "Sally", "anamnesis": [{ diagnos: "flu", time: [new Date("2020-07-14T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Jay" }, { diagnos: "flu", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a therapist", "operations": null, "doctor": "Jay" },
            { "name": "Mark", "anamnesis": [{ diagnos: "pain in arm", time: [new Date("2020-08-11T16:00:00Z"), new Date("2020-09-21T16:00:00Z")], doctor: "Hort" }, { diagnos: "pain in arm", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a radiologist", "operations": [{ name: "removal of a cyst from the arm", docName: "Harrison", date: new Date("2019-09-21T16:00:00Z") }], "doctor": "Hort" },
            { "name": "Floy", "anamnesis": [{ diagnos: "headache", time: [new Date("2020-04-14T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Jay" }, { diagnos: "chills", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a therapist", "operations": [], "doctor": "Jay" },
            { "name": "Gloria", "anamnesis": [{ diagnos: "caries", time: [new Date("2020-06-14T16:00:00Z"), new Date("2020-07-01T16:00:00Z")], doctor: "Sall" }, { diagnos: "caries", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a dentist", "operations": [{ name: "removal of a tooth", docName: "Sall", date: new Date("2018-09-11T16:00:00Z") }], "doctor": "Sall" },
            { "name": "Melt", "anamnesis": [{ diagnos: "flu", time: [new Date("2020-06-13T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Jay" }], "destination": null, "operations": null, "doctor": null }
        ]
    },
    {
        name: "main clinic Boston",
        type: "clinic",
        city: "Boston",
        number: 1,
        "personal": [{ "lastname": "Per", "experience": 20, "speciality": "dentist", "numberCorp": 1, "degree": "doctor", "vacation": 40, "salary": 4000, "worksClinic": 1, "worksHospital": null, "characteristics": [{ "canOperations": [{ "countOperations": 30, "lethal": 0, "successful": 30 }] }] },
            { "lastname": "Kort", "experience": 23, "speciality": "radiologist", "numberCorp": 2, "degree": "", "vacation": 40, "salary": 4500, "worksClinic": 1, "worksHospital": null, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Clein", "experience": 10, "speciality": "therapist", "numberCorp": 4, "degree": "candidate", "vacation": 30, "salary": 3000, "worksClinic": 1, "worksHospital": null, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Gars", "experience": 3, "speciality": "nurse", "numberCorp": 3, "degree": "", "vacation": 20, "salary": 2000, "worksClinic": 1, "worksHospital": null, "characteristics": [{ "canOperations": null }] },
            { "lastname": "Xan", "experience": 5, "speciality": "cleaner", "numberCorp": 1, "degree": "", "vacation": 30, "salary": 1000, "worksClinic": 1, "worksHospital": null, "characteristics": [{ "canOperations": null }] }
        ],
        "corps": [{
                "department": "dental",
                "specialization": "dental",
                "number": 1,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 3, "number": 2, "busy": 2 },
                    { "numberBeds": 5, "number": 3, "busy": 0 },
                    { "numberBeds": 2, "number": 4, "busy": 1 },
                    { "numberBeds": 3, "number": 5, "busy": 2 }
                ],
                "cabinets": [{ "name": "dentist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-17T16:00:00Z"), new Date("2020-04-17T16:00:00Z"), new Date("2020-07-19T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-05-23T16:00:00Z"), new Date("2020-03-12T16:00:00Z"), new Date("2019-03-03T16:00:00Z")] },
                    { "name": "dentist", "number": 4, "visit": [new Date("2020-04-11T16:00:00Z"), new Date("2019-04-15T16:00:00Z"), new Date("2019-02-13T16:00:00Z")] },
                    { "name": "dentist", "number": 5, "visit": [new Date("2020-05-14T16:00:00Z"), new Date("2020-01-17T16:00:00Z"), new Date("2020-07-20T16:00:00Z")] }
                ]
            },
            {
                "department": "Xray",
                "specialization": "injury",
                "number": 2,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 2 },
                    { "numberBeds": 6, "number": 3, "busy": 1 },
                    { "numberBeds": 4, "number": 4, "busy": 0 },
                    { "numberBeds": 3, "number": 5, "busy": 0 }
                ],
                "cabinets": [{ "name": "radiologist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-11-17T16:00:00Z"), new Date("2020-09-17T16:00:00Z"), new Date("2020-09-19T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-01-23T16:00:00Z"), new Date("2020-01-12T16:00:00Z"), new Date("2019-05-03T16:00:00Z")] },
                    { "name": "Xray", "number": 4, "visit": [new Date("2020-04-12T16:00:00Z"), new Date("2019-04-30T16:00:00Z"), new Date("2019-02-11T16:00:00Z")] },
                    { "name": "radiologist", "number": 5, "visit": [new Date("2020-05-14T16:00:00Z"), new Date("2020-01-17T16:00:00Z"), new Date("2020-07-20T16:00:00Z")] }
                ]
            },
            {
                "department": "therapeutic",
                "specialization": "other",
                "number": 3,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 2 },
                    { "numberBeds": 6, "number": 3, "busy": 5 },
                    { "numberBeds": 3, "number": 4, "busy": 2 },
                    { "numberBeds": 3, "number": 5, "busy": 1 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-11-17T16:00:00Z"), new Date("2020-03-17T16:00:00Z"), new Date("2020-07-16T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-11-23T16:00:00Z"), new Date("2020-03-11T16:00:00Z"), new Date("2019-03-01T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-04-14T16:00:00Z"), new Date("2019-04-11T16:00:00Z"), new Date("2019-02-17T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-05-12T16:00:00Z"), new Date("2020-01-11T16:00:00Z"), new Date("2020-07-21T16:00:00Z")] }
                ]
            },
            {
                "department": "therapeutic",
                "specialization": "other",
                "number": 4,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 1 },
                    { "numberBeds": 6, "number": 3, "busy": 2 },
                    { "numberBeds": 6, "number": 4, "busy": 2 },
                    { "numberBeds": 3, "number": 5, "busy": 0 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-13T16:00:00Z"), new Date("2020-04-12T16:00:00Z"), new Date("2020-07-12T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-04-23T16:00:00Z"), new Date("2020-03-11T16:00:00Z"), new Date("2019-03-01T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-02-11T16:00:00Z"), new Date("2019-02-15T16:00:00Z"), new Date("2019-02-13T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-02-14T16:00:00Z"), new Date("2020-01-13T16:00:00Z"), new Date("2020-01-20T16:00:00Z")] }
                ]
            },
            {
                "department": "surgical",
                "specialization": "surgery",
                "number": 5,
                "wards": [{ "numberBeds": 3, "number": 1, "busy": 0 },
                    { "numberBeds": 2, "number": 2, "busy": 0 },
                    { "numberBeds": 6, "number": 3, "busy": 4 },
                    { "numberBeds": 6, "number": 4, "busy": 1 },
                    { "numberBeds": 3, "number": 5, "busy": 2 }
                ],
                "cabinets": [{ "name": "therapist", "number": 2, "visit": [new Date("2020-07-17T16:00:00Z")] },
                    { "name": "primary", "number": 1, "visit": [new Date("2020-07-14T16:00:00Z"), new Date("2020-04-13T16:00:00Z"), new Date("2020-07-29T16:00:00Z")] },
                    { "name": "primary", "number": 3, "visit": [new Date("2020-02-23T16:00:00Z"), new Date("2020-02-12T16:00:00Z"), new Date("2019-02-03T16:00:00Z")] },
                    { "name": "therapist", "number": 4, "visit": [new Date("2020-05-11T16:00:00Z"), new Date("2019-01-15T16:00:00Z"), new Date("2019-01-13T16:00:00Z")] },
                    { "name": "therapist", "number": 5, "visit": [new Date("2020-06-14T16:00:00Z"), new Date("2020-08-17T16:00:00Z"), new Date("2020-09-20T16:00:00Z")] }
                ]
            }
        ],

        "laboratory": [{ "contract": 1, "profile": ["biochemical", "physiological"] }],
        "patients": [{ "name": "Sally", "anamnesis": [{ diagnos: "flu", time: [new Date("2020-07-14T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Clein" }, { diagnos: "flu", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a therapist", "operations": null, "doctor": "Clein" },
            { "name": "Max", "anamnesis": [{ diagnos: "pain in arm", time: [new Date("2020-08-11T16:00:00Z"), new Date("2020-09-21T16:00:00Z")], doctor: "Kort" }, { diagnos: "pain in arm", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a radiologist", "operations": [{ name: "removal of a cyst from the arm", docName: "Harrison", date: new Date("2019-09-21T16:00:00Z") }], "doctor": "Kort" },
            { "name": "Silf", "anamnesis": [{ diagnos: "headache", time: [new Date("2020-04-14T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Clein" }, { diagnos: "chills", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a therapist", "operations": [], "doctor": "Clein" },
            { "name": "Holly", "anamnesis": [{ diagnos: "caries", time: [new Date("2020-06-14T16:00:00Z"), new Date("2020-07-01T16:00:00Z")], doctor: "Per" }, { diagnos: "caries", time: [new Date("2022-09-14T16:00:00Z"), null], doctor: null }], "destination": "visit a dentist", "operations": [{ name: "removal of a tooth", docName: "Per", date: new Date("2018-09-11T16:00:00Z") }], "doctor": "Per" },
            { "name": "Zoya", "anamnesis": [{ diagnos: "flu", time: [new Date("2020-06-13T16:00:00Z"), new Date("2020-07-21T16:00:00Z")], doctor: "Clein" }], "destination": null, "operations": null, "doctor": null }
        ]
    }


];

mongoClient.connect(function(err, client) {

    const db = client.db("Med");
    const collection = db.collection("MedicalOrg");

    collection.insertMany(Med, function(err, results) {

        console.log(results);
        collection.find().toArray(function(err, results) {

            console.log(results);
            client.close();
        });
    });


});