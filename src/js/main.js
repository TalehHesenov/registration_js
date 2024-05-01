let name = document.getElementById("name");
let lastname = document.getElementById("lastname");
let age = document.getElementById("age");
let email = document.getElementById("email");
let email2 = document.getElementById("email2");
let password = document.getElementById("password");

let btn = document.getElementById('btn');
let main = document.getElementById('main');
let container = document.getElementById('container');
let yazdir = "";

btn.addEventListener('click',()=>{
    document.getElementById("nameLabel").style.display = "none";
    document.getElementById("lastnameLabel").style.display = "none";
    document.getElementById("ageLabel").style.display = "none";
    document.getElementById("emailLabel").style.display = "none";
    document.getElementById("email2Label").style.display = "none";
    document.getElementById("passwordsLabel").style.display = "none";
    

     

    
      
    if(!(name.value =="" || lastname.value =="" || age.value =="" || email.value =="" || email2.value =="" || password.value =="")){

      if(!(email.value == email2.value)){

        alert("Tekrar email dogru deyil");

    }
    else if(age.value <18 || age.value>120){

        alert("Yas dogru yazmadiniz 18 den boyuk 120 den kicik yas olmalidir");

    }
    
    else{

        password.value.split("").map((el)=>{
        
            yazdir+="*"
     
          });
        
        document.getElementById("nameYaz").innerHTML = name.value;
        document.getElementById("lastnameYaz").innerHTML = lastname.value;
        document.getElementById("AgeYaz").innerHTML = age.value;
        document.getElementById("emailYaz").innerHTML = email.value;
        document.getElementById("passwordYaz").innerHTML = yazdir;
        main.style.display = "block";
        container.style.display = "none";
        
        

    }

    }
     else if(name.value =="" && lastname.value =="" && age.value =="" && email.value =="" && email2.value =="" && password.value ==""){
        document.getElementById("nameLabel").style.display = "block";
        document.getElementById("lastnameLabel").style.display = "block";
        document.getElementById("ageLabel").style.display = "block";
        document.getElementById("emailLabel").style.display = "block";
        document.getElementById("email2Label").style.display = "block";
        document.getElementById("passwordsLabel").style.display = "block";
    }
    else if(name.value ==""){
        document.getElementById("nameLabel").style.display = "block";
        
    }
    else if(lastname.value ==""){
        document.getElementById("lastnameLabel").style.display = "block";
        
    }
    else if(age.value ==""){
       
        document.getElementById("ageLabel").style.display = "block";
       
    }
    else if(email.value ==""){
       
        document.getElementById("emailLabel").style.display = "block";
      
    }
    else if(email2.value ==""){
       
        document.getElementById("email2Label").style.display = "block";
      
    }
    else if(password.value ==""){
       
        document.getElementById("passwordsLabel").style.display = "block";
    }
   
    
})