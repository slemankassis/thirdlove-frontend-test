import React from 'react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  it('renders snapshot with basicProps', () => {
    const basicProps = {
      selected: {
        value: '__VALUE__',
        label: '__LABEL__',
      },
      options: ['__OPTION_1__', '__OPTION_2__'],
      onChange: jest.fn(),
    };

    const component = shallow(<Dropdown {...basicProps} />);
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
      label: '__LABEL__',
    };

    const component = shallow(<Dropdown {...fullProps} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
