import React, { memo } from 'react';

import './style.scss';

export interface TagProps {
  className?: string;
  color?: string;
  textColor?: string;
  children: React.ReactNode;
}

const Tag = memo(function Tag(props: TagProps) {
  return (
    <div
      style={{ backgroundColor: props.color, color: props.textColor }}
      className={`${props.className || ''} tag`}
    >
      {props.children}
    </div>
  );
});

export default Tag;
