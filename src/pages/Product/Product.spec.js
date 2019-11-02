import React from 'react';
import Product from './Product';

describe('Product snaps', () => {
  it('renders snapshot', () => {
    const props = {
      product: mockData.product,
    };

    const component = shallow(<Product {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
