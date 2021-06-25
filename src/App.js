import './App.css';
import React from "react";
import ProfileComponenet from './Profile/ProfileComponenet';
import A from './Profile/image/Image.png'


function App() {
const myStyle={fontFamily:'Cambria', borderRadius:'100px/200px',backgroundColor: 'beige'}

const Profile = 
        {
          fullName:"khawla Guesmi",
          bio:
          [ 
          "In 2020 I worked as a methods agent for 6 months",
          "In 2019 I did a work-study internship in an orthopedic company",
          "IN 2017 Internships at CNCC during 4 months "
          ],
          profession :'Developper full stack '
        }

const handleName=(fullName)=>{ alert(`hello from ${fullName}`)}

  return (

    <div className="App" style={myStyle}>

      <ProfileComponenet Profile={Profile} handleName={handleName} >
      
          <img  src={A} alt= ' my profile' height='200px' style={{borderRadius:'100px 0 100px 50px', margin:'60px 0 20px '}}/>
      </ProfileComponenet>

    </div>
  )
}

export default App;
