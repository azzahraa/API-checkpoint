// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function UserList() {
//     const [people, setData] = useState([]);
    
//      useEffect(() => {
//       axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//         setData( res.data);
//       });
//     }, []);
//     console.log(people);

//     // const user = useEffect(() => {
//     //     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//     //       setData( res.data);
//     //     });
//     //   }, []);
//     const pic = fetch("https://initials-avatar.p.rapidapi.com/?name=john%20doe&background=000000&color=ffffff&size=128&length=2&rounded=false&uppercase=false&font-size=0.5", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "initials-avatar.p.rapidapi.com",
// 		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });

//     return (
//       <ul>
//         {people.map((person) => (
//           <li key={person.id}>{person.name}</li>
//         ))}
//       </ul>
//     );
//   };
  

// export default UserList
