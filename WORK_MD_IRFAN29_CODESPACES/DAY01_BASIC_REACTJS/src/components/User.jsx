import UserCredential from "./UserCredential"


const User = (props) => {
  return (
    <div>
        <h1>Name: {props.data.name}</h1>
        <h1>Age: {props.data.age}</h1>
        <h1>Course: {props.data.course}</h1>
        <hr />
        <br /><br />
        <UserCredential age={props.data.age} course={props.data.course} />
       
    </div>
  )
}

export default User