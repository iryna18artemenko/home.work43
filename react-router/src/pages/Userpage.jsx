import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Userpage.css"


const Users  = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    
    useEffect(() => {
        fetch(' https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setUsers(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
         <ul>
             {users.map(user => (
                <Link className="link" key={user.id} to={`/users/${user.id}`}>
                    <li>Username: {user.username} </li>
                    <li>Email: {user.email}</li>
                </Link>
             ))}
        </ul>
        );
      }

};

export  {Users};