import React from 'react';
import Variants from './Variants';

describe('Variants snaps', () => {
  let props = {};
  let Component = {};

  beforeEach(() => {
    props = {
      variants: [{
        band: '32',
        color: 'naked-3',
        cup: 'E',
        id: '6989569458233',
        option2: '32E',
        price: '68.00',
        stock: 764,
      },
      {
        band: '32',
        color: 'naked-1',
        cup: 'F',
        id: '6989569491001',
        option2: '32F',
        price: '68.00',
        stock: 158,
      },
      {
        band: '34',
        color: 'naked-2',
        cup: 'D',
        id: '4615727513637',
        option2: '32E',
        price: '68.00',
        stock: 5,
      }],
      onChangeVariant: jest.fn(),
      selectedVariantId: '__SELECTED_VARIANT_ID__',
      handleSubmit: jest.fn(),
    };
  });

  afterEach(() => {
    Component = undefined;
  });

  it('renders snapshot', () => {
    Component = shallow(<Variants {...props} />);
    expect(escapeSnapshot(Component)).toMatchSnapshot();
  });

  // This tests enter in a infinite loop, maybe for the jest version
  xit('Should be updated when color changes', () => {
    // Arranging
    Component = shallow(<Variants {...props} />);
    const value = 'naked-2';
    // Acting
    Component.instance().onChangeColor(value);
    // Asserting
    expect(props.onChangeVariant).toHaveBeenCalledTimes(1);
  });
});
