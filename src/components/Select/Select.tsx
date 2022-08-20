import React from 'react';
import { styled } from '../../../stitches.config';

import Icon from '../Icon/index.js';
import { getDisplayedValue } from './Select.helpers';

type SelectProps = {
  label: string;
  value: string;
  onChange: () => void;
};

const Wrapper = styled('div', {
  position: 'relative',
  width: 'max-content',
});

const NativeSelect = styled('select', {
  opacity: 0,
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  WebkitAppearance: 'none',
});

const StyledSelect = styled('div', {
  color: '$gray700',
  backgroundColor: '$transparentGray15',
  fontSize: '1rem',
  padding: '12px 16px',
  paddingRight: '52px',
  borderRadius: '8px',
  [`${NativeSelect}:hover + &`]: {
    color: '$black',
  },

  [`${NativeSelect}:focus + &`]: {
    outline: '1px dotted #212121',
    outline: '5px auto -webkit-focus-ring-color',
  },
});

const IconWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  right: 10,
  bottom: 0,
  margin: 'auto',
  height: '24px',
  width: '24px',
  pointerEvents: 'none',
});

const Select = ({
  label,
  value,
  onChange,
  children,
}: React.PropsWithChildren<SelectProps>) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <StyledSelect>
        {displayedValue}
        <IconWrapper>
          <Icon id={'chevron-down'} size={24} />
        </IconWrapper>
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
