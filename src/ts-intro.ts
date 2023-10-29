// let x: number | string | boolean
// x = 1
// x = '1'
//  console.log(x);

// interface User {            // Тип для объкта : какие  поля могут быть в объете с каким типом поля
//     name: string
//     age: number
//     email?: string         // не обязательное поле в объкте
// }
// const user: User = {       // объест user является типом User
//     name: 'Igor',
//     age: 33,
// }

// user.email = 'email'

// console.log(user);

// function sum(x: number, y: string) {
//     return x + y
// }

// sum(1, '2') // 12
// typeof null // Object
// typeof null === typeof {} // true
// console.log(sum)

// function generateUser() {
//   return {
//     name: 'Test',
//     age: 20,
//     email: 'test@email',
//   }
// }
//
// type User = ReturnType<typeof generateUser>
//
// const userA = generateUser()
//
// const userB: User = {
//   name: 'Test',
//   age: 20,
//   email: 'test@email',
// }
//
// console.log(userA, userB)

// interface User {
//   name: string
//   age: number
//   email?: string
// }

// interface Admin extends User {
//   // забралм все поля user  и добавили свое getRole()
//   getRole(): string
// }

// const admin: Admin = {
//   name: 'Name',
//   age: 20,
//   getRole() {
//     return 'Admin'
//   },
// }

// type Student = Pick<User, 'name' | 'email'> & { level: number } // взяли пол от User name и email. Age не взяли. Добавили свое поле level: number
// //type Student = Omit<User, 'age'> // значит вычеркнуть age для Student
// const student: Student = {
//   name: 'Vania',
//   level: 2,
//   //age: 23,
// }
