import React from 'react';
import Swatches from './Swatches';

describe('Swatches snaps', () => {
  it('renders snapshot with basicProps', () => {
    const basicProps = {
      colors: ['__OPTION_1__', '__OPTION_2__'],
    };
    const component = shallow(<Swatches {...basicProps} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('renders snapshot with fullProps', () => {
    const fullProps = {
      colors: ['__OPTION_1__', '__OPTION_2__'],
      onChange: jest.fn(),
    };

    const component = shallow(<Swatches {...fullProps} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
