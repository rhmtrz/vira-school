
const myName = "Rahmat"
console.log(myName)
console.log(typeof(myName))

const myAge = 31
console.log("____AGE____")
console.log(myAge)
console.log(typeof(myAge))

console.log("____FullName____")

const myFullName = {
  name: myName, lastName: "Rezaei"
}
console.log(myFullName)

console.log(myFullName.name + " " + myFullName.lastName)

const myHoby = ["reading", "coding", "traveling", "music", "running"]

console.log("____My Hobby is____")

function showMyHobbies() {
  for(let h = 0; h < myHoby.length; h++) {
    setTimeout(() => {
      console.log(h, myHoby[h])

    },h * 2000)
  }
}


showMyHobbies()


// function printZeroToHandred() {
//   for(let i = 0; i < 100; i++) {
//     setTimeout(function() {
//       console.log("I + 1: ", i + 1)
//       console.log("I * I: ", i * i)
//     }, i * 1000)
//   }
// }
// printZeroToHandred()

