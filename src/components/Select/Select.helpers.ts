import React, { ReactElement } from 'react';

export function getDisplayedValue(value: string, children: React.ReactNode) {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find((child) => child.props.value === value);

  return selectedChild.props.children;
}
