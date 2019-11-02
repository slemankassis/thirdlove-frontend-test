import {
  transformImages,
  transformVariants,
  getSelectedVariant,
  getObjsFromArrayByKey,
} from './helpers';

expect.extend({
  toContainObject(received, argument) {
    const pass = this.equals(received,
      expect.arrayContaining([
        expect.objectContaining(argument),
      ]));

    if (pass) {
      return {
        message: () => (`expected ${this.utils.printReceived(received)} not to contain object ${this.utils.printExpected(argument)}`),
        pass: true,
      };
    }
    return {
      message: () => (`expected ${this.utils.printReceived(received)} to contain object ${this.utils.printExpected(argument)}`),
      pass: false,
    };
  },
});

describe('Helpers of Product: transformImages', () => {
  it('Should convert an array of images objects into another with propertly keys and values for image gallery', () => {
    // Arranging
    const input = [{
      src100: '__VALUE_A1__',
      src600: '__VALUE_A2__',
      src1000: '__VALUE_A3__',
    },
    {
      src100: '__VALUE_B1__',
      src600: '__VALUE_B2__',
      src1000: '__VALUE_B3__',
    }];
    // Acting
    const transformed = transformImages(input);
    // Asserting
    expect(transformed).toEqual([{
      original: 'https://__VALUE_A3__',
      thumbnail: 'https://__VALUE_A1__',
    },
    {
      original: 'https://__VALUE_B3__',
      thumbnail: 'https://__VALUE_B1__',
    }]);
  });
});

describe('Helpers of Product: transformVariants', () => {
  // TODO: Check why this test result doesn't includes the last one obj in the array input
  xit('Should convert an array of variant objects into another with propertly keys and values for Variants component', () => {
    // Arranging
    const input = [{
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
    }];
    // Acting
    const transformed = transformVariants(input);
    // Asserting
    expect(transformed).toStrictEqual([{
      band: '32',
      color: 'naked-1',
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
    }]);
    expect(transformed).toContainObject({
      band: '32',
      color: 'naked-1',
      cup: 'E',
      id: '6989569458233',
      option2: '32E',
      price: '68.00',
      stock: 764,
    });
    expect(transformed).toContainObject({
      band: '32',
      color: 'naked-1',
      cup: 'F',
      id: '6989569491001',
      option2: '32F',
      price: '68.00',
      stock: 158,
    });
    // expect(transformed).toContainObject({
    //   band: '34',
    //   color: 'naked-1',
    //   cup: 'D',
    //   id: '4615727513637',
    //   option2: '32E',
    //   price: '68.00',
    //   stock: 5,
    // });
  });
});

describe('Helpers of Product: transformImages', () => {
  it('Should convert an array of images objects into another with propertly keys and values for image gallery', () => {
    // Arranging
    const input = [{
      src100: '__VALUE_A1__',
      src600: '__VALUE_A2__',
      src1000: '__VALUE_A3__',
    },
    {
      src100: '__VALUE_B1__',
      src600: '__VALUE_B2__',
      src1000: '__VALUE_B3__',
    }];
    // Acting
    const transformed = transformImages(input);
    // Asserting
    expect(transformed).toEqual([{
      original: 'https://__VALUE_A3__',
      thumbnail: 'https://__VALUE_A1__',
    },
    {
      original: 'https://__VALUE_B3__',
      thumbnail: 'https://__VALUE_B1__',
    }]);
  });
});
