import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
 
  const [users, setUsers] = useState(null);
  const fetchData = async () => {
    const userAPI = "https://jsonplaceholder.typicode.com/users";
    
    const users = await axios.get(userAPI);
    // console.log(users.data);
    var t = users.data.map((el) => {
      var nbr = Math.floor(Math.random() * Math.floor(100));
      return {
        ...el,
        image: `https://randomuser.me/api/portraits/men/${nbr}.jpg`,
      };
    });
    setUsers(t)
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>
    <h1>List of Creepy Users</h1>
{ users && users.map(el => <div><h1>{el.id}</h1><img src={el.image}/></div>)}
    </div>;
}
export default App;