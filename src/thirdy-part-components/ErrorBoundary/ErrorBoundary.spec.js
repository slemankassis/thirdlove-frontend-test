import React from 'react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary snaps', () => {
  it('renders snapshot with basicProps', () => {
    const basicProps = {
      children: React.createElement('div'),
    };

    const component = shallow(<ErrorBoundary {...basicProps} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('renders snapshot with fullProps', () => {
    const fullProps = {
      errorMessage: '__ERROR_MESSAGE__',
      children: React.createElement('div'),
    };

    const component = shallow(<ErrorBoundary {...fullProps} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
