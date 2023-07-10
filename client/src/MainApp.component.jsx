import { StrictMode } from 'react'
import { RecoilRoot } from 'recoil'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import appRoutes from './app/app.routes.jsx'
import MainLayout from './layouts/MainLayout.component.jsx'
import ErrorBoundary from './lib/components/other/ErrorBoundary/ErrorBoundary.jsx'
import GenericPage from './lib/components/other/GenericPage/GenericPage.component.jsx'
import { createRoutes, createLinks } from './services/router.service.jsx'

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
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Omkar Desai | PayPal Integration Samples</title>
                    <meta
                        httpEquiv="Content-Security-Policy"
                        content={`
                            default-src 'self';
                            script-src 'self' 'unsafe-inline' https://*.paypal.com;
                            style-src 'self' 'unsafe-inline';
                            object-src 'self';
                            base-uri 'self';
                            connect-src 'self' https://*.paypal.com https://*.braintree-api.com https://*.braintreegateway.com;
                            font-src 'self' https://cdnjs.cloudflare.com https://fonts.gstatic.com https://www.paypalobjects.com;
                            frame-src 'self' https://*.paypal.com;
                            img-src 'self' https://www.paypalobjects.com/;
                            media-src 'self';
                            manifest-src 'self';
                        `}
                    ></meta>
                </Helmet>
                <ErrorBoundary>
                    <RecoilRoot>
                        <RouterProvider router={router} />
                    </RecoilRoot>
                </ErrorBoundary>
            </HelmetProvider>
        </StrictMode>
    )
}

export default MainApp
