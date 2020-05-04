import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import {logout} from '../actions/AuthActions';

/**
 * renders the logout component
 * @param props auth state from redux
 * @constructor
 */
const Logout = (props : any) => (
    <div><Redirect to={{
        pathname: '/'
    }}/></div>
);

/**
 * maps redux state to props
 * @param state of the redux
 */
const mapStateToProps = (state : any) => {
    return {
        auth: state.auth
    };
};

/**
 * maps redux dispatch to props
 * @param dispatch of the redux
 */
const mapDispatchToProps = (dispatch : any) => {
    return {
        login: (token :any) => {
            dispatch(logout());
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));