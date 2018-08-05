import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Col } from '../components/Layout';

configure({ adapter: new Adapter() });

describe('Col', () => {
  it('renders without crashing', () => {
    const col = shallow(<Col />);
    expect(col.html()).toBe('<div class="col"></div>');
  });

  it('should renders children', () => {
    const col = shallow(<Col>child</Col>);
    expect(col.text()).toBe('child');
  });

  it('should add additional classes', () => {
    const col = shallow(<Col className="extra" />);
    expect(col.hasClass('col')).toBeTruthy();
    expect(col.hasClass('extra')).toBeTruthy();
  });

  it('should render a custom tag', () => {
    const col = shallow(<Col tag="form" />);
    expect(col.html()).toBe('<form class="col"></form>');
  });
});
