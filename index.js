// Instructions
// - Use this starting template, you'll find two objects with data for you to use => https://codesandbox.io/s/day-4-todo-lists-template-2phy2?from-embed=&file=/index.js
// - ⚠️ Do not code your solution in CodeSandbox ⚠️ Copy or recreate the javascript files in your project.
// - Create an alert that lists all users, with their ids, names and what city they're from
// - Prompt the user for a user id
// - Display an alert with the username and all the todos titles that belong to that user
// Tips
// - The user id creates an identifiable relationship with the todos
// - Sometimes it's good to map some values into a new data structure


let users = [
  { id: 1, name: "Nicolas Cage", city: "Long Beach" },
  { id: 2, name: "Charlize Theron", city: "Benoni" },
  { id: 3, name: "Will Smith", city: "Filadelfia" },
  { id: 4, name: "Dwayne Johnson", city: "Hayward" },
  { id: 5, name: "Scarlett Johansson", city: "Manhattan" },
];

let todos = [
  {
    userId: 1,
    id: 1,
    title: "Write some code",
  },
  {
    userId: 2,
    id: 1,
    title: "run",
  },
  {
    userId: 3,
    id: 1,
    title: "sleep",
  },
  {
    userId: 4,
    id: 1,
    title: "eat",
  },
  {
    userId: 5,
    id: 1,
    title: "study",
  },
];
let message =""
for (let user of users) {
  message = message + (`User Id ${(user.id)} this is ${user.name} and He/She lives in ${user.city} `);
}
alert(message)

let findId = Number(prompt("Enter the id"))
console.log(findId)

// let Message1 = []
// for(let id of todos){
//   if(findId === id.userId){
//     message += findId
    

//   }
// }

// alert(Message1)
 

  





// todos[0].userId = newId
// const element = users[0].name[i];
