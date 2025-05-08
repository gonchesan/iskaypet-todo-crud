import React from 'react';
import WIPIcon from '@/assets/wip.svg?react';

const EmptyState: React.FC<{ description: string }> = ({
  description = '',
}) => {
  return (
    <div>
      <h2>{description}</h2>

      <WIPIcon />
    </div>
  );
};

export default EmptyState;
