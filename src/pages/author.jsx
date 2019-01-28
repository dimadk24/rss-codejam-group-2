import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Header from '../components/componentsForAuthor/header';
import '../i18n';

const Author = ({ location, t }) => {
  const data = location.state.author;
  return (
    <div>
      <Header data={data} t={t} />
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
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Author);
