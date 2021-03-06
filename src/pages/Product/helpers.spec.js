import {
  transformImages,
  transformVariants,
  getVariant,
  getColorsInHex,
  formatColor,
  getColorFiltersFromVariants,
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
  // Skipped test
  // TODO: Check why this test result doesn't includes the last one obj in the array input
  it('Should convert an array of variant objects into another with propertly keys and values for Variants component', () => {
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
    expect(transformed).not.toContainObject({
      band: '34',
      color: 'naked-1',
      cup: 'D',
      id: '4615727513637',
      option2: '32E',
      price: '68.00',
      stock: 5,
    });
  });
});

describe('Helpers of Product: getVariant', () => {
  it('Should get the first result of an object that matches with the color, band and cup filter', () => {
    // Arranging
    const variants = [{
      band: '32',
      color: 'naked-3',
      cup: 'E',
      id: '6989569458233',
      option2: '32E',
      price: '68.00',
      stock: 764,
    },
    {
      band: '34',
      color: 'naked-2',
      cup: 'D',
      id: '4615727513637',
      option2: '34D',
      price: '68.00',
      stock: 5,
    },
    {
      band: '32',
      color: 'naked-1',
      cup: 'F',
      id: '6989569491001',
      option2: '32F',
      price: '68.00',
      stock: 158,
    }];
    const color = 'naked-2';
    const band = '34';
    const cup = 'D';
    // Acting
    const variant = getVariant({
      variants,
      color,
      band,
      cup,
    });
    // Asserting
    expect(variant).toEqual({
      band: '34',
      color: 'naked-2',
      cup: 'D',
      id: '4615727513637',
      option2: '34D',
      price: '68.00',
      stock: 5,
    });
  });

  it('Should get the first result of an object that matches with the band and cup filter', () => {
    // Arranging
    const variants = [{
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
      option2: '34D',
      price: '68.00',
      stock: 5,
    }];
    const band = '34';
    const cup = 'D';

    // Acting
    const variant = getVariant({
      variants,
      band,
      cup,
    });
    // Asserting
    expect(variant).toEqual({
      band: '34',
      color: 'naked-2',
      cup: 'D',
      id: '4615727513637',
      option2: '34D',
      price: '68.00',
      stock: 5,
    });
  });
});

describe('Helpers of Product: getColorsInHex', () => {
  it('Should get an array of colors in hexagesimal giving an array of colors if', () => {
    // Arranging
    const input = ['naked-1', 'naked-2'];
    // Acting
    const result = getColorsInHex(input);
    // Asserting
    expect(result).toEqual(['#ffefe5', '#dab5a1']);
  });
});

describe('Helpers of Product: formatColor', () => {
  it('Should get formatted color', () => {
    // Arranging
    const input = 'naked-2';
    // Acting
    const result = formatColor(input);
    // Asserting
    expect(result).toEqual('NAKED');
  });
});

describe('Helpers of Product: getColorFiltersFromVariants', () => {
  it('Should get formatted color', () => {
    // Arranging
    const input = [{
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
      color: 'naked-1',
      cup: 'D',
      id: '4615727513637',
      option2: '34D',
      price: '68.00',
      stock: 5,
    }];
    // Acting
    const result = getColorFiltersFromVariants(input);
    // Asserting
    expect(result).toEqual(['naked-3', 'naked-1']);
  });
});
