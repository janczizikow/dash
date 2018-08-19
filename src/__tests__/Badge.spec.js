import Badge from '../components/Badge';

describe('<Badge />', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Badge />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should add additional class when given a prop', () => {
    wrapper.setProps({ className: 'extra' });
    expect(wrapper.hasClass('Badge')).toBeTruthy();
    expect(wrapper.hasClass('extra')).toBeTruthy();
  });

  it('should render children', () => {
    wrapper.setProps({ children: 'child' });
    expect(wrapper.text()).toBe('child');
  });

  it('should add a color class when given a prop', () => {
    wrapper.setProps({ color: 'secondary' });
    expect(wrapper.hasClass('Badge--secondary')).toBeTruthy();
  });
});
