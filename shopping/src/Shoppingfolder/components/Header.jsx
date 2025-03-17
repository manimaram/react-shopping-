import React from 'react'

export const Header = () => {
  return (
    <div className='headerSection'>
        <div className='left'>
            <div className="title">
                <h2>SHOPPING MALL</h2>
            </div>
        </div>
        <div className='center'>
            <ul>
                <li>woman</li>
                <li>men</li>
                <li>children</li>
                <li>beauty</li>
            </ul>
        </div>
        <div className="search">
            <input type="text" placeholder='search...'/>
        </div> 
        <div className='right'>
            <div className="signin">
                SignIn/SignUp
            </div>
            <div className="cart">
                Cart
            </div>
        </div>
    </div>

  )
}

export default Header