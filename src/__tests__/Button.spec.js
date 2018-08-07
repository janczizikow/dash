import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button';
// import toJson from 'enzyme-to-json';
// import { StaticRouter } from 'react-router-dom';

describe('Button', () => {
  it('should render without crashing', () => {
    const button = shallow(<Button />);
    expect(button.html()).toBe('<button class="btn"></button>');
  });

  it('should render children', () => {
    const button = shallow(<Button>child</Button>);
    expect(button.text()).toBe('child');
  });

  it('should add additional classes', () => {
    const button = shallow(<Button className="extra" />);
    expect(button.hasClass('btn')).toBeTruthy();
    expect(button.hasClass('extra')).toBeTruthy();
  });

  // FIXME: https://stackoverflow.com/questions/43771517/using-jest-to-test-a-link-from-react-router-v4
  // it('should render a link if has "to" prop', () => {
  //   const button = shallow(
  //     <StaticRouter location="/" context={context}>
  //       <Button to="/" />
  //     </StaticRouter>
  //   );
  //   expect(button.toJSon()).toMatchSnapshot();
  // });

  it('should be disabled if has "disabled" prop', () => {
    const button = shallow(<Button disabled />);
    expect(button.html()).toBe(
      '<button type="button" disabled class="btn"></button>'
    );
  });

  // TODO: Figure out how to test behavior
  // it('should not trigger onClick function if disabled', () => {
  //   const button = '';
  //   expect(button).toBe('');
  // });
});
