import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import App from './app';

Enzyme.configure({ adapter: new Adapter() });

describe('A suite', function () {
  it('should render without throwing an error', function() {
    expect(shallow(<App />)
      .contains(<div className="appBgColor"><h1>Hello, Miho</h1></div>))
      .toBe(true);
  });
});
