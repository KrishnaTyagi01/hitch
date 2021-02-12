import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../API/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated().token ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/signup', state: { from: props.location } }} />
			)
		}
	/>
);

export default PrivateRoute;
