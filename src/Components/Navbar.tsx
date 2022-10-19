import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #e8fdff;
  border-bottom: 1px solid #000000;
`;
export const Name = styled.div`
  margin-left: 30px;
  font-weight: bold;
  color: #000000;
  letter-spacing: 1px;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
`;

const Navbar: React.FC = () => {
  return (
    <>
      <Container>
        <Name>CRUD TS</Name>
      </Container>
    </>
  );
};

export default Navbar;
