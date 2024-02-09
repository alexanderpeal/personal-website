// https://react-type-animation.netlify.app/

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const ref = React.createRef<HTMLSpanElement>(); // HTMLSpanElement because 'span' is the default wrapper element of the <TypeAnimation/> component
 
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
 
const showCursorAnimation = (show: boolean) => {
    if (!ref.current) {
    return;
    } 
 
    const el = ref.current;

    if (show) {
        el.classList.add(CURSOR_CLASS_NAME);
    } else {
        el.classList.remove(CURSOR_CLASS_NAME);
    }
};
 

const NameComponent = () => {
  return (
    <>
      <TypeAnimation
        ref={ref}
        cursor={false}
        className={CURSOR_CLASS_NAME}
        sequence={[
          'a',
          'alexander peal.',
          5000,
          () => showCursorAnimation(false)
        ]}
        wrapper="span"
        repeat={0}
        preRenderFirstString={true}
      />

      {<style global jsx>{`
        .custom-type-animation-cursor::after {
          content: '|';
          animation: cursor 1.1s infinite step-start;
        }
        @keyframes cursor {
          50% {
            opacity: 0;
          }
        }
      `}</style>}
    </>
  );
};

export default NameComponent;