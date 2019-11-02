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

describe('Product logic', () => {
  it('Should be updated when selected variant id changes', () => {
    // Arranging
    const props = {
      product: {
        id: 1,
        title: '__TITLE',
        images: [{
          original: 'https://__VALUE_A3__',
          thumbnail: 'https://__VALUE_A1__',
        },
        {
          original: 'https://__VALUE_B3__',
          thumbnail: 'https://__VALUE_B1__',
        }],
        variants: [{
          id: 6989569458233,
          price: '68.00',
          option1: 'naked-1',
          option2: '32E',
          inventory_quantity: 764,
        },
        {
          id: 6989569491001,
          price: '68.00',
          option1: 'naked-1',
          option2: '32F',
          inventory_quantity: 158,
        },
        {
          id: 4615727513637,
          price: '68.00',
          option1: 'naked-1',
          option2: '34D',
          inventory_quantity: 5,
        }],
        body_html: '<div>__BODY_HTML__</div>',
      },
    };
    const component = shallow(<Product {...props} />);
    const value = '4615727513637';
    // Acting
    component.instance().onChangeVariant(value);
    // Asserting
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
