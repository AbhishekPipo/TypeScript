// //@type annotations on variables

// var msg:string="abhi";
// console.log(msg);



// //@no type annotation needed automatically it coonsidered as string
// var myname="abhi";


// /** @functions 
//  */


// function greet(name: string){
//     console.log("hello"+name.toUpperCase()+"!");
// }

// function getFavNum(): number {
//     return 26;
//   }


/*
@anonymous functions 
*/
// const names=["abhi","koushik","ram"]


// names.forEach((s)=>{
//     console.log(s.toUpperCase());
// })

/*
@object types 
*/


// function printCoord(pt: {x: number; y: number}){
//     console.log("the coordinate's x value is "+ pt.x);
//     console.log("the coordinate's y value is "+ pt.y);

// }

// printCoord({x: 3,y:7});



/* @optional properties
*/

// function printname(obj: {firstname: string; lastname?: string}){
// //    if(obj.lastname !=undefined){ console.log(obj.lastname);}
// console.log(obj.lastname?.toLowerCase());
   
// }

// printname({firstname: "abhi"});



/*@union types
*/

// function printId(id: number | string){

//     if(typeof id === "string"){ 
//     console.log("your id is:"+id.toUpperCase());
// }
// console.log(id);

// }

// printId("r2014")


// function welcomePeople(x: string[] | string) {
//     if (Array.isArray(x)) {
//       // Here: 'x' is 'string[]'
//       console.log("Hello, " + x.join(" and "));
//     } else {
//       // Here: 'x' is 'string'
//       console.log("Welcome lone traveler " + x);
//     }
//   }

//   welcomePeople(["abhi","shek","koushik"])


/*@type alias
*/

// type Point={
//     x:number,
//     y:number
// };

// function printCoord(pt: Point){

//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
   
//   printCoord({ x: 100, y: 100 });


/*
@interfaces
*/

// interface Point {
//     x: number;
//     y: number;
//   }
   
//   function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
   
//   printCoord({ x: 100, y: 100 });
// Interface	Type
// Extending an interface

// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;
        
// Extending a type via intersections

// type Animal = {
//   name: string;
// }

// type Bear = Animal & { 
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;

//@widing.................
// const on="on";
// const off="off";
// const states: ["on","off"]=[on,off]
// const currentstate=states[0];

// states.push("idle")

// @ myArrays


//@type alias 
//@readonly and optional

// type User={
//     readonly _id: string;
//     name: string;
//     email: string;
//     isActive: boolean;
//     credCardDetailes?: number
// }


// function createUser(user: User): User{
// return {name: "",email: "",isActive: true}
// }
// createUser({name: "abhi", email:"bhi@gmail.com", isActive: true})

// let myuser: User={
//     _id: "1234",
//     name: "abhi",
//     email: "abhishek",
//     isActive: true,


// }

// myuser.email="abhi@gmail.com";
// // myuser._id="1267"
// type cardNumber={
//     cardnumber: number;


// }

// type cardDate={
//     carddate: string;
// }

// type cardetailes=cardNumber & cardDate &{
//     cvv: number;
// }
// console.log(myuser);

// const superHero:string[]=[]
// const heroPower
// superHero.push("spiderman")

/////////////arrow functions in ts
// let sum=(a:number, b:number): number=>{
//     return a+b;
// }
/////////////////arrow functions in class 
// class Employee {
//     empCode: number;
//     empName: string;

//     constructor(code: number, name: string) {
//         this.empName = name;
//         this.empCode = code;
//     }

//     display = () => console.log(this.empCode +' ' + this.empName)
// }
// let emp = new Employee(1, 'Ram');
// emp.display();

//@interface

// interface User{
//     readonly dbid: number;
//     email: string;
//     userId: number;
//     googleid?: string;
//     // startTrail: ()=> string
//     starTrail(): string;
//     getCoupon(couponname: string): number
// }

// interface User{
//     githubtoken: string;
// }

// interface Admin extends User{
  
//     role: "admin" | "ta" | "tl"
// }


// const abhi: Admin={
//     role: "ta",
//     dbid:22,
//     email: "abhi@gmail.com",
//     userId: 1212,
// starTrail:()=> {
//     return "abhi"
// },
// getCoupon:(name: "hitesh10") =>{
//     return 10;
// },
// githubtoken: "githubpax"
// }
// // abhi.email="pax@pop";
// // console.log(abhi.email);

// //type vs intereface between 



//@class
// class Employee {
//     empCode: number;
//     empName: string;

//     constructor(code: number, name: string) {
//             this.empName = name;
//             this.empCode = code;
//     }

//     getSalary() : number {
//         return 10000;
//     }
// }
// let e1=new Employee(1,"abhi")
// console.log(e1);



//@abstract class


// abstract class Person {
//     name: string;
    
//     constructor(name: string) {
//         this.name = name;
//     }

//     display(): void{
//         console.log(this.name);
//     }

//     abstract find(string): Person;
// }

// class Employee extends Person { 
//     empCode: number;
    
//     constructor(name: string, code: number) { 
//         super(name); // must call super()
//         this.empCode = code;
//     }

//     find(name:string): Person { 
//         // execute AJAX request to find an employee from a db
//         return new Employee(name, 1);
//     }
// }

// let emp: Person = new Employee("James", 100);
// emp.display(); //James

// let emp2: Person = emp.find('Steve');


//@data modifiers

//@public
// class Employee {
//     public empCode: string;
//     empName: string;
// }

// let emp = new Employee();
// emp.empCode = "123";
// emp.empName = "Swati";


// //@private

// class Employee {
//     private empCode: number;
//     empName: string;
// }

// let emp = new Employee();
// emp.empCode = 123; // Compiler Error
// emp.empName = "Swati";//OK


//@protected



// class Employee {
//     public empName: string;
//     protected empCode: number;

//     constructor(name: string, code: number){
//         this.empName = name;
//         this.empCode = code;
//     }
// }

// class SalesEmployee extends Employee{
//     private department: string;
    
//     constructor(name: string, code: number, department: string) {
//         super(name, code);
//         this.department = department;
//     }
// }

// let emp = new SalesEmployee("John Smith", 123, "Sales");
// emp.empCode; //Compiler Error


// //@readonly
// class Employee {
//     readonly empCode: number;
//     empName: string;
    
//     constructor(code: number, name: string)     {
//         this.empCode = code;
//         this.empName = name;
//     }
// }
// let emp = new Employee(10, "John");
// emp.empCode = 20; //Compiler Error
// emp.empName = 'Bill';



export {}