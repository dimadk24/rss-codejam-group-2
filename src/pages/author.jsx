import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Header from '../components/componentsForAuthor/header';

const Author = ({ location }) => {
  const data = location.state.author;
  return (
    <div>
      <Header data={data} />
      <Timeline lineColor="#ddd">
        {data.biography.map(biography => (
          <TimelineItem
            key={biography.id}
            dateText={`${biography.year}`}
            style={{ color: '#e86971' }}
          >
            <h3>{biography.event}</h3>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

Author.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Author;
