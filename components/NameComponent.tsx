import { TypeAnimation } from 'react-type-animation';
 
const NameComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'a',
        'alexander peal.',
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={false}
      repeat={0}
      preRenderFirstString={true}
      // style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};

export default NameComponent;