// Below functions and class are of corporate
function corporate(companyname:string,designation:string,salary:number,location:string){
console.log(companyname," ",designation," ",salary," ",location);
if (salary>=50000){                                             //Tax Validation
     return "Income tax will be deducted "
}
else{
    return "No tax will be deducted"
}
}
let Tax:string=corporate(" JVT ","Programmer ",50000,"Bangalore ")
console.log(Tax);
function corporatedetails(name:string,education:string,dob:string,address:string,resno:number,mobno:number,email:string,exp:string,skills:string){
    console.log(name); 
    console.log(education);
    console.log(dob);
    console.log(address);
    console.log(resno);
    console.log(mobno);
    console.log(email);
    console.log(exp);
    console.log(skills);
}
corporatedetails(" Jai Venkateswara Technologies ","B TECH MCA MBA BSC MSC","2/6/1988","233/3 Ground floor new thippasandra ",8925555566,9858545252,"venkatesh.db@gmail.com","1 years "," C CPP all Lang  & 1 years ")

let names:string[]=new Array("Ramesh","Suresh","Shyam","Gopal","Ganshyam");

function corporateemployees(arr_names:string[]){

    for(var i = 0;i<arr_names.length;i++) { 
        console.log(names[i]) 
     }  

}
corporateemployees(names)

let corporates:any={

name:" Jai Venkateswara Technologies ",
education:" B TECH MCA MBA BSC MSC ",
dob:"2/6/1988 ",
addrress:"233/3 Ground floor new thippasandra",
reno:"08025216666 ",
mobno:9900367097 ,
email:" venkatesh.db@gmail.com ",
exp:"1 years ",
skills:"C,CPP all Lang  & 1 years ",
manager:"Venkatesh ",
pancardno:"asu675901f ",

showaddress:function(){

console.log(this.addrress)
}

};

corporates.pandetail=function():any{
console.log(this.pancardno);
}
corporates.pandetail();
corporates.showaddress();

class corporateinfo{
Name:string;
Education:string;
Dob:string;
Address:string;
Email:string;

constructor(name:string,education:string,dob:string,address:string,email:string){
this.Name=name;
this.Education=education;
this.Dob=dob;
this.Address=address;
this.Email=email;

}

display(){
console.log(this.Name);
console.log(this.Education);
console.log(this.Dob);
console.log(this.Address);
console.log(this.Email);
}

}
let show=new corporateinfo("Jai Venkateswara Technologies","B TECH MCA MBA BSC MSC"," 2/6/1988 ","233/3 Ground floor new thippasandra ","venkatesh.db@gmail.com ");
show.display();

function broadband(accno:number,userid:number,email:string,mobno:number,address:string,aadhar:number){
console.log(accno);
console.log(userid);
console.log(email);
console.log(mobno);
console.log(address);
console.log(aadhar);
if (email!=undefined){

    return "Valid Email"
}
else
{
return "Invalid Email "
}
}
let Emailveri=broadband(631411,2121,"ab@gmail.com",9856542542,"c colony",20123321212);
console.log(Emailveri);

function broadbanddatausage(totalmb:string,downldspeed:string,uploadspeed:string){


console.log(totalmb);
console.log(downldspeed);
console.log(uploadspeed);

}
let usage=broadbanddatausage("21.26 GB","30 mbps","32 mbps");

let broadbanddetails:any={

accno:1135497 ,
useid:11128550 ,
ip: " 10.245.97.123 ",
mbdownload:"25 gb",
uploadspeed:"26 mbps"

};

broadbanddetails.Usage=function():any{

console.log(this.mbdownload); 
}
broadbanddetails.Usage();
class broadbandinfo{
Accno:number;
Userid:number;
Usage:string;
constructor(accno:number,userid:number,usage:string){
this.Accno=accno;
this.Userid=userid;
this.Usage=usage;

}
showusage(){

console.log(this.Usage);
}

}

let usagedetails=new broadbandinfo(121212,222514251,"25 gb");
usagedetails.showusage();


// Inheritance Examples

class Javascript{
    private langversion :string;
        constructor(version:string){    //Base class comstructor
            console.log("Javascript Constructor");
            this.langversion=version;        
    }
    oopsprinciple(){
        console.log("javascript oopsprinciple");
    }
    }
    class Angular extends Javascript{
        private angversion :number;
        constructor(langv:string,angversion:number){
            console.log("angular constructor");
            super(langv);
            this.angversion=angversion;
        }
        oopsprinciple(){
            super.oopsprinciple();
            console.log("Angular oopsprinciple");
        }
    }
    const p1=new Angular("Ecam v5",8);
    p1.oopsprinciple();
    
    class watch{
    private types:string;
    private cases:string;
    
        constructor(types:string,cases:string){
            console.log("watch constructor");
            this.types=types;
            this.cases=cases;
        
        }
    
        display(){
    
    
            console.log(this.types,this.cases);
        }
    
    
    }
    class watchWarranty extends watch{
    private warranty:string;
    private occasion:string;
    private Price:string;
    //private types:string;
    //private cases:string;
        constructor(price:string,warranty:string,occasion:string,types:string,cases:string){
           
            console.log("Watch Warranty Constructor");
            super(types,cases);
            this.Price=price;
            this.warranty=warranty;
            this.occasion=occasion;
        }
    
        details(){
            super.display();
            console.log(this.warranty,this.occasion);
    
        }
    }
    const obj=new watchWarranty("Rs 344","1 Year warranty","Casual","ANalog","Fibre");
    obj.details();
    


