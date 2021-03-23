let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function readArray(arr) {
    // for (const key in object) {
    //     if (Object.hasOwnProperty.call(object, key)) {
    //         const element = object[key];
            
    //     }
    // }

    for (let i = 0; i < arr.length; i++) {
        for (const key in arr[i]) {
            if (arr[i].hasOwnProperty.call(arr[i], key)) {
                console.log(key + " " + arr[i][key]);
            }
        }
    }
    // for (let i = 0; i < arr.length; i++) {
    //     if (typeof arr[i] === 'object') {
    //         for(const [key, value] of Object.entries(arr[i])) {
    //             console.log(`${key} : ${value}`)
    //         }
    //     }
    // }
}
// readArray(students);

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function PrintEmptAndManagersA(users){
    for(user in users){
        console.log(user.toUpperCase());
        for(let i =0; i < users[user].length; i++){
            console.log("\t" + users[user][i]['first_name'] +", "+ users[user][i]['last_name']);
        }

    }
    // console.log(users);

}

PrintEmptAndManagersA(users);