import React from 'react';
import { shallow } from 'enzyme';

import FormGroup from '../components/FormGroup';

describe('FormGroup', () => {
  it('should render without crashing', () => {
    const formGroup = shallow(<FormGroup />);
    expect(formGroup.html()).toBe('<div class="form__group"></div>');
  });

  it('should add inline class when given a prop', () => {
    const formGroup = shallow(<FormGroup inline />);
    expect(formGroup.hasClass('form__group')).toBeTruthy();
    expect(formGroup.hasClass('form__group--inline')).toBeTruthy();
  });

  it('should add additional classnames', () => {
    const formGroup = shallow(<FormGroup className="extra" />);
    expect(formGroup.hasClass('form__group')).toBeTruthy();
    expect(formGroup.hasClass('extra')).toBeTruthy();
  });
});
