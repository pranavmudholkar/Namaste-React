import React from 'react';

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {
				name: 'dummy',
				location: 'Hyderabad',
				contact: 'pranav_mudholkar',
			},
		};
	}
	// console.log(props.name + 'constructor');

	async componentDidMount() {
		const data = await fetch('https://api.github.com/users/pranavmudholkar');
		const json = await data.json();

		console.log(json);

		this.setState({
			userInfo: json,
		});
		// console.log(this.props.name + 'did mount');
	}

	render() {
		// console.log(this.props.name + 'render');
		const { name, location, contact, avatar_url } = this.state.userInfo;

		return (
			<div className='user-card'>
				<img src={avatar_url} />
				<h1>Name: {name}</h1>
				<h3>Location: {location}</h3>
				<h4>Contact: {contact}</h4>
			</div>
		);
	}
}

export default UserClass;
