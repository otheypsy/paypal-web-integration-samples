import { ReactNode, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import GenericPage from '../lib/components/other/GenericPage/GenericPage.component.jsx'

interface Route {
    index?: boolean
    label?: string
    path?: string
    element: ReactNode
    children?: Array<Route>
    data?: object
    tag?: string
}

interface RouteLink {
    path: string
    label: string
    tag: string
}

interface RouteElementProps {
    label?: string
    mountPath?: string
    links?: Array<RouteLink>
}

const createLinks = (children: Array<Route>): Array<RouteLink> => {
    return children.map((child): RouteLink => {
        return {
            path: child.path,
            label: child.label,
            tag: child.tag,
        } as RouteLink
    })
}

const createRoutes = (routes: Array<Route>, basePath: string = '/'): Array<Route> => {
    const finalRoutes: Array<Route> = routes.map((route: Route) => {
        const pad: string = basePath === '/' ? '' : '/'
        const mountPath: string = basePath + pad + route.path
        const props: RouteElementProps = {
            label: route.label,
            mountPath: mountPath,
            links: undefined,
        }

        let children
        if (route?.children?.length > 0) {
            props.links = createLinks(route.children || [])
            children = createRoutes(route.children || [], props.mountPath)
        }

        return {
            ...route,
            path: route.path + '/*',
            element: (
                <Suspense fallback={<GenericPage details="Loading..." />}>
                    <route.element {...props} />
                </Suspense>
            ),
            errorElement: (
                <GenericPage
                    hasImage={false}
                    message={<i className="fa-solid fa-circle-exclamation px-2 text-danger" />}
                    details="Something went wrong"
                />
            ),
            children: children,
        }
    })

    finalRoutes.push({
        index: true,
        element: (
            <GenericPage
                hasImage={false}
                message={<i className="fa-solid fa-gears p-2" />}
                details="Choose an integration"
            />
        ),
    })

    finalRoutes.push({
        path: '*',
        element: <Navigate to={routes[0].path} replace={true} />,
        // element: <GenericPage message="404" details="Not Found"/>
    })

    return finalRoutes
}

const tagPageRoutes = (routes: Array<Route>, tag: string): Array<Route> => {
    return routes.map((route): Route => {
        return {
            ...route,
            tag: tag,
        }
    })
}

export { createRoutes, createLinks, tagPageRoutes, Route }
