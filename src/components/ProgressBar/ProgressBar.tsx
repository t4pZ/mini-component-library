import React from 'react';
import { styled } from '../../../stitches.config';

import VisuallyHidden from '../VisuallyHidden';

type ProgressBarProps = {
  value: number;
  size: 'small' | 'medium' | 'large';
};

const Wrapper = styled('div', {
  backgroundColor: '$transparentGray15',
  boxShadow: 'inset 0px 2px 4px $transparentGray35',
  variants: {
    size: {
      small: {
        borderRadius: '4px',
        padding: 0,
      },
      medium: {
        borderRadius: '4px',
        padding: 0,
      },
      large: {
        borderRadius: '4px',
        padding: '4px',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

const BarWrapper = styled('div', {
  overflow: 'hidden',
  borderRadius: '4px',
});

const Bar = styled('div', {
  backgroundColor: '$primary',
  borderRadius: '4px 0 0 4px',
  variants: {
    size: {
      small: {
        height: '8px',
      },
      medium: {
        height: '12px',
      },
      large: {
        height: '16px',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

const ProgressBar = ({ value, size }: ProgressBarProps) => {
  return (
    <Wrapper size={size}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar size={size} css={{ width: `${value}%` }} />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
