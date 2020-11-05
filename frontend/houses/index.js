class User {
    constructor(username, houses_own, houses_sold) {
        this.username = username;
        this.houses_own = houses_own;
        this.houses_sold = houses_sold
    }
};

class House {
    constructor(price, description, size, style, neighborhood) {
        this.price = price;
        this.description = description;
        this.size = size;
        this.style = style;
        this.neighborhood = neighborhood
    }
};

const HOUSES_URL = "http://localhost:3000/houses"
const USER_NEW_URL = "http://localhost:3000/users"
const SESSIONS_NEW_URL = "http://localhost:3000/sessions"
document.addEventListener("DOMContentLoaded", function() { 
    
    const signupSubmit = document.querySelector("#signupForm")
    const signinSubmit = document.querySelector("#signinForm")
    const uploadForm = document.querySelector("#uploadForm")
    uploadForm.addEventListener("submit", function(e){
        
        e.preventDefault();
        console.log("it worked!!")
        const price = document.querySelector("#price").value;
        const description = document.querySelector("#description").value;
        const size = document.querySelector("#size").value;
        const style = document.querySelector("#style").value;
        const neighborhood = document.querySelector("#neighborhood").value;
        const pics = document.querySelector("#files").all;
        
        console.log(pics);
        let current_house = new House(price,description,size,style,neighborhood);
        
        
        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              'username': `${login_username}`,
              'password': `${login_password}`,
              'price': `${price}`,
              'description': `${description}`,
              'size': `${size}`,
              'style': `${style}`,
              'neighborhood': `${neighborhood}`,
              'pictures': `${pics}`

            })
          };
    
          fetch(HOUSES_URL, configObj)
          .then(function(response) {
            return response.json();
          })
          .then(function(json){

          })

        

        
    
    });

    signinForm.addEventListener("submit", function(e){
      e.preventDefault();
      let login_username = document.querySelector("#login_username").value;
      let login_password = document.querySelector("#login_password").value; 
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          'username': `${login_username}`,
          'password': `${login_password}`,
          

        })
      };

      fetch(SESSIONS_NEW_URL, configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(json){

      })
    });

    signupForm.addEventListener("submit", function(e){
      e.preventDefault();
      const signup_username = document.querySelector("#signup_username").value;
      const signup_password = document.querySelector("#signup_password").value;
      const email = document.querySelector("#email").value;
      const country = document.querySelector("#country").value;
      const state = document.querySelector("#state").value;
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          'username': `${signup_username}`,
          'password': `${signup_password}`,
          'email': `${email}`,
          'country': `${country}`,
          'state': `${state}`,
        })
      };

      fetch(USER_NEW_URL, configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(json){
      
        if (json === "good") {
          alert("You've been Logged in!")
        }
        
      })
    })

})


