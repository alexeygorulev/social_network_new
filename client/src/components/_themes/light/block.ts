import authBackground from '../../_commons/auth_back.png';
import authFormBackground from '../../_commons/auth_form.png';
import { colors, gradients } from './_colors';
import { styles as typographyStyles, textAligns } from './_typography';
import { fontWeights, fontStyles } from './_fonts';
import { mediaSizes } from '../constants';

export const styles = {
  generalColors: { ...colors },
  gradients: { ...gradients },
  textAlign: { ...textAligns },
  fontWeight: { ...fontWeights },
  fontStyle: { ...fontStyles },
  display: { block: 'block', inline: 'inline-block' },
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
  margin: { xs: 8, s: 16, m: 24, l: 32, xl: 40 },
  padding: { xs: 8, s: 16, m: 24, l: 32, xl: 40 },
  background: {
    authBackgroundLayout: authBackground,
    authFormBackground: authFormBackground,
    defaultBackground: colors.white,
  },
  fontFamily: typographyStyles.paragraphFontFamily,
  colors: typographyStyles.colors,
};
