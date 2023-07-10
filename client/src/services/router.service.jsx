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
        const props = {
            label: route.label,
            mountPath: mountPath,
            ...(route?.data && { data: route.data }),
        }

        let children
        if (route?.children?.length > 0) {
            props.links = createLinks(route.children)
            children = createRoutes(route.children, props.mountPath)
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
