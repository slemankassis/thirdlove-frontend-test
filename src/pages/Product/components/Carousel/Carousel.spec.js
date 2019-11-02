import React from 'react';
import Carousel from './Carousel';

describe('Carousel snaps', () => {
  it('renders snapshot', () => {
    const props = {
      images: mockData.product.images,
    };

    const component = shallow(<Carousel {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
