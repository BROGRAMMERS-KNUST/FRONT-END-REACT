import styled from "@emotion/styled";
export const Box = styled.div`
  padding: 10px 10px;
  background: cornflowerblue;
  position: relative;
  bottom: 0;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 20px 30px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: justify;
  max-width: 1000px;
  margin: 0 auto;
  /*background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;
export const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 40px;
  padding-left: 0px;
  font-weight: bold;
`;
