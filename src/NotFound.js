import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Error: 404</h2>
            <p>Sorry, the page cannot be found</p> <br/>
            <Link to="/">Back to Home Page</Link>
        </div>
    );
}

export default NotFound;