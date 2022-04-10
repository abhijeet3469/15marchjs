// Objects:- are non-primitive data type. It is denoted by {....some sort of data.....}
// Structure of object:- 
// let user = {
//     key : value // --> key is known as label through which can identify property (identifier).
// }              // --> key and value together known as key value pair or property.
                 // --> key can be of type string only                   

// e.g.
// let user = {
//     name: 'Abhijeet',
//     isAdmin: true,
//     array: [1, 2, 3, 4],
//     obj: {
//         insideObj: 'This is inside'
//     }
// }
// console.log(user.name);
// console.log(user.obj.insideObj);
// console.log(user.array[2]);

// primitive:- which is inbuilt inside language like string, number, boolean value.
// non-primitive:- objects and array can have different type of data like it can have strings, numbers,
                // boolean values. it is made up of primitives types.
                // array:-
               // let arr = [1, 2, 3, 'hi', true] // non-primitive type

              //  objects:-
               // let user = {
                //     name: 'Abhijeet',
                //     isAdmin: true,
                //     array: [1, 2, 3, 4],
                //     obj: {
                //         insideObj: 'This is inside'
                //     }
                // }
                // console.log(user.name);
                // console.log(user.obj.insideObj);
                // console.log(user.array[2]);

// ----------------lets start------------------------------
// e.g.
// let user = {
//     'name': 'Abhijeet',
//     age: 25,
//     isAdmin: false
// }
// console.log(user.name);
// console.log(user['age']);

// e.g.
// let user = {} // object literal syntax
// user.name = 'Abhijeet'
// console.log(user['name']);

// or

// let user = {}
// user['name'] = 'Abhijeet'
// console.log(user['name']);

// e.g.
// let user = {}
// console.log(user); // empty object

// e.g.
// let user = new Object(); // object constructor syntax
// user.name = 'abhijeet';
// console.log(user);
// delete user.name; // delete the username
// console.log(user);

// e.g. what if i write to have multi word key
// let user = {
//         'name': 'Abhijeet',
//         age: 25,
//         isAdmin: false,
//         'like birds': true
//     }
//     console.log(user['like birds']);

// e.g.
// let fruit = 'apple';
// let obj = {
//     [fruit]: true // inside square bracket is a variable; over here key will be the value of variable which is 'apple'
// }
// console.log(obj);

// e.g.
// let num = [1, 2, 3, 4, 5]
// let obj = {
//     [num.toString()]: true
// }
// console.log(obj);

// e.g.
// let fruit = 'apple';
// let obj = {
//     [fruit + 'Computers']: true // computed properties
// }
// console.log(obj);

// e.g.
// console.log(obj.name); // undefined

// e.g. way of checking if the key name exist or not
// let user = {
//     'name': 'abhijeet',
//     age: 23
// }
// console.log("age" in user); // true

// looping in object:-
// for in loop-
// e.g.
// let user = {
//     'name': 'Abhijeet',
//     age: 25,
//     isAdmin: false
// }
// for(let key in user) {
//     console.log(key, user[key]);
// }

// e.g. sum the salaries-
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Peter: 130
// }
// let sum = 0;
// for(let key in salaries){
//     sum = sum + salaries[key]
// }
// console.log(sum);

// e.g. multiply only the numeric value with 2
// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My Menu'
// }
// for (let key in menu){
//     if (typeof menu[key] === 'number'){
//         menu[key] = menu[key] * 2
//     }
// }
// console.log(menu);

// object referecing and copying:-
// e.g.
// let msg = 'hello';
// let i = msg + 'world';
// console.log(msg);
// console.log(i);

// e.g.
// let user = {
//     name: 'rahul'
// }
// admin = user;
// console.log(user);
// console.log(admin);
// admin.name = 'pooja';
// console.log(user, 'user');
// console.log(admin, 'admin');

// e.g.
// let user = {
//     name: 'rahul'
// }
// admin = user;
// console.log(admin === user); // true

// e.g.
// let user = {}
// let admin = {}
// console.log(admin === user); // false

// e.g.
// let user = {name: 'Rahul'}
// let admin = {name: 'Aarti'} // both objects are in different location
// admin.name = 'Shruti'
// console.log(user);
// console.log(admin);
// console.log(admin === user);

// clone object in different object not in same
// e.g.
// let user = {
//     name: 'Abhijeet',
//     age: 23,
//     isAbhijeet: true
// }
// let duplicate = {}
// duplicate = user
// duplicate.isAbhijeet = false // here, in user isAbhijeet will get false also and i dont want to do it
// console.log(user);
// console.log(duplicate);

// e.g. we can do it by using for loop
// let user = {
//     name: 'Abhijeet',
//     age: 23,
//     isAbhijeet: true
// }
// let duplicate = {}
// for(let key in user){
//     duplicate[key] = user[key]
// }
// duplicate.isAbhijeet = false
// console.log(user);
// console.log(duplicate);

//  or

// let user = {
//         name: 'Abhijeet',
//         age: 23,
//         isAbhijeet: true
//     }
//     let duplicate = {}
//     Object.assign(duplicate, user); // --> duplicate is target and user is source
//     duplicate.isAbhijeet = false; // to show that duplicate is independent
//     console.log(user);
//     console.log(duplicate);

// or

// let user = {
//             name: 'Abhijeet',
//             age: 23,
//             isAbhijeet: true
//         };
//         let duplicate = {};
//         let clone = Object.assign({}, user); // --> duplicate is target and user is source
//         clone.isAbhijeet = false; // to show that duplicate is independent
//         console.log(user);
//         console.log(clone);

// Spread operator (...):- Essentially just spreads out the elements of an array or an oject.

// let user = {
//     name: 'Abhijeet',
//     age: 23
// };
// let clone = {...user};
// clone.age = 25;
// clone.lastname = 'Kumar'
// console.log(user);
// console.log(clone);

// or

// let user = {
//     name: 'Abhijeet',
//     age: 23
// };
// let clone = {...user, age: 25, lastname: 'Kumar'};
// console.log(user);
// console.log(clone); 

// Spread operator can be used in case of array

// let arr1 =[0, 1, 2, 3, 4, 5];
// let arr2 = [...arr1, 6, 7, 8, 9, 10];
// let arr3 = [...arr1, ...arr2]
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// Try to do in objects-
// let obj1 = {name: 'Abhijeet', x: 42};
// let obj2 = {name: 'Amit', y: 13};
// let obj3 = {...obj1, ...obj2};
// console.log(obj1);
// console.log(obj2);
// console.log(obj3); // in object key will not repeat. newest value will replace the key