import React from 'react'
import AddBlog from '../AddBlog/AddBlog'
import Login from '../Login/Login'
import UseToken from '../UseToken/UseToken';


// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }
// function getToken() { 
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

export default function Blogs() {
 const {token, setToken} = UseToken();

  if(!token){
    return <Login setToken={setToken} />
  }
    return (
        <div>
            {/* <Sidebar /> */}
            <AddBlog />
        </div>
    )
}
