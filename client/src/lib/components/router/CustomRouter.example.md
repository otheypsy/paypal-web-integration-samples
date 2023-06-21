```jsx static

const BtDataCollectorRoutes = [
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
        BtDataCollectorRoutes
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
    BtDataCollectorRoutes={BtDataCollectorRoutes}
    layout={AppLayout}>
</CustomRouter>
```
