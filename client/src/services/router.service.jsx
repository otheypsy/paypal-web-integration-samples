import { Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import GenericPage from '../lib/components/other/GenericPage/GenericPage.component.jsx'

const createLinks = (children) => {
    return children.map((child) => {
        return {
            path: child.path,
            label: child.label,
            data: child.data,
        }
    })
}

const createRoutes = (routes, basePath = '/') => {
    const finalRoutes = routes.map((route) => {
        const pad = basePath === '/' ? '' : '/'
        const mountPath = basePath + pad + route.path

        let children = []
        let links = []

        if (route?.children?.length > 0) {
            links = createLinks(route.children)
            children = createRoutes(route.children, mountPath)
        }

        return {
            ...route,
            path: route.path + '/*',
            element: (
                <Suspense fallback={<GenericPage details="Loading..." />}>
                    <route.element label={route.label} mountPath={mountPath} data={route?.data} links={links} />
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
        index: 'true',
        element: (
            <GenericPage
                hasImage={false}
                message={<i className="fa-solid fa-gears p-2" />}
                details="Choose an integration"
            />
        ),
        // element:
    })

    finalRoutes.push({
        path: '*',
        element: <Navigate to={routes[0].path} replace={true} />,
        // element: <GenericPage message="404" details="Not Found"/>
    })

    return finalRoutes
}

const mapPageRoutes = (routes, pageTag) => {
    return routes.map((route) => {
        const tags = [pageTag, ...(route?.data?.tags ? route.data.tags : [])]
        return {
            ...route,
            data: {
                ...route.data,
                tags: [...new Set(tags)],
            },
        }
    })
}

export { createRoutes, createLinks, mapPageRoutes }
