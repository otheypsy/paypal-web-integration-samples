import React, { lazy } from 'react'
import withSectionLayout from '../../../layouts/withSectionLayout'

const _routes = [
    {
        label: 'Independent Check',
        path: '/independent-check',
        component: lazy(() => import('./sections/IndependentCheck.jsx')),
    },
    {
        label: 'Tokenized Check',
        path: '/tokenized-check',
        component: lazy(() => import('./sections/IndependentCheck.jsx')),
    },
]

export default withSectionLayout(_routes, 'PwPP - Vault')