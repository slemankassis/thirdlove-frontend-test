import React from 'react';
import Label from './Label';

describe('Label', () => {
  it('renders snapshot without Props', () => {
    const component = shallow(<Label />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('renders snapshot with fullProps', () => {
    const fullProps = {
      text: '__TEXT__',
      className: '__CLASS_NAME__',
    };

    const component = shallow(<Label {...fullProps} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
