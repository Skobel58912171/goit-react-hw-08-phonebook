import { Heading } from '@chakra-ui/layout';
import { GiBookmarklet } from 'react-icons/gi';
import { Container } from './HomeData.styled';
export const HomeData = () => {
  return (
    <Container>
      <Heading
        bgGradient="linear(to-t, yellow.500, blue.200)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Contacts manager, <br /> welcome page{' '}
      </Heading>
      <GiBookmarklet fill="#d69e2e" size={200} />
    </Container>
  );
};
