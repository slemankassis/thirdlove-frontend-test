import {
  // TODO: test black box for sanitizeHtml
  removeDuplicates,
  formatPrice,
  getObjFromArrayByKey,
} from './helpers';

describe('Helpers of App: removeDuplicates', () => {
  it('Should convert an array of images objects into another with propertly keys and values for image gallery', () => {
    // Arranging
    const input = ['__VALUE_1__', '__VALUE_2__', '__VALUE_2__'];
    // Acting
    const result = removeDuplicates(input);
    // Asserting
    expect(result).toEqual(['__VALUE_1__', '__VALUE_2__']);
  });
});

describe('Helpers of App: formatPrice', () => {
  it('Should convert an array of images objects into another with propertly keys and values for image gallery', () => {
    // Arranging
    const input = '68.00';
    // Acting
    const result = formatPrice(input);
    // Asserting
    expect(result).toEqual('$68');
  });
});


describe('Helpers of Product: getObjFromArrayByKey', () => {
  it('Should get the first result of an object that matches with a key', () => {
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
      color: 'naked-2',
      cup: 'D',
      id: '4615727513637',
      option2: '32E',
      price: '68.00',
      stock: 5,
    }];
    // Acting
    const result = getObjFromArrayByKey(input, '4615727513637');
    // Asserting
    expect(result).toEqual({
      band: '34',
      color: 'naked-2',
      cup: 'D',
      id: '4615727513637',
      option2: '32E',
      price: '68.00',
      stock: 5,
    });
  });
});
