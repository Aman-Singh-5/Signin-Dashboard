import React from "react"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../Firebase";

export const Signup = () => {
        const [Name, setName] = useState("");
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();

        const handleSubmit = (e) =>{
            e.preventDefault();



            document.getElementById("nameError").textContent = "";
            document.getElementById("emailError").textContent = "";
            document.getElementById("passwordError").textContent = "";
            document.getElementById("confirmPasswordError").textContent = "";

            var Name = document.getElementById("Name").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;
            
            var isValid = true;
       

                if (Name.length < 4) {
                document.getElementById("nameError").textContent =
                  "Name must be at least 4 characters";
                isValid = false;
              }
    
      if (!/^[a-zA-Z]+$/.test(Name)) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters and Name must contain only alphabets";
        isValid = false;
      }

      if (!isValidEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email address";
        isValid = false;
      }

      if (!isValidPassword(password)) {
        document.getElementById("passwordError").textContent = "Password must contain one digit, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.";
        isValid = false;
      }
      if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
        isValid = false;
      }
      if (isValid) {
        const docData = {
            Name: Name,
            email: email,
            password: password,
            createdAt: new Date(),
          };
        
          addDoc(collection(db, 'posts'), docData)
            .then(() => {
              alert('Signup is successful. You are being directed to the Login Page');
              navigate('/signin');
            })
            .catch((error) => {
              console.error('Error adding document: ', error);
            });
        
        // localStorage.setItem("Name", Name);
        // localStorage.setItem("email", email);
        // localStorage.setItem("password", password);
        // alert("Signup is Sucessfull, now you are being directed to Login Page");
        // navigate("/signin");

      }
      return isValid;


    }

        function isValidEmail(email) {
            var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            return emailRegex.test(email);
          }
      
          function isValidPassword(password){
              var passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
              return passwordRegex.test(password);
          }

    return(
        <>
            <section className="signup-section">
                <div className="container">
                    <div className="row">
                        <div className="signup-box d-flex">
                        <div className="col-md-6">
                            <h6 className="signup-heading">Untitled UI</h6>
                            <div className="signup-content">
                                <h3>Create new account</h3>
                                <p>lets get started with your 30 day free trial</p>
                                <form onSubmit={handleSubmit}>
                                   
                                    <input type="text" id="Name" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Name"/><span class="error" id="nameError" ></span>
                                    
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/><span class="error" id="emailError" ></span>
                                    
                                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/><span class="error" id="passwordError" ></span>
                                    <input type="password" id="confirmPassword" placeholder="Confirm-Password"/><span class="error" id="confirmPasswordError" ></span>
                                    <button className="btn btn-danger sign-button" type="submit">Sign Up</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="signup-image-box">
                                <Link to="/signin"><button className="btn btn-dark" >Log In</button></Link>
                                <img src="images/signup.png" alt="signin"/>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
};