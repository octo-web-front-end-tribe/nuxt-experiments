import {shallow} from '@vue/test-utils';
import Default from '../default.vue';

describe('layout | default', () => {
  it('should match snapshot', () => {
    // when
    const wrapper = shallow(Default);

    // then
    expect(wrapper.element).toBeDefined();
    expect(wrapper.element).toMatchSnapshot();
  });
});
