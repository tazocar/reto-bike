import React from 'react';
import './login.css';

function Login({ appName, user, onAuth, onLogout }) {
	function renderUserData() {
		return (
			<ul className='right'>
				<li className='list'>
					<img
						className='circle'
						src={user.photoURL} alt={'avatar'}
					/>
				</li>
				<li className='list'>{user.displayName}</li>
				<li className='list'>
					<button
						className='waves-effect waves-light btn blue darken-1'
						onClick={onLogout}
					>
						Logout
          </button>
				</li>
			</ul>
		)
	}

	function renderLoginButton() {
		return (
			<ul className='right'>
				<li className='list'>
					<button
						className='waves-effect waves-light btn blue darken-1'
						onClick={onAuth}
					>
						Login
          </button>
				</li>
			</ul>
		)
	}

	return (
		<nav>
			<div>
				<a className='left brand-logo'>{appName}</a>
				{user ? renderUserData() : renderLoginButton()}
			</div>
		</nav>
	)
}

export default Login;