import React from 'react';
import { shallow } from 'enzyme';

import Input from '../components/Input';

describe('Input', () => {
  it('should render without crashing', () => {
    const input = shallow(<Input />);
    expect(input.html()).toBe('<input type="text" class=""/>');
  });

  it('should add additional classes', () => {
    const input = shallow(<Input className="extra" />);
    expect(input.hasClass('extra')).toBeTruthy();
  });
});
