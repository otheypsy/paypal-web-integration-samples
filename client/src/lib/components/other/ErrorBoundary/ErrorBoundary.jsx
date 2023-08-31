import { Component } from 'react'
import PropTypes from 'prop-types'
import GenericPage from '../GenericPage/GenericPage.component'
import Card from '../Card/Card.component'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { error: null, errorInfo: null }
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo)
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
    }

    render() {
        if (this.state.errorInfo)
            return (
                <div className="container-fluid">
                    <GenericPage message="Oops" details="Something went wrong">
                        <Card>
                            <details style={{ whiteSpace: 'pre-wrap' }}>
                                {this.state.error && this.state.error.toString()}
                                <br />
                                {this.state.errorInfo.componentStack}
                            </details>
                        </Card>
                    </GenericPage>
                    <div className="row">
                        <div className="col"></div>
                    </div>
                </div>
            )
        return this.props.children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
}

export default ErrorBoundary
