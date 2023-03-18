import React from "react";

const day=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"]
const date = new Date();
let today= day[date.getDay()];

function Header(props) {
    return(<div>
    <div className="mainHeading">
        <h1>ToDo List</h1> 
        </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {today} 🌝 ☕ </h2>
      </div>
      </div>
    )}
  
export default Header;