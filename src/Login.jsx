import React from 'react';
import './index.css';

var createclass = require('create-react-class');

var Login = createclass({

	render: function () {
		return (
			<div>
				<div id="login">
					<input type="email" id="email" placeholder="Email" /><br />
					<input type="password" id="password" placeholder="Password" /><br />
					<button id="send">Send</button>
				</div>

				
			</div>
		)
	}
});

export default Login;