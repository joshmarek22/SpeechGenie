import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, classProperty }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  if (currentIndex < text.length) {
    const timeout = setTimeout(() => {
      setCurrentText(prevText => prevText + text[currentIndex]);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }
}, [currentIndex, delay, text]);

  return <span className={classProperty}>{currentText}</span>;
};

export default Typewriter;