import React from 'react'
import './navbar.css'

function Navbar() {
  const user = JSON.parse(localStorage.getItem('currentUser'))
  function logout(){
    localStorage.removeItem('currentUser')
    window.location.href='/login'
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">

          <h1 class="navbar-brand h-font">HOSTLY</h1>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav  ">
              <li class="nav-item"> 
                  <a class="nav-link active " href="/">Home</a>
                          
              </li>
              <li class="nav-item">
                    <a class="nav-link active " href="/aboutus">About Us</a>
                          
              </li>
              {user ? (
                <>
                <div class="dropdown mr-5">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" 
                  aria-expanded="false">
                  {/* <h1 style={{color:'white'}}>{user.name}</h1> */}
                  <i className='fa fa-user mmr'style={{color:'white'}} ></i>{user.name}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="/profile">Profile</a></li>
                    <li><a class="dropdown-item" href="#" onClick={logout}>Logout</a></li>
                   
                  </ul>
                </div>
               
                </>) : (<>
                <li class="nav-item">
                  <a class="nav-link" href="/register">Register</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/login">Login</a>
                </li>
              </>)}

            </ul>
          </div>
        </div>
      </nav>
    
    </div>
  )
}

export default Navbar
