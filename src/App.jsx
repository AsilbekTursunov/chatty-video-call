import { Navigate, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import OnboardingPage from './pages/OnboardingPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { Toaster } from 'react-hot-toast'
import NotificationPage from './pages/NotificationPage'
import CallPage from './pages/CallPage'
import ChatPage from './pages/ChatPage'
import PageLoader from './components/PageLoader'
import { useAuthUser } from './hooks/useAuthUser'
import MainLayout from './layouts/MainLayout'
import useThemeStore from './store/theme'
import FriendsPage from './pages/FriendsPage'
const App = () => {
	const { authUser, isLoading } = useAuthUser()
	const { theme } = useThemeStore()
	const isAuthenticated = Boolean(authUser)
	const isOnboarded = authUser?.isOnboarded

	if (isLoading) return <PageLoader />
	return (
		<div data-theme={theme}>
			<Routes>
				<Route
					path='/'
					element={
						isAuthenticated ? (
							isOnboarded ? (
								<MainLayout showSidebar={true}>
									<HomePage />
								</MainLayout>
							) : (
								<Navigate to={'/onboarding'} />
							)
						) : (
							<Navigate to={'/login'} />
						)
					}
				/>
				<Route
					path='/register'
					element={
						isAuthenticated ? <Navigate to={isOnboarded ? '/' : '/onboarding'} /> : <RegisterPage />
					}
				/>
				<Route
					path='/login'
					element={
						isAuthenticated ? <Navigate to={isOnboarded ? '/' : '/onboarding'} /> : <LoginPage />
					}
				/>
				<Route
					path='/notifications'
					element={
						isAuthenticated ? (
							isOnboarded ? (
								<MainLayout showSidebar={true}>
									<NotificationPage />
								</MainLayout>
							) : (
								<Navigate to={'/onboarding'} />
							)
						) : (
							<Navigate to={'/login'} />
						)
					}
				/>
				<Route
					path='/friends'
					element={
						isAuthenticated ? (
							isOnboarded ? (
								<MainLayout showSidebar={true}>
									<FriendsPage />
								</MainLayout>
							) : (
								<Navigate to={'/onboarding'} />
							)
						) : (
							<Navigate to={'/login'} />
						)
					}
				/>
				<Route
					path='/call/:id'
					element={
						isAuthenticated ? (
							isOnboarded ? (
								<MainLayout showSidebar={false}>
									<CallPage />
								</MainLayout>
							) : (
								<Navigate to={'/onboarding'} />
							)
						) : (
							<Navigate to={'/login'} />
						)
					}
				/>
				<Route
					path='/chat/:id'
					element={
						isAuthenticated ? (
							isOnboarded ? (
								<MainLayout showSidebar={false}>
									<ChatPage />
								</MainLayout>
							) : (
								<Navigate to={'/onboarding'} />
							)
						) : (
							<Navigate to={'/login'} />
						)
					}
				/>
				<Route
					path='/onboarding'
					element={
						isAuthenticated ? (
							isOnboarded ? (
								<Navigate to='/' />
							) : (
								<OnboardingPage />
							)
						) : (
							<Navigate to='/login' />
						)
					}
				/>
			</Routes>
			<Toaster
				position='top-right'
				reverseOrder={false}
				toastOptions={{
					className: '',
					duration: 5000,
				}}
			/>
		</div>
	)
}

export default App
