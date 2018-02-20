import {shallow} from '@vue/test-utils';
import Logo from '~/components/Logo';

import Home from '../index.vue';

describe('root page', () => {
  it('should match snapshot', () => {
    // when
    const wrapper = shallow(Home);

    // then
    expect(wrapper.element).toBeDefined();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should be named Home', () => {
    // when
    const wrapper = shallow(Home);

    // then
    expect(wrapper.vm.$options.name).toEqual('Home');
  });

  it('should contain logo component', () => {
    // given
    const wrapper = shallow(Home);

    // then
    let logoWrappers = wrapper.findAll(Logo);
    expect(logoWrappers.length).toEqual(1);
  });

  describe('title', () => {
    it('should contain default message', () => {
      // when
      const wrapper = shallow(Home);

      // then
      const title = wrapper.find('h1');
      expect(title.text()).toContain('Welcome'); // default
    });

    it('should update when msg data is changed', () => {
      // when
      const wrapper = shallow(Home);

      // then
      const title = wrapper.find('h1');
      wrapper.setData({msg: 'test'});
      expect(title.text()).toContain('test');
    });
  });

  it('should set head', () => {
    // given
    const wrapper = shallow(Home);
    const context = {
      msg: 'fake msg',
    };
    const headWithContext = wrapper.vm.$options.head.bind(context);

    // when
    const result = headWithContext();

    // then
    return expect(result).toEqual({
      title: 'Dynamic head title : fake msg',
    });
  });
});
