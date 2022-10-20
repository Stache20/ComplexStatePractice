import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  
  function changeInfo(event){
    
    console.log(event.target)
  const {value, name} = event.target;
  
    setContact(prevValue => {
     ...prevValue,
     
     [name] : value
     
      };
      }
      
    )
    
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" value={contact.fname} placeholder="First Name" onChange={changeInfo} />
        <input name="lName" value={contact.lname} placeholder="Last Name" onChange={changeInfo} />
        <input name="email" value={contact.email} placeholder="Email" onChange={changeInfo}  />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
