import {shallow} from '@vue/test-utils';
import Other from '../other.vue';

describe('layout | other', () => {
  it('should match snapshot', () => {
    // when
    const wrapper = shallow(Other);

    // then
    expect(wrapper.element).toBeDefined();
    expect(wrapper.element).toMatchSnapshot();
  });
});
