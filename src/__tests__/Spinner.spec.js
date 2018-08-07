import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../components/Spinner';

it('renders without crashing', () => {
  const spinner = shallow(<Spinner />);
  expect(spinner.html()).toBe('<div class="spinner"></div>');
});

it('should adjust the class with a prop', () => {
  const spinner = shallow(<Spinner light />);
  expect(spinner.html()).toBe('<div class="spinner--light"></div>');
});
