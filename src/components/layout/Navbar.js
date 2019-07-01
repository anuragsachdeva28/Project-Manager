import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOnLinks from './SignedOutLinks';
import { connect } from 'react-redux';



const Navbar = (props) => {
    console.log(props);
    return (
        <nav className={"nav-wrapper grey darken-3"}>
            <div className={"container"}>
                <Link to="/" className="brand-logo" > MarioPlan </Link>
                {
                    (props.isEmpty)?<SignedOnLinks/>: <SignedInLinks/>
                }


            </div>
        </nav>
    )
}



const mapStateToProps = (state) => {
    console.log("hey see this - " , state);
    return {
        isEmpty: state.firebase.auth.isEmpty
    }
}
export default connect(mapStateToProps)(Navbar);