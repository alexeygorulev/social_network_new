import { mediaSizes } from '../constants';
import { fonts, fontWeights, fontStyles } from './_fonts';
import { colors } from './_colors';

export const styles = {
  font: { ...fonts },
  color: { ...colors },
  fontWeight: { ...fontWeights },
  fontStyle: { ...fontStyles },
  size: {
    [mediaSizes.s]: { xs: 12, s: 14, m: 16, l: 18, xl: 20 },
    [mediaSizes.m]: { xs: 12, s: 14, m: 16, l: 18, xl: 20 },
    [mediaSizes.l]: { xs: 12, s: 14, m: 16, l: 18, xl: 20 },
  },
  lineHeight: {
    [mediaSizes.s]: { xs: 16, s: 20, m: 24, l: 28, xl: 32 },
    [mediaSizes.m]: { xs: 16, s: 20, m: 24, l: 28, xl: 32 },
    [mediaSizes.l]: { xs: 16, s: 20, m: 24, l: 28, xl: 32 },
  },
};
