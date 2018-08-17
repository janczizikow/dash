import FormGroup from '../components/FormGroup';

describe('<FormGroup />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FormGroup />);
  });
  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should add inline class when given a prop', () => {
    const formGroup = shallow(<FormGroup inline />);
    expect(formGroup.hasClass('form__group')).toBeTruthy();
    expect(formGroup.hasClass('form__group--inline')).toBeTruthy();
  });

  it('should add additional classnames', () => {
    wrapper.setProps({ className: 'extra' });
    expect(wrapper.hasClass('form__group')).toBeTruthy();
    expect(wrapper.hasClass('extra')).toBeTruthy();
  });
});
