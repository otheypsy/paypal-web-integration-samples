```jsx static

const routes = [
    {
        label: 'Form',
        path: '/form',
        component: lazy(() => import('./components/Form'))
    },
    {
        label: 'Other',
        path: '/other',
        component: lazy(() => import('./components/Other'))
    }
]

const AppLayout = ({
    mainRouter: {
        mountPath,
        currentPath,
        routes
    },
    children
}) => {
    return (
        <div>
            <label>Common HTML</label>
            {children}
        </div>
    )
}


<CustomRouter
    routes={routes}
    layout={AppLayout}>
</CustomRouter>
```
