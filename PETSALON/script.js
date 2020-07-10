//console.log("Executed");

// object literal for the pet salon (one)
//name,phone, address(street,number)
const salon={
    name:"Fashion Pet",
    phone:61912312312,
    address:{
        street:"st. E",
        number: "321"
        },
        counter:function() {
            alert("A pet was registered! ");
        },
        pets:[]
}

//object destructuring
let {name,phone,address:{street,number},counter,pets}=salon;
document.getElementById("footer-info").innerHTML=`
<p class="text-center"> ${name} <br> ${phone} <br> ${street},${number} </p>
`;
console.log(pets);

//object constructor for the pets (multiple)
//name, age, breed, gender, service,ownerName,contactPhone

class Pet{
    constructor(name,age,breed,gender,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.breed=breed;
    this.gender=gender;
    this.service=service;
    this.ownerName=ownerName;
    this.contactPhone=contactPhone;
    }   
}

//create two pets
const Maky = new Pet("Maky",3,"dane","Full service","Dyllan","555-444-322")

const silvestre = new Pet("silvestre",3,"dane","f","Full service","Dyllan","619 239-42-76")

const zorro = new Pet("Zorro",2,"dane","f","Full service","Nalani","619 789-43-76")

register(Maky);
register(silvestre);
register(zorro);


//register function
function register(aPet){
    //push the pets to the array
    pets.push(aPet);

    //call the counter function
    counter();

    //display on the console the pets array

    console.log(aPet);
    
}

function status() {
    alert("Register pets: " + pets.length);
    console.log("Register pets: " + pets.length);
    
    //console.log(pets[0].name);

    //travel the array to the display pets´ name

    for (var i=0; i<pets.length; i++) {
        console.log(pets[i].name);        
    }
}

status();