import { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom'
import GenericPage from '../other/GenericPage/GenericPage.component'

const Mount = (props) => {
    return (
        <Suspense fallback={<GenericPage details="Loading..." />}>
            <Routes>
                <Route element={<props.layout routes={props.routes} />}>
                    {props.routes.map((route) => {
                        return <Route key={route.path} path={route.path + '/*'} element={<route.element />} />
                    })}
                    <Route path="*" element={<props.notFound />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

Mount.propTypes = {
    /** Parent layout */
    layout: PropTypes.elementType,
    /** Routes to render */
    routes: PropTypes.array,
    /** Fallback component */
    notFound: PropTypes.elementType,
}

export default Mount
