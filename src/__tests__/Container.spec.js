import React from 'react';
import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';

import { Container } from '../components/Layout';

describe('Container', () => {
  it('renders without crashing', () => {
    const container = shallow(<Container />);
    expect(container.html()).toBe('<div class="container"></div>');
  });

  it('should render with fluid class', () => {
    const container = shallow(<Container fluid />);
    expect(container.html()).toBe('<div class="container__fluid"></div>');
  });

  it('should render children', () => {
    const container = shallow(<Container>child</Container>);
    expect(container.text()).toBe('child');
  });

  it('should render a custom tag', () => {
    const container = shallow(<Container tag="main" />);
    expect(container.html()).toBe('<main class="container"></main>');
  });

  it('should add additional classes', () => {
    const container = shallow(<Container className="class" />);
    expect(container.hasClass('container')).toBe(true);
    expect(container.hasClass('class')).toBe(true);
  });
});
