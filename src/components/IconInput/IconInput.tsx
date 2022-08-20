import React from 'react';
import { styled } from '../../../stitches.config';

import Icon, { icons } from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

type IconInputProps = {
  label: string;
  icon: keyof typeof icons;
  width?: number;
  size: 'small' | 'large';
  placeholder: string;
};

const Input = styled('input', {
  appearance: 'none',
  border: 'none',
  color: 'inherit',
  outlineOffset: '2px',
  fontWeight: 700,

  '&:placeholder': {
    fontWeight: 400,
    color: '$gray500',
  },
  variants: {
    size: {
      small: {
        fontSize: '0.875rem',
        height: '1.5rem',
        paddingLeft: '1.5rem',
        borderBottom: '1px solid $black',
      },
      large: {
        fontSize: '1.125',
        height: '2.25rem',
        paddingLeft: '2.25rem',
        borderBottom: '2px solid $black',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

const Wrapper = styled('label', {
  display: 'block',
  position: 'relative',
  color: '$gray700',
  '&:hover': {
    color: '$black',
  },
});

const IconWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  margin: 'auto 0',
  variants: {
    size: {
      small: {
        height: '16px',
      },
      large: {
        height: '24px',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}: IconInputProps) => {
  const iconSize = size === 'small' ? 16 : 24;
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper size={size}>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      <Input
        size={size}
        type="text"
        placeholder={placeholder}
        css={{ width: `${width}px` }}
      />
    </Wrapper>
  );
};

export default IconInput;
