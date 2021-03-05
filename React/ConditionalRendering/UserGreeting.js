import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }


    render() {


        //Ternary Conditional Approach
        return this.state.isLoggedIn ?<div>Hello Rohan</div> : <div>Hello Guest</div> 
        
        //ShortCircuite Operator
        // return this.state.isLoggedIn && <div>Hello Rohan</div> 
        
        //Variable Conditional Approach
        // let message
        // if (this.state.isLoggedIn)
        //     message = <div>Hello Rohan</div>
        // else
        //     message = <div>Hello Guest</div>

        // return <div>{message}</div>

        // if (this.state.isLoggedIn) {
        //     return <div>Hellow Rohan</div>

        // } else {
        //     return <div>Hellow Guest</div>
        // }


    }
}

export default UserGreeting
