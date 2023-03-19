import { extendTheme } from '@chakra-ui/react'

import { styles } from './style';
import blur from './foundations/blur';
import borders from './foundations/border';
import breakpoints from './foundations/breakpoints';
import colors from './foundations/colors';
import radii from './foundations/radius';
import shadows from './foundations/shadows';
import sizes from './foundations/sizes';
import { spacing } from './foundations/spacing';
import transition from './foundations/transition';
import typography from './foundations/typography';
import zIndices from './foundations/z-index';

const overrides = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  blur,
  borders,
  breakpoints,
  colors,
  radii,
  shadows,
  sizes,
  spacing,
  transition,
  typography,
  zIndices,
  styles,

  // Other foundational style overrides go here
  components: {
    // Other components go here
  },
}

export default extendTheme(overrides)