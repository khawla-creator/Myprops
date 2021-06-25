import React from 'react' //rfc
import PropTypes from "prop-types" // npm i prop-types 

export default function ProfileComponenet({handleName,Profile,children}) {
     return (
          <div>
           <h1 style= {{ padding:'40px 0 0 0'}} > welcom For All In My Profile  </h1>
              <div  className='contenaire-profile'> 
               {children}
               <div style={{ margin:'30px'}}>
               <h1 style={{color:  'rgb(245,14,101)'}}>{`l'm  ${Profile.fullName}`}</h1>
               
               <h3> Let me to introduce my self a little bit  </h3>
               <ul style={{textAlign:'left'}} >
               { 
                    Profile.bio.map((el,i)=>  
                    <li style= {{listStyle:'none'}} key ={i}>{el}</li>
               )}
               </ul>
               <h3 style={{color:'rgb(24, 140, 215)'}}> And I will be A {Profile.profession}</h3>
               <button onClick={()=> handleName(Profile.fullName)} > Welcom  </button>
               </div>
               </div>
          </div>
     )
}

ProfileComponenet.defaultProps={
     Profile:{fullName:"khawla"}

}

ProfileComponenet.propTypes={
     fullName: PropTypes.string,
     pofession: PropTypes.string,
     bio: PropTypes.string,

}
