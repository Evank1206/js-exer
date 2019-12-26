const students = [
    {
        name:"Tom",
        age:34,
        gender: "male",
        phone: 415_0000000,
        examScore: 50,
        qualify: false

    },
    {
        name:"Evank",
        age:26,
        gender: "male",
        phone: 415_2222222,
        examScore: 90,
        qualify: true

    },
    {
        name:"Victoria",
        age:22,
        gender: "female",
        phone: 415_11111111,
        examScore: 100,
        qualify: true

    },
    {
        name:"Natasha",
        age:26,
        gender: "female",
        phone: 415_333333,
        examScore: 94,
        qualify: true

    },
    {
        name:"Maksim",
        age:21,
        gender: "male",
        phone: 415_444444,
        examScore: 30,
        qualify: false

    },
];

let input = document.getElementById("InID");
let txt1 = document.getElementById("Names");
let txt2 = document.getElementById("Ages");
let txt3 = document.getElementById("Gender");
let txt4 = document.getElementById("Phone");
let txt5 = document.getElementById("ExamScores");
let txt6 = document.getElementById("Quality");

// console.log(input);


function getFunction(){
    for(i = 0; i < students.length; i++){   
            // console.log(students[i].name);
            if(input.value == students[i].name){
                // console.log(students[i].name);
                txt1.innerText = txt1.innerText + " " + students[i].name;
                txt2.innerText = txt2.innerText + " " + students[i].age;
                txt3.innerText = txt3.innerText + " " + students[i].gender;
                txt4.innerText = txt4.innerText + " " + students[i].phone;
                txt5.innerText = txt5.innerText + " " + students[i].examScore;
                txt6.innerText = txt5.innerText + " " + students[i].qualify;
            }
    }
}
// getFunction();