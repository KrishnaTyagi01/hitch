import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(routerProps) =>
			rest.isAuthenticated ? (
				<Component {...routerProps} />
			) : (
				<Redirect to={{ pathname: '/login', state: { from: routerProps.location } }} />
			)
		}
	/>
);

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated
});

export default connect(mapStateToProps, {})(PrivateRoute);
