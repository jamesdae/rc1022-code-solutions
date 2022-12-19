import React, { useState } from 'react';

function EachTopic({ name, description, isOpen, onShow }) {
  if (isOpen) {
    return (
      <div className='column'>
        <h1 className='header' onClick={onShow}>{name}</h1>
        <p className='par'>{description}</p>
      </div>
    );
  } else {
    return (
      <div className='column'>
        <h1 className='header' onClick={onShow}>{name}</h1>
      </div>
    );
  }
}

export default function Accordion(props) {
  const [activeIndex, setActiveIndex] = useState(null);
  return props.topics.map((topic, index) =>
    <EachTopic
    key={index}
    name={topic.name}
    description={topic.description}
    isOpen={activeIndex === index}
    onShow={() => {
      if (activeIndex === index) {
        setActiveIndex(null);
        return;
      }
      setActiveIndex(index);
    }} />);
}
