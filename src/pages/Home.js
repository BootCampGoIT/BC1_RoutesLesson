import React, { Component, useState, useEffect } from 'react';
import { Switch, NavLink, Route, withRouter, useLocation } from 'react-router-dom';


// class Home extends Component {
//     state = {
//         from: "",
//         search: ""
//     }

//     componentDidMount() {
//         this.setState({ from: this.props.location.state.from, search: this.props.location.state.search })
//     }
//     render() {
//         const { from } = this.state;
//         return (
//             <>
//                 <h2>Home</h2>
//                 <ul className="list flex">
//                     <li className="listItem">
//                         <NavLink exact to={`${this.props.match.url}/cast`}>Cast</NavLink>
//                     </li>
//                     <li className="listItem">
//                         <NavLink exact to={`${this.props.match.url}/review`}>Review</NavLink>
//                     </li>
//                 </ul>
//                 <button onClick={() => this.props.history.push({
//                     pathname: from,
//                 })} >Go Back</button>
//                 <Switch>
//                     <Route path={`${this.props.match.url}/cast`} render={() => <h2>Cast Content</h2>} />
//                     <Route path={`${this.props.match.url}/review`} render={() => <h2>Review Content</h2>} />
//                 </Switch>
//             </>

//         );
//     }
// }

// export default Home;


const Home = (props) => {
    const [from, setFrom] = useState('')
    const location = useLocation();
    console.log('location', location)

    useEffect(() => {
        location.state ? setFrom(location.state.from): setFrom("/home")
    }, [])

    
    return (
        <>
            <h2>Home</h2>
            <ul className="list flex">
                <li className="listItem">
                    <NavLink exact to={`${props.match.url}/cast`}>Cast</NavLink>
                </li>
                <li className="listItem">
                    <NavLink exact to={`${props.match.url}/review`}>Review</NavLink>
                </li>
            </ul>
            <button onClick={() => props.history.push({
                pathname: from,
            })} >Go Back</button>
            <Switch>
                <Route path={`${props.match.url}/cast`} render={() => <h2>Cast Content</h2>} />
                <Route path={`${props.match.url}/review`} render={() => <h2>Review Content</h2>} />
            </Switch>
        </>
    );
}

export default Home;