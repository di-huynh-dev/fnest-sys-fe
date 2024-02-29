import { ForgotPassword, LoginPage, RegisterPage } from '../pages';

export const publicRoutes = [
  {
    path: '/login',
    element: <LoginPage />,
  },
	{
			path: '/register',
			element: <RegisterPage />,
	},
  {
			path: '/forgot-password',
			element: <ForgotPassword />,
	},
];