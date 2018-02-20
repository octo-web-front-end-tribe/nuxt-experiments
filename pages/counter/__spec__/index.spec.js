import {shallow} from '@vue/test-utils';
import ButtonCounter from '~/components/ButtonCounter';

import Counter from '../index';

describe('pages | counter', () => {
  it('should match snapshot', () => {
    // when
    const wrapper = shallow(Counter);

    // then
    expect(wrapper.element).toBeDefined();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should be named Counter', () => {
    // when
    const wrapper = shallow(Counter);

    // then
    expect(wrapper.vm.$options.name).toEqual('Counter');
  });

  it('should use layout other', () => {
    // when
    const wrapper = shallow(Counter);

    // then
    expect(wrapper.vm.$options.layout).toEqual('other');
  });

  describe('asyncData', () => {
    it('should initialize data with API value asynchronously', async () => {
      // given
      const $axios = {
        get: jest.fn(),
      };

      $axios.get.mockReturnValue(Promise.resolve({ data: '11' }));

      const wrapper = shallow(Counter);

      // when
      const asyncData = await wrapper.vm.$options.asyncData({app: {$axios}});

      // then
      expect($axios.get).toHaveBeenCalledWith('http://www.mocky.io/v2/5a01affc300000da45fac0cf');
      expect(asyncData).toEqual({ total: '11' });
    });
  });

  describe('data', () => {
    it('should initialize counter to 0', () => {
      // when
      const wrapper = shallow(Counter);

      // then
      const paragraph = wrapper.find('p');
      expect(paragraph.text()).toContain('0');
    });

    it('should inject total data', () => {
      // given
      const wrapper = shallow(Counter);
      const total = 42;

      // when
      wrapper.setData({total});

      // then
      const paragraph = wrapper.find('p');
      expect(paragraph.text()).toContain('42');
    });
  });

  it('should increment counter on event increment from either buttons', () => {
    // given
    const wrapper = shallow(Counter);
    const buttonCounters = wrapper.findAll(ButtonCounter);

    // when
    buttonCounters.at(0).vm.$emit('increment');
    buttonCounters.at(1).vm.$emit('increment');
    wrapper.update();

    // then
    const paragraph = wrapper.find('p');
    expect(paragraph.text()).toContain('2');
  });
});
