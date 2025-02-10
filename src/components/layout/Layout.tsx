import { Outlet } from 'react-router-dom';
import Header from '../Header';
const Layout = () => {
	return (
		<>
			<Header />
			<div className="min-h-screen px-1 ">
				<main className="flex justify-between">
					<Outlet />
				</main>
			</div>
		</>
	);
};

export default Layout;
