// First type of DS


class Employees1{
    Name:string;
    company_name:string;
    Designation:string;
    Salary:number;
    Location:string;
constructor(name:string, company:string, designation:string, salary:number, location:string){
    if(this.validatename(name)==false)
    {   
        console.log("Name length should be between 5 to 20")
    }
    if(this.validatedesignation(designation)==false){
        console.log("Entered designation is wrong")
    }
    if(this.validatesalary(salary)==false){

        console.log("Entered salary must be greater than 250000")
    }
    if(this.validatelocation(location)==false){
        console.log("Entered location is wrong it must be Banglore") 
    }
    this.Name = name;
    this.company_name = company;
    this.Designation = designation;
    this.Salary = salary;
    this.Location = location;

}
validatename(name:string):boolean{
if( (name.length)  >5 && (name.length)<20){
return true;
}
else {
    return false;
}
}
validatedesignation(designation:string):boolean{
    if(designation=="Programmer"){
        return true;
    }
    else{
        return false;
    }
}
validatesalary(salary:number):boolean{
if(salary>=250000){
return true
}
else{
    return false;
}
}
validatelocation(location:string):boolean{
if(location=="Banglore"){
return true;
}
else{
return false;
}
}
}
var obje = new Employees1("Venkate", "JVT", "rogrammer", 50000, "jaipur")

//Second type of DS

class emp{
    info:any[]=[];
    constructor(name:string, company:string, designation:string, salary:number, location:string, empId: number){
        if(this.validatename(name)==false)
        {   
            console.log("Name length should be between 5 to 20")
        }
        if(this.validatedesignation(designation)==false){
            console.log("Entered designation is wrong")
        }
        if(this.validatesalary(salary)==false){
    
            console.log("Entered salary must be greater than 250000")
        }
        if(this.validatelocation(location)==false){
            console.log("Entered location is wrong it must be Banglore") 
        }
        this.info.push(name);
        this.info.push(company);
        this.info.push(designation);
        this.info.push(salary);
        this.info.push(location);
        this.info.push(empId);
    }
    push( ... arg :any ){
        this.info.push(arg);
     }
    pop(  ){
        this.info.pop()
    }
    validatename(name:string):boolean{
        if( (name.length)  >5 && (name.length)<20){
        return true;
        }
        else {
            return false;
        }
        }
        validatedesignation(designation:string):boolean{
            if(designation=="Programmer"){
                return true;
            }
            else{
                return false;
            }
        }
        validatesalary(salary:number):boolean{
        if(salary>=250000){
        return true
        }
        else{
            return false;
        }
        }
        validatelocation(location:string):boolean{
        if(location=="Banglore"){
        return true;
        }
        else{
        return false;
        }
        }
    
}
let P = new emp ( "Venkatesh", "JVT", "Programmer", 5.5 , "Banglore",2001 )
P.push( [ "jvt1" , "somya","himanshu" ] , [ "c","Cpp","java"] )
console.log(P)
console.log(P.info[6][1])
P.pop( )

// third type of DS

var html = {
    name : "sandesh",
    company : "intimetec",
    designation : "project manager",
    salary : "10 lakhs",
    location : "USA",
    display : function(obj:{firstname:string,lastname:string}){}
}
html.display = function(obj:{firstname:string,lastname:string}){
        
    if(obj.firstname=="JVT")
    {
    console.log(html.name,obj);       
    }
    else{
        console.log("Please enter the correct name")
    }
    }
 html.display({firstname:"JVT",lastname:"company"})




