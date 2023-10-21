import React, { useState } from "react";
function Hook3() {
  const [name, setName] = useState({fname:'', lname:''});
  return (  
    <div>
        <h2>Hook3 useState with object</h2>
        <form action="">
          <div className="flex">
          <input type="text" value={name.fname} 
            onChange={e=>setName({...name, fname:e.target.value})} />
          <input type="text" value={name.lname} 
            onChange={e=>setName({...name, lname:e.target.value})}/>
          </div>
          
          <p>Hello!!! {name.fname + ' ' + name. lname}</p>
          <pre>
            {JSON.stringify(name)}
          </pre>
        </form>

    </div>
  );
}

export default Hook3;