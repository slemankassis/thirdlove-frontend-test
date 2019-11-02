import React from 'react';
import Button from './Button';

describe('Button snaps', () => {
  it('renders snapshot without props', () => {
    const component = shallow(<Button />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('renders snapshot with fullProps', () => {
    const fullProps = {
      text: '__TEXT__',
      className: '__CLASS_NAME__',
      onClick: jest.fn(),
    };

    const component = shallow(<Button {...fullProps} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
