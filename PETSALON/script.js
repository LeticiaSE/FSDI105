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

var petId=0;
class Pet{
    constructor(name,age,breed,gender,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.breed=breed;
    this.gender=gender;
    this.service=service;
    this.ownerName=ownerName;
    this.contactPhone=contactPhone;
    this.id=petId;
    petId+=1;
    }   
}

//create two pets
const Maky = new Pet("Maky",3,"dane","Full service","Dyllan","555-444-322")

const silvestre = new Pet("silvestre",3,"dane","f","Full service","Dyllan","619 239-42-76")

const zorro = new Pet("Zorro",2,"dane","f","Full service","Nalani","619 789-43-76")

pets.push(Maky);
pets.push(silvestre);
pets.push(zorro);

//getting the values form the HTML inputs
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtBreed=document.getElementById('petBreed');
var txtGender=document.getElementById('petGender');
var txtService=document.getElementById('petService');
var txtOwnerName=document.getElementById('ownerName');
var txtPhone=document.getElementById('contactPhone');

//register function
function register(){
    const thePet = new Pet(txtName.value,txtAge.value,txtBreed.value,txtGender.value,txtService.value,txtOwnerName.value,txtPhone.value);
    console.log(thePet);

    //push the pets to the array
    pets.push(pets);
    //*call the counter function
    //counter();
    clear();
    //display on the console the pets array
    //console.log(aPet);
    //display 
   // displayList(thePet); 
    displayTable(thePet);   
}

function clear() {
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtOwnerName.value="";
    txtPhone.value="";
}


function status() {
    //alert("Register pets: " + pets.length);
    console.log("Register pets: " + pets.length);
    
    //console.log(pets[0].name);

    //travel the array to the display pets´ name

    for (var i=0; i<pets.length; i++) {
        console.log(pets[i].name);        
    }
}

//status();


function displayList(aPet) {
    //select the HMTL element petList
    var list = document.getElementById('petList');

    //create the li code for the pet
    var li=`
    <li id="${aPet.name}"> ${aPet.age} ${aPet.breed} ${aPet.gender}${aPet.service} ${aPet.ownerName} ${aPet.contactPhone} <button onclick="deletePet(${aPet.id});"> Delete </button> </li>
    `;

    //Insert li in the HTML
    list.innerHTML+=li;
}

displayTable(Maky);//display the pet in a li  **change**
displayTable(silvestre);
displayTable(zorro);


function displayTable(aPet) {
    //**register.html create a <table id=""> </table> without row*/

    //select the table $ or JS (getElementById)
    var table = document.getElementById('petTable');
    
    //create a <tr> <td>name</td> <td> age</td> </tr>
    var showTable=`
    <tr id="${aPet.id}"><td>${aPet.name}</td> <td>${aPet.age}</td> <td>${aPet.breed}</td> <td>${aPet.gender}</td><td>${aPet.service}</td> <td>${aPet.ownerName}</td> <td>${aPet.contactPhone}</td>  <td> <button onclick="deletePet(${aPet.id});"> Delete </button> </td> </tr>
    `;

    //insert the tr in table
    table.innerHTML+=showTable;
}

function deletePet(petId) {
    console.log("delete pet" + petId);
    //add id to the tr/li and add a delete button
    var indexDelete;
    var tr=document.getElementById(petId);

    //search the pet (travel array to find the pet)
    for (var i = 0; i < pets.length; i++) {
        var selectedId=pets[i].id;
        if (selectedId===petId) {
            indexDelete=i;
        }
    }

    //delete from the array splice()
    pets.splice(indexDelete,1);

    //delete from the html remove()
    tr.remove();
}


function search(aPet) {
    //get the info form the input and save it in a var .value
    var txtSearch=document.getElementById('searchPetName').value;

    console.log(txtSearch);

    for (var i = 0; i < pets.length; i++) {
        var foundPet=pets[i].id;
        if (foundPet.name.toLowerCase()==txtSearch.toLowerCase()) {
            //do something to hih
            
        }else{
           console.log("It´s not found");
        }
    }
}