import InputMessage from '../components/InputMessage';

describe('<Input message />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<InputMessage />);
  });
  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders children', () => {
    wrapper.setProps({ children: 'child' });
    expect(wrapper.text()).toBe('child');
  });

  it('adds additional classnames', () => {
    wrapper.setProps({ className: 'extra' });
    expect(wrapper.find('.InputMessage').hasClass('extra')).toBeTruthy();
  });

  it('adds classes based on props', () => {
    wrapper.setProps({ valid: true, invalid: true });
    expect(
      wrapper.find('.InputMessage').hasClass('InputMessage__invalid')
    ).toBeTruthy();
    expect(
      wrapper.find('.InputMessage').hasClass('InputMessage__valid')
    ).toBeTruthy();
  });
});
