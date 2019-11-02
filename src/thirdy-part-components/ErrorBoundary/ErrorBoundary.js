import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-boundary">{this.props.errorMessage}</div>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  errorMessage: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

ErrorBoundary.defaultProps = {
  errorMessage: 'There was an error loading this component.',
};

export default ErrorBoundary;
