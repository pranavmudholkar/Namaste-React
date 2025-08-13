import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
	constructor(props) {
		super(props);
		// console.log('Parent Constructor');
	}

	componentDidMount() {
		// console.log('Parent did mount');
	}

	render() {
		// console.log('parent render');
		return (
			<div>
				<h1>About</h1>
				<h2>This is Namaste React Web Series</h2>

				<UserClass
					name={'Pranav'}
					location={'Hyderabad'}
					contact={'pranav_mudholkar'}
				/>
			</div>
		);
	}
}
// const About = () => {
// 	return (
// 		<div>
// 			<h1>About</h1>
// 			<h2>This is Namaste React Web Series</h2>

// 			<UserClass
// 				name={'Pranav Mudholkar'}
// 				location={'Hyderabad'}
// 				contact={'pranav_mudholkar'}
// 			/>
// 		</div>
// 	);
// };

export default About;
