import styled from "styled-components";

export const Container = styled.main`
  width: fit-content;
  padding: 6.4rem 8rem;
  border-radius: 1.6rem;
  display: grid;
  gap: 6.4rem;
  background-color: ${({ theme }) => theme.colors.foreground};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  @media (max-width: 768px) {
    padding: 1.6rem;
    gap: 3.2rem;
  }
  & img {
    width: 2.4rem;
    margin: 0 auto;
  }
`;

export const Title  = styled.h2`
  font-size: 2.0rem;
  font-weight: 600;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Wrapper = styled.div`
  margin-top: 1.6rem;
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const MoneyWrapper = styled.div`
  min-width: 25rem;
  outline: 0.1rem solid ${({ theme }) => theme.colors.border};
  border-radius: 0.8rem;
  position: relative;
  &:hover,
  &:has(:focus) {
    outline: 0.25rem solid ${({ theme }) => theme.colors.focus};
  }
  &::before {
    content: attr(data-symbol);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 1.6rem;
  }
`;

export const InputMoney = styled.input`
  padding: 1.6rem 1.6rem 1.6rem 5.2rem;
  width: 20rem;
  outline: none;
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export const ImgConverter = styled.img`
  cursor: pointer;
`;