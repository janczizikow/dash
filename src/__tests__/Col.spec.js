import { Col } from '../components/Layout';

describe('<Col />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Col />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders children', () => {
    wrapper.setProps({ children: 'child' });
    expect(wrapper.text()).toBe('child');
  });

  it('adds additional classes', () => {
    wrapper.setProps({ className: 'extra' });
    expect(wrapper.hasClass('Col')).toBeTruthy();
    expect(wrapper.hasClass('extra')).toBeTruthy();
  });

  it('renders a custom tag', () => {
    wrapper.setProps({ tag: 'form' });
    expect(wrapper.type()).toBe('form');
  });

  it('adds breakpoint classes when given a prop', () => {
    wrapper.setProps({ md: 6, lg: 4 });
    expect(wrapper.hasClass('Col-md-6')).toBeTruthy();
    expect(wrapper.hasClass('Col-lg-4')).toBeTruthy();
  });

  it('adds offset class when given a prop', () => {
    wrapper.setProps({ smOffset: 6 });
    expect(wrapper.hasClass('Col-sm-offset-6')).toBeTruthy();
  });

  it('adds order class when given a prop', () => {
    wrapper.setProps({ xsOrder: 2 });
    expect(wrapper.hasClass('Col-xs-order-2')).toBeTruthy();
  });

  it('adds hidden class when given a prop', () => {
    wrapper.setProps({ hiddenXs: true });
    expect(wrapper.hasClass('Col-hidden-xs')).toBeTruthy();
  });
});
