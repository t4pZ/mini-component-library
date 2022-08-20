/**
 * We're given this component "for free" since it's really more
 * specific to React and React Feather. Feel free to read if you're
 * interested, but otherwise you can rely on our docs to learn its
 * API / which props it takes.
 */
import React from 'react';
import { styled } from '../../../stitches.config';
import { Search, AtSign, ChevronDown } from 'react-feather';

export const icons = {
  search: Search,
  'at-sign': AtSign,
  'chevron-down': ChevronDown,
};

type IconProps = {
  id: keyof typeof icons;
  size: number;
  strokeWidth?: number;
};

const Icon = ({ id, size, strokeWidth = 1, ...delegated }: IconProps) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      css={{
        width: `${size}px`,
        height: `${size}px`,
        '& > svg': {
          display: 'block',
          strokeWidth: `${strokeWidth}px`,
        },
      }}
      {...delegated}
    >
      <Component color="currentColor" size={size} />
    </Wrapper>
  );
};

const Wrapper = styled('div', {});

export default Icon;
