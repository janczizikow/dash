import { Row } from '../components/Layout';

describe('<Row />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Row />);
  });
  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render childeren', () => {
    wrapper.setProps({ children: 'child' });
    expect(wrapper.text()).toBe('child');
  });

  it('should render a custom tag', () => {
    wrapper.setProps({ tag: 'section' });
    expect(wrapper.type()).toBe('section');
  });

  it('should add additional classes', () => {
    wrapper.setProps({ className: 'extra' });
    expect(wrapper.find('.Row').hasClass('extra')).toBeTruthy();
  });
  it('should add classes from props', () => {
    wrapper.setProps({
      gutters: false,
      reverse: true,
      start: true,
      center: true,
      end: true,
      top: true,
      middle: true,
      bottom: true,
      around: true,
      between: true,
    });
    expect(wrapper.hasClass('Row__reverse')).toBeTruthy();
    expect(wrapper.hasClass('Row__start')).toBeTruthy();
    expect(wrapper.hasClass('Row__center')).toBeTruthy();
    expect(wrapper.hasClass('Row__end')).toBeTruthy();
    expect(wrapper.hasClass('Row__top')).toBeTruthy();
    expect(wrapper.hasClass('Row__middle')).toBeTruthy();
    expect(wrapper.hasClass('Row__bottom')).toBeTruthy();
    expect(wrapper.hasClass('Row__around')).toBeTruthy();
    expect(wrapper.hasClass('Row__between')).toBeTruthy();
  });
});
