import React from 'react';
import Variants from './Variants';
import {
  transformVariants,
} from '../../helpers';
import mockData from '../../../../mockData-original';

describe('Variants snaps', () => {
  let props = {};
  let Component = {};

  beforeEach(() => {
    props = {
      variants: transformVariants(mockData.product.variants),
      onChangeVariant: jest.fn(),
      selectedVariantId: '6989569458233',
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

  it('Should be updated when call color changer', () => {
    // Arranging
    Component = shallow(<Variants {...props} />);
    const value = 'naked-2';
    // Acting
    Component.instance().onChangeColor(value);
    // Asserting
    expect(props.onChangeVariant).toHaveBeenCalledTimes(1);
  });

  // Fails with the custom mock data
  it('Should be updated when call color change', () => {
    // Arranging
    Component = shallow(<Variants {...props} />);
    const value = 'naked-2';
    // Acting
    Component.instance().onChangeColor(value);
    // Asserting
    expect(props.onChangeVariant).toHaveBeenCalledTimes(1);
  });
});
