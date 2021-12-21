import styled from 'styled-components';
import { motion } from 'framer-motion';

const initial = { background: '#00f' };
const animate = { background: '#333', borderRadius: 45, rotate: 360 };
const transition = { duration: 4, repeat: Infinity, repeatType: 'mirror' };

function App() {
  const someProps = { doThing: true };
  return (
    <Container>
      <MotionBox
        // causes warning to display in the console
        someProps={someProps}
        initial={initial}
        animate={animate}
        transition={transition}
      ></MotionBox>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`;

const MotionBox = styled(motion.div)`
  height: 25vw;
  width: 25vw;
`;

export default App;
