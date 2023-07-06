import React from "react";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Link, useNavigate } from "react-router-dom";
import { db } from "../Firebase";

export const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'posts'));
            const postData = querySnapshot.docs.map((doc) => doc.data());
            setPosts(postData);
          } catch (error) {
            console.error('Error retrieving posts: ', error);
          }
        };
        
        fetchPosts();
      }, []);

    const handleSubmit = (e) => {
      e.preventDefault();

    //   const storedEmail = localStorage.getItem("email");
    //   const storedPassword = localStorage.getItem("password");
  
      
    //   if (email === posts.email && password === posts.password) {
        
    //     alert("Authentication successful! you are directing to Dashboard");
    //     navigate("/dashboard");
        
    //   } 
      
      if (email === "" || password === ""){
        alert("Please fill-up given fields");
      }

      const matchingUser = posts.find((user) => user.email === email && user.password === password);

      if (matchingUser) {
        // Authentication successful
        alert("Authentication successful! You are being directed to the Dashboard.");
        navigate("/dashboard");
      } else {
        // Authentication failed
        alert("Authentication failed. Please check your email and password.");
      }
      
    //   if(email !== posts.email && password !== posts.password) {
       
    //     alert("Authentication failed. Please check your email and password.");
        
    //   }
    };

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
                                <form className="signin-form" onSubmit={handleSubmit}>
                                
                                    
                                    <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                   
                                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    <button className="btn btn-dark signin-button" type="submit">Sign In</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="signup-image-box">
                                <Link to="/signup"><button className="btn btn-danger signup-toggle">Sign Up</button></Link>
                                <img src="images/signup.png" alt="signup"/>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
};