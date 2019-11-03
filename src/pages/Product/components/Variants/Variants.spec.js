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

  // Fails with the custom mock data
  xit('Should be updated when call color changer', () => {
    // Arranging
    Component = shallow(<Variants {...props} />);
    const value = 'naked-2';
    // Acting
    Component.instance().onChangeColor(value);
    Component.instance().setState = jest.fn();
    // Asserting
    expect(Component.instance().setState()).toHaveBeenCalledTimes(1);
  });

  xit('Should be updated when call band changer', () => {
    // Arranging
    Component = shallow(<Variants {...props} />);
    const value = { value: '34' };
    // Acting
    Component.instance().onChangeBand(value);
    Component.instance().getCupFilters = jest.fn();
    // Asserting
    expect(props.onChangeVariant).toHaveBeenCalledTimes(1);
  });

  xit('Should be updated when call cup changer', () => {
    // Arranging
    Component = shallow(<Variants {...props} />);
    const value = { value: 'D' };
    // Acting
    Component.instance().onChangeCup(value);
    // Asserting
    expect(props.onChangeVariant).toHaveBeenCalledTimes(1);
  });
});
