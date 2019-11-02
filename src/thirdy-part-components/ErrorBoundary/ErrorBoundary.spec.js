import React from 'react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders snapshot with basicProps', () => {
    const basicProps = {
      selected: {
        value: '__VALUE__',
        label: '__LABEL__',
      },
      options: ['__OPTION_1__', '__OPTION_2__'],
      onChange: jest.fn(),
    };

    const component = shallow(<ErrorBoundary {...basicProps} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('renders snapshot with fullProps', () => {
    const fullProps = {
      selected: {
        value: '__VALUE__',
        label: '__LABEL__',
      },
      options: ['__OPTION_1__', '__OPTION_2__'],
      onChange: jest.fn(),
      errorMessage: '__ERROR_MESSAGE__',
      children: React.createElement('div'),
    };

    const component = shallow(<ErrorBoundary {...fullProps} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
