// import React, { useState } from 'react'

// function listOfUser() {
//     const [userName, setUserName] = useState([]);
//     const [userPic, setUserPic] = useState([]);
//     const fetchData = () =>{
//         const userAPI = 'https://jsonplaceholder.typicode.com/users'
//         const userPicAPI = 'unsplash.photos.getPhoto("pFqrYbhIAXs");'
//         const getUserInfo = axios.get(userAPI)
//         const getUserPic = axios.get(userPicAPI)
//         axios.all([getUserInfo, getUserPic]).then(axios.spread((...allData)=>{
//           const allDataInfo = allData[0].data.name;
//           const allDataPic = allData[1].config.url;
      
//          setUserName(allDataInfo);
//          setUserPic(allDataPic);
//         })
//         )
//       }
//       useEffect(() => {
//           fetchData()
//         }, [])
//     return (
//         <div>
//             user{userName} , 
//             <img src={userPic}/>
//         </div>
//     )
// }

// export default listOfUser
