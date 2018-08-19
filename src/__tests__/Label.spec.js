import Label from '../components/Label';

describe('<Label />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Label htmlFor="input" />);
  });
  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('should render children', () => {
    wrapper.setProps({ children: 'child' });
    expect(wrapper.text()).toBe('child');
  });

  it('should pass htmlFor prop', () => {
    expect(wrapper.html()).toBe('<label for="input" class="Label"></label>');
  });

  it('should add additional classnames when given a prop', () => {
    wrapper.setProps({ className: 'extra' });
    expect(wrapper.hasClass('extra')).toBeTruthy();
  });

  it('should add block class when given a prop', () => {
    wrapper.setProps({ block: true });
    expect(wrapper.hasClass('Label--block')).toBeTruthy();
  });

  it('should add disabled class when given a prop', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.hasClass('Label--disabled')).toBeTruthy();
  });

  it('should add check class when given a prop', () => {
    wrapper.setProps({ check: true });
    expect(wrapper.hasClass('Label--check')).toBeTruthy();
  });

  it('should add invalid class when given a prop', () => {
    wrapper.setProps({ invalid: true });
    expect(wrapper.hasClass('Label--error')).toBeTruthy();
  });
});
