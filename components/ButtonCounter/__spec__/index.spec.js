import {shallow} from '@vue/test-utils';
import ButtonCounter from '../index';

describe('ButtonCounter', () => {
  it('should match snapshot', () => {
    // when
    const wrapper = shallow(ButtonCounter);

    // then
    expect(wrapper.element).toBeDefined();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should initialize counter to 0', () => {
    // when
    const wrapper = shallow(ButtonCounter);

    // then
    const button = wrapper.find('.test');
    expect(button.text()).toContain('0');
  });

  describe('on click', () => {
    it('should increment counter on click', () => {
      // given
      const wrapper = shallow(ButtonCounter);
      const button = wrapper.find('.test');

      // when
      button.trigger('click');

      // then
      expect(button.text()).toContain('1');
    });

    it('should emit an event increment on click', () => {
      // given
      const wrapper = shallow(ButtonCounter);
      const button = wrapper.find('.test');
      const spy = jest.fn();
      wrapper.vm.$on('increment', spy);

      // when
      button.trigger('click');

      // then
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
