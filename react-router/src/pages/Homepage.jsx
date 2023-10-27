import {Link} from "react-router-dom";

const Homepage  = () => {
    return (
        <h1>Hello. Go <Link to="/users">Users</Link></h1>
    )
};

export  {Homepage};