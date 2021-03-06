import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from "../../actions/authActions";


const SignedInLinks = (props) => {
    console.log("See this prop", props)
    return (
        <ul className="right">
            <li><NavLink to="/">New Project</NavLink></li>
            <li><a onClick={props.signOut} href={""}>Logout</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">AS</NavLink></li>
        </ul>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }


}

export default connect(null, mapDispatchToProps)(SignedInLinks);