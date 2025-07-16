const UserProfile = (props) => {
   return (
     <div style = {{padding: "2rem", backgroundColor: "#dddddd", borderRadius: "1rem"}}>
       <h2>{props.name}</h2>
       <p>Age: {props.age}</p>
       <p>Bio: {props.bio}</p>
     </div>
   );
 };
 export default UserProfile;