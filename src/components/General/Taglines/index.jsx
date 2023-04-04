import React from 'react';

import { taglines } from '../../../utils/data/Taglines/taglines';

import TaglineItem from './TaglineItem';

export const Taglines = () => {
  return (
    <section className="taglines">
      <div className="taglines-list">
        {taglines.map((item, index) => (
          <TaglineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
