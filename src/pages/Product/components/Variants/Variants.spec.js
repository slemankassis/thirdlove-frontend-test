import React from 'react';
import Variants from './Variants';

describe('Variants snaps', () => {
  it('renders snapshot', () => {
    const props = {
      variants: mockData.product.variants,
      onChangeVariant: jest.fn(),
      selectedVariantId: '__SELECTED_VARIANT_ID__',
    };

    const component = shallow(<Variants {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
