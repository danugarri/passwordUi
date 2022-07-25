import { renderHook } from '@testing-library/react-hooks';
import { useBannerStyles } from './useBannerStyles';
import { reduxWrapper } from '../../../test/utils/redux';

describe('The useBannerStyles hooks', () => {
  test('the bannerStyles property', () => {
    const { result } = renderHook(() => useBannerStyles(), {
      wrapper: reduxWrapper,
    });
    console.log(result.current);
    expect(result.current.bannerStyles).toEqual({
      detailStyle1: '',
      detailStyle2: '',
      activeStep1: 'active',
      activeStep2: '',
      activeStep3: '',
      checkStyle1: 1,
      checkStyle2: 2,
    });
    expect(result.current).toHaveProperty('bannerStyles');
  });
  test('the stepsState property', () => {
    const { result } = renderHook(() => useBannerStyles(), {
      wrapper: reduxWrapper,
    });
    console.log(result.current);
    expect(result.current.stepsState).toEqual({ step1: true, step2: false, step3: false });
    expect(result.current).toHaveProperty('stepsState');
  });
});
