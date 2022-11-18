import styled from "styled-components";
import PropTypes from "prop-types";

export const HeroContainer = styled.div`
  margin-top: 40px;
`;

export const HeroContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-left: 80px;
  margin-right: 80px;
  @media (max-width: 766px) {
    margin-left: 26px;
    margin-right: 26px;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 40px;
  }

  @media (min-width: 766px) {
    margin-left: 16px;
    margin-right: 16px;
    gap: 20px;
  }
`;

export const Header = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  @media (max-width: 480px) {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
  }
  @media (min-width: 768px) {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${({ colour }) => colour};
  @media (max-width: 480px) {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
  @media (min-width: 768px) {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

Paragraph.propTypes = {
  colour: PropTypes.string,
};

export const HeroSecondContentContainer = styled.div`
  display: flex;
  @media (max-width: 766px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const NextToImageItemBody = styled.div`
  background: rgba(0, 41, 107, 0.75);
  padding-left: 18px;
  padding-right: 18px;
`;
