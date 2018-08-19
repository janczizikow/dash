import Input from '../components/Input';

// TODO: test .focus() with refs
/* eslint-disable no-console */
console.warn('<Input /> test .focus()');

describe('<Input />', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Input />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render input by default', () => {
    expect(wrapper.type()).toBe('input');
  });

  it("shouldn't render children when tag = input", () => {
    wrapper.setProps({ children: 'child' });
    expect(wrapper.text()).toBe('');
  });

  it('should change type when given a prop', () => {
    wrapper.setProps({ type: 'email' });
    expect(wrapper.props()).toHaveProperty('type', 'email');
  });
  it('should add additional classes', () => {
    wrapper.setProps({ className: 'extra' });
    expect(wrapper.hasClass('extra')).toBeTruthy();
  });

  it('should add block class when given a prop', () => {
    wrapper.setProps({ block: true });
    expect(wrapper.hasClass('Input--block')).toBeTruthy();
  });

  it('should be disabled if has "disabled" prop', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.props()).toHaveProperty('disabled');
  });

  it('should add valid class when given a prop', () => {
    wrapper.setProps({ valid: true });
    expect(wrapper.hasClass('Input--success')).toBeTruthy();
  });

  it('should add invalid class when given a prop', () => {
    wrapper.setProps({ invalid: true });
    expect(wrapper.hasClass('Input--error')).toBeTruthy();
  });

  it('should change class when rendering a radio input', () => {
    wrapper.setProps({ type: 'radio' });
    expect(wrapper.hasClass('Input--check')).toBeTruthy();
  });

  it('should change class when rendering a checkbox', () => {
    wrapper.setProps({ type: 'checkbox' });
    expect(wrapper.hasClass('Input--check')).toBeTruthy();
  });

  it('should render select, when given a tag prop', () => {
    wrapper.setProps({ tag: 'select' });
    expect(wrapper.type()).toBe('select');
  });

  it("shouldn't have type property, when rendering a select", () => {
    wrapper.setProps({ tag: 'select' });
    expect(wrapper.props()).not.toHaveProperty('type');
  });

  it('should render children, when type is select', () => {
    wrapper.setProps({ tag: 'select', children: 'child' });
    expect(wrapper.text()).toBe('child');
  });

  it('should render textarea, when given a tag prop', () => {
    wrapper.setProps({ tag: 'textarea' });
    expect(wrapper.type()).toBe('textarea');
  });

  it("shouldn't have type property, when rendering a textarea", () => {
    wrapper.setProps({ tag: 'textarea' });
    expect(wrapper.props()).not.toHaveProperty('type');
  });
});
