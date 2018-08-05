import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Row } from '../components/Layout';

configure({ adapter: new Adapter() });

describe('Row', () => {
  it('renders without crashing', () => {
    const row = shallow(<Row />);
    expect(row.html()).toBe('<div class="row row__gutters"></div>');
  });

  it('should render childeren', () => {
    const row = shallow(<Row>child</Row>);
    expect(row.text()).toBe('child');
  });

  it('should add classes from props', () => {
    const row = shallow(
      <Row
        gutters={false}
        reverse
        start
        center
        end
        top
        middle
        bottom
        around
        between
      />
    );
    expect(row.hasClass('row__reverse')).toBeTruthy();
    expect(row.hasClass('row__start')).toBeTruthy();
    expect(row.hasClass('row__center')).toBeTruthy();
    expect(row.hasClass('row__end')).toBeTruthy();
    expect(row.hasClass('row__top')).toBeTruthy();
    expect(row.hasClass('row__middle')).toBeTruthy();
    expect(row.hasClass('row__bottom')).toBeTruthy();
    expect(row.hasClass('row__around')).toBeTruthy();
    expect(row.hasClass('row__between')).toBeTruthy();
  });

  it('should render a custom tag', () => {
    const row = shallow(<Row tag="section" gutters={false} />);
    expect(row.html()).toBe('<section class="row"></section>');
  });

  it('should add additional classes', () => {
    const row = shallow(<Row className="extra" />);
    expect(row.hasClass('row')).toBeTruthy();
    expect(row.hasClass('extra')).toBeTruthy();
  });
});
