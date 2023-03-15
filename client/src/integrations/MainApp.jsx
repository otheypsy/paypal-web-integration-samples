import { StrictMode } from 'react'
import { RecoilRoot } from 'recoil'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import appRoutes from './apps/routes'
import MainLayout from './layouts/MainLayout'
import ErrorBoundary from '../lib/components/other/ErrorBoundary/ErrorBoundary'
import GenericPage from '../lib/components/other/GenericPage/GenericPage.component'
import { createRoutes, createLinks } from './services/RouterService'

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
            <ErrorBoundary>
                <RecoilRoot>
                    <RouterProvider router={router} />
                </RecoilRoot>
            </ErrorBoundary>
        </StrictMode>
    )
}

export default MainApp