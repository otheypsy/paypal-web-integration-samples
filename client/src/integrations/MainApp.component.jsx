import { StrictMode } from 'react'
import { RecoilRoot } from 'recoil'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import appRoutes from './apps/routes'
import MainLayout from './layouts/MainLayout'
import ErrorBoundary from '../lib/components/other/ErrorBoundary/ErrorBoundary'
import GenericPage from '../lib/components/other/GenericPage/GenericPage.component'
import { createRoutes, createLinks } from '../services/router.service.jsx'

const label = 'Integration Samples'
const links = createLinks(appRoutes)
const routes = createRoutes(appRoutes)

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout links={links} label={label} />,
        children: routes,
        errorElement: <GenericPage message="404" details="Not Found" />,
    },
])

const MainApp = () => {
    return (
        <StrictMode>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Omkar Desai | PayPal Integration Samples</title>
            </Helmet>
            <ErrorBoundary>
                <RecoilRoot>
                    <RouterProvider router={router} />
                </RecoilRoot>
            </ErrorBoundary>
        </StrictMode>
    )
}

export default MainApp
