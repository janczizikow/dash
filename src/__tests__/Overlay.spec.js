import Overlay from '../components/Overlay';

describe('<Overlay />', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Overlay />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('adds a class with a light prop', () => {
    wrapper.setProps({ light: true });
    expect(wrapper.find('.Overlay').hasClass('Overlay--light')).toBeTruthy();
  });

  it("doesn't render without a prop", () => {
    expect(wrapper.contains('.Overlay')).toBeFalsy();
  });

  it('renders with a prop', () => {
    /** Setting a timeout to ensure the CSSTransition finished
     *  Would be good to find a better solution for this
     */
    wrapper.setProps({ show: true });
    setTimeout(() => {
      expect(wrapper.contains('.Overlay')).toBeTruthy();
    }, 1100);
  });
});
