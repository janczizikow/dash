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

  it('should change type when given a prop', () => {
    wrapper.setProps({ type: 'email' });
    expect(wrapper.props()).toHaveProperty('type', 'email');
  });

  it("shouldn't render children when tag = input and type is not submit", () => {
    wrapper.setProps({ children: 'child' });
    expect(wrapper.text()).toBeFalsy();
  });

  it("shouldn't add color class when tag = input and type is not submit", () => {
    wrapper.setProps({ color: 'secondary' });
    expect(wrapper.hasClass('Btn--secondary')).toBeFalsy();
  });

  describe('type="submit"', () => {
    beforeEach(() => {
      wrapper.setProps({ type: 'submit' });
    });

    it('should change class when rendering a submit input', () => {
      expect(wrapper.hasClass('Btn')).toBeTruthy();
    });

    it('should add color class when type is submit', () => {
      expect(wrapper.hasClass('Btn--primary')).toBeTruthy();
    });

    it('should adjust color class when type="submit" and given a prop', () => {
      wrapper.setProps({ color: 'secondary' });
      expect(wrapper.hasClass('Btn--secondary')).toBeTruthy();
    });

    it('should render children when type is submit', () => {
      wrapper.setProps({ children: 'child' });
      expect(wrapper.text()).toBe('child');
    });

    it('should add btn-block class when given a prop', () => {
      wrapper.setProps({ block: true });
      expect(wrapper.hasClass('Btn--block')).toBeTruthy();
    });

    it("shouldn't add an input class when type is submit", () => {
      expect(wrapper.hasClass('Input')).toBeFalsy();
    });
  });

  describe('type="radio"', () => {
    it('should change class when rendering a radio input', () => {
      wrapper.setProps({ type: 'radio' });
      expect(wrapper.hasClass('Input--check')).toBeTruthy();
    });
  });

  describe('type="checkbox"', () => {
    it('should change class when rendering a checkbox', () => {
      wrapper.setProps({ type: 'checkbox' });
      expect(wrapper.hasClass('Input--check')).toBeTruthy();
    });
  });

  describe('<select />', () => {
    beforeEach(() => {
      wrapper.setProps({ tag: 'select' });
    });

    it('should render select, when given a tag prop', () => {
      expect(wrapper.type()).toBe('select');
    });

    it('should render children, when tag is select', () => {
      wrapper.setProps({ children: 'child' });
      expect(wrapper.text()).toBe('child');
    });

    it("shouldn't have type property, when rendering a select", () => {
      expect(wrapper.props()).not.toHaveProperty('type');
    });
  });

  describe('<textarea />', () => {
    beforeEach(() => {
      wrapper.setProps({ tag: 'textarea' });
    });

    it('should render textarea, when given a tag prop', () => {
      expect(wrapper.type()).toBe('textarea');
    });

    it('should render children, when tag is textarea', () => {
      wrapper.setProps({ children: 'child' });
      expect(wrapper.text()).toBe('child');
    });

    it("shouldn't have type property, when rendering a textarea", () => {
      expect(wrapper.props()).not.toHaveProperty('type');
    });
  });
});
