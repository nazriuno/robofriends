import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });
    }

    render() {
        const { hasError } = this.state;
        
        if (hasError) {
            return <h1>Something went wrong</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundry;