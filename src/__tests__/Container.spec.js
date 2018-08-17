import { Container } from '../components/Layout';

describe('<Container />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Container />);
  });
  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render children', () => {
    wrapper.setProps({ children: 'child' });
    expect(wrapper.text()).toBe('child');
  });

  it('should render a custom tag', () => {
    wrapper.setProps({ tag: 'main' });
    expect(wrapper.type()).toBe('main');
  });

  it('should add additional classes', () => {
    wrapper.setProps({ className: 'extra' });
    expect(wrapper.find('.Container').hasClass('extra')).toBeTruthy();
  });

  it('should add fluid class when given a prop', () => {
    wrapper.setProps({ fluid: true });
    expect(wrapper.hasClass('Container__fluid')).toBeTruthy();
  });
});
