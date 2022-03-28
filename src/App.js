import React from "react";
import Address from "./Components/Profile/Address";
import FullNam from "./Components/Profile/FullNam";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";

 class App extends React.Component{
   render(){
     return(
       <div>
         <Address/>
         <FullNam/>
         <ProfilePhoto/>
       </div>
       
     )
   }
 }

  