import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './Signup';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';


var createReactClass = require('create-react-class');


var Parent = createReactClass({
	getInitialState: function () {
		return { signup: false, login: true }
	},

	switch: function (word) {
		alert(word);
		var signup, login;
		if (word == "signup") { signup = true; login = false; }
		else { login = true; signup = false; }
		return this.setState({ login: login, signup: signup })
	},

	render: function () {
		var self = this;
		return (
			<div>
				<div id="buttons">
					<p id="signupButton" onClick={self.switch.bind(null, "signup")} >Sign In</p>
					<p id="loginButton" onClick={self.switch.bind(null, "login")} > Login</p>
				</div>
			
				{self.state.signup ? <Signup /> : null}
				{self.state.login ? <Login /> : null}
				
			</div>
		)
	}
})

ReactDOM.render(<Parent />, document.getElementById('root'));
registerServiceWorker();
