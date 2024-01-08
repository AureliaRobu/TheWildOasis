import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;
export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp className="app">
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert('Check in !!!')}>Check In</Button>
        <Button onClick={() => alert('Check out !!!')}>Check Out</Button>
        <Input type="text" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}
