import { Col } from '../components/Layout';

describe('<Col />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Col />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render children', () => {
    wrapper.setProps({ children: 'child' });
    expect(wrapper.text()).toBe('child');
  });

  it('should add additional classes', () => {
    wrapper.setProps({ className: 'extra' });
    expect(wrapper.hasClass('Col')).toBeTruthy();
    expect(wrapper.hasClass('extra')).toBeTruthy();
  });

  it('should render a custom tag', () => {
    wrapper.setProps({ tag: 'form' });
    expect(wrapper.type()).toBe('form');
  });
});
