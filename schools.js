console.log("Rayhan ahmed");
var num1 = "99.5";
var num2 = 15;
console.log(num1+num2);

const schools = [
    {
        school:'school1',
        schoolClass:[{
            class:"one",
            student:50,
            studentDetails:[
                {roll:1,name:"Rayhan"},
                {roll:2,name:"tut-tut"}
            ]
        },
        {
            class:"two",
            student:50,
            studentDetails:[
                {roll:1,name:"Rayhan"},
                {roll:2,name:"tut-tut"}
            ]
        }
    ]
},
{
    school:'school2',
    schoolClass:[
        {
        class:"one",
        student:50,
        studentDetails:[
            {roll:1,name:"Rayhan"},
            {roll:2,name:"tut-tut"}
        ]
    }
]
}
];
console.log(schools[0].schoolClass[0].studentDetails[0].name);