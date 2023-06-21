import { Profiler } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom/client'
import './index.scss'
import MainApp from './MainApp.component.jsx'

const _profiling = false

const RootProfiler = ({ children }) => {
    const onRenderCallback = (
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
    ) => console.log(id, { phase, actualDuration, baseDuration })

    return (
        <Profiler id="RootProfiler" onRender={onRenderCallback}>
            {children}
        </Profiler>
    )
}

RootProfiler.propTypes = {
    children: PropTypes.any,
}

const finalMount = _profiling ? (
    <RootProfiler>
        <MainApp />
    </RootProfiler>
) : (
    <MainApp />
)
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(finalMount)
