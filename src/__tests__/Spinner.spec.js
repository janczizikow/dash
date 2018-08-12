import Spinner from '../components/Spinner';

describe('<Spinner />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('adjust the class with a light prop', () => {
    wrapper.setProps({ light: true });
    expect(wrapper.hasClass('Spinner--light')).toBeTruthy();
  });
});
