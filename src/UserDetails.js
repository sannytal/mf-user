import React from 'react';
import styled from 'styled-components';


class UserDetails extends React.Component {

  render() {
    return (
      <div className="app-user-page">
        
        <h1 className="title-pen"> User Profile <span>Details</span></h1>
<div className="user-profile">
	<img className="avatar" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s" alt="Ash" />
    <div className="username">Will Smith</div>
  <div className="bio">
  	Champion Shopper
  </div>
    <div className="description">
     Traveller, Gamer, loves to meet new people. <br />
     Member Since Oct. 20, 2019.
  </div>
  <ul className="data">
    <li>
      <span className="entypo-heart"> Gold Points <br /> 127</span>
    </li>
    <li>
      <span className="entypo-eye">Silver Points <br/> 853</span>
    </li>
    <li>
      <span className="entypo-user">Bronze Points <br />311</span>
    </li>
 </ul>
</div>
  <footer>
    <h1>Location 
  <a href="https://dribbble.com/shots/1033074-User-Profile">
  <span className="entypo-dribbble"></span> GA, USA</a>
    </h1>
  </footer>


        <p className="small-text style-1">
          About Us
          <a href="" target="_blank">
            Contact Us
          </a>
        </p>
      </div>
    );
  }
}
export default UserDetails;
