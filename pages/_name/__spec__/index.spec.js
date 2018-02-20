import {shallow} from '@vue/test-utils';
import Multiselect from 'vue-multiselect';

import Welcome from '../index.vue';

describe('/_name', () => {
  let $route = {
    params: {},
  };

  it('should match snapshot', () => {
    // when
    const wrapper = shallow(Welcome, { mocks: { $route } });

    // then
    expect(wrapper.element).toBeDefined();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should be named Welcome', () => {
    // when
    const wrapper = shallow(Welcome, { mocks: { $route } });

    // then
    expect(wrapper.vm.$options.name).toEqual('Welcome');
  });

  describe('title', () => {
    it('should contain default message', () => {
      // when
      const wrapper = shallow(Welcome, { mocks: { $route } });

      // then
      const title = wrapper.find('.title');
      expect(title.text()).toContain('Welcome');
    });

    it('should update when selectedOption data is changed', () => {
      // given
      const wrapper = shallow(Welcome, { mocks: { $route } });

      // when
      wrapper.setData({selectedOption: 'Bonjour'});

      // then
      const title = wrapper.find('.title');
      expect(title.text()).toContain('Bonjour');
    });

    it('should contain name in url params', () => {
      // given
      $route = {
        params: {
          name: 'nuxt',
        },
      };

      // when
      const wrapper = shallow(Welcome, { mocks: { $route } });

      // then
      const title = wrapper.find('.title');
      expect(title.text()).toContain('nuxt');
    });
  });

  it('should contains Multiselect with proper props', () => {
    // when
    const wrapper = shallow(Welcome, { mocks: { $route } });

    // then
    const selectWrapper = wrapper.find(Multiselect);

    const selectModel = selectWrapper.vm.$vnode.data.model.value;
    expect(selectModel).toBe('Welcome');

    const selectAttributes = selectWrapper.vm.$attrs;
    expect(selectAttributes.options).toEqual(['Welcome', 'Bonjour', 'Ciao']);
    expect(selectAttributes.searchable).toBe(false);
    expect(selectAttributes['allow-empty']).toBe(false);

    const selectOptions = selectWrapper.vm.$options.propsData;
    expect(selectOptions.deselectLabel).toBe('');
    expect(selectOptions.selectLabel).toBe('');
    expect(selectOptions.selectedLabel).toBe('');
  });
});
