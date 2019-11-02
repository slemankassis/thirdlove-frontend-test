/* eslint-disable import/no-extraneous-dependencies */
import {
  configure,
  shallow,
  render,
  mount,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import mockData from './mockData';

global.mockData = mockData;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.escapeSnapshot = (component) => component.debug().replace(/"/g, '\'');

configure({ adapter: new Adapter() });
