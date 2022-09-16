import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useEffect} from "react";


import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const clientId = '641025495263-v4ecc711l27fimo1pue425s3k97qe3o7.apps.googleusercontent.com';



function App() {
  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
          scope: ''
        });
     };
     gapi.load('client:auth2', initClient);
 });
 

  const onSuccess = (res) => {
    console.log('success:', res);
};
const onFailure = (err) => {
    console.log('failed:', err);
};
return (
   <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
  />
);
  
return (
    
 <div className="App">
   <h1>Hello World!</h1>

     </div>

//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
 );
  
 
 
 
 }

export default App;
