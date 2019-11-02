import React from 'react';
import Description from './Description';

describe('Description snaps', () => {
  it('renders snapshot', () => {
    const props = {
      contentHtml: mockData.product.body_html,
    };

    const component = shallow(<Description {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
