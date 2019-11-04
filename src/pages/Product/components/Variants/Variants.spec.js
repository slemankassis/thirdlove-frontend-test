import React from 'react';
import Variants from './Variants';
import {
  transformVariants,
} from '../../helpers';

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
  it('Should be updated when call color changer', () => {
    // Arranging
    Component = shallow(<Variants {...props} />);
    const instance = Component.instance();
    const value = 'naked-2';
    // Acting
    const onChangeColor = jest.spyOn(instance, 'onChangeColor');
    instance.onChangeColor(value);
    // Asserting
    expect(onChangeColor).toHaveBeenCalledTimes(1);
  });

  it('Should be updated when call band changer', () => {
    // Arranging
    Component = shallow(<Variants {...props} />);
    const instance = Component.instance();
    const value = '34';
    // Acting
    const onChangeBand = jest.spyOn(instance, 'onChangeBand');
    instance.onChangeBand(value);
    // Asserting
    expect(onChangeBand).toHaveBeenCalledTimes(1);
  });

  it('Should be updated when call cup changer', () => {
    // Arranging
    Component = shallow(<Variants {...props} />);
    const instance = Component.instance();
    const value = 'D';
    // Acting
    const onChangeCup = jest.spyOn(instance, 'onChangeCup');
    instance.onChangeCup(value);
    // Asserting
    expect(onChangeCup).toHaveBeenCalledTimes(1);
  });

  // it('Should be updated when call cup changer', () => {
  //   // Arranging
  //   Component = shallow(<Variants {...props} />);
  //   const instance = Component.instance();
  //   const value = 'D';
  //   // Acting
  //   const onChangeCup = jest.spyOn(instance, 'onChangeCup');
  //   instance.onChangeCup(value);
  //   // Asserting
  //   expect(onChangeCup).toHaveBeenCalledTimes(1);
  // });
});
