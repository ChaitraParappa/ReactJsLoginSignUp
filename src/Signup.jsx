import React, { Component } from 'react';
import './index.css';

var createReactClass1 = require('create-react-class');
var Signup = createReactClass1({
	render: function () {
		return (
			<div>
				<div id="signup">
					<input type="text" id="first" placeholder="First Name" /><br />
					<input type="text" id="last" placeholder="Last Name" /><br />
					<input type="email" id="email" placeholder="Email" /><br />
					<input type="password" id="password" placeholder="Password" /><br />
					<input type="password" id="confirm" placeholder="Confirm Password" /><br />
					<button id="send">Send</button>
				</div>
			</div>
		)
	}
})


export default Signup;
