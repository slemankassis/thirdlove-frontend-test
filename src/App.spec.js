import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  it('deep rendering without crashing using ReactDOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders snapshot without info', () => {
    const component = shallow(<App />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
