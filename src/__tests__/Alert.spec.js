import Alert from '../components/Alert';

describe('Alert', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Alert />);
  });
  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('should render children', () => {
    wrapper.setProps({ children: 'child' });
    // CSSTransition Component in between
    expect(wrapper.find('child')).toBeTruthy();
  });

  it('should render a custom tag', () => {
    wrapper.setProps({ tag: 'span' });
    expect(wrapper.find('.Alert').type()).toBe('span');
  });

  it('should add a color class when given a prop', () => {
    wrapper.setProps({ color: 'secondary' });
    expect(wrapper.find('.Alert').hasClass('Alert--secondary')).toBeTruthy();
  });

  it('should not render a dismiss button without onClick prop', () => {
    expect(wrapper.contains('button')).toBeFalsy();
  });

  it('should render a dismiss button when onClick prop', () => {
    const mockCallback = jest.fn();
    wrapper = shallow(<Alert onClick={mockCallback} />);
    expect(wrapper.find('button')).toBeTruthy();
  });

  it('should call onClick callback', () => {
    const mockCallback = jest.fn();
    wrapper = shallow(<Alert onClick={mockCallback} />);
    wrapper.find('button').simulate('click');
    expect(mockCallback).toHaveBeenCalled();
  });
});
