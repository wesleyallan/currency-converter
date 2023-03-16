import styled from "styled-components";

export const Container = styled.div`
  & .tooltip {
    background-color: ${({ theme }) => theme.colors.foreground};
    box-shadow: 0 .4rem 1.6rem rgb(15 23 42 / .15);
    border-radius: .4rem;
    padding: .8rem;
  }
`;

export const ChartControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -2.2rem .8rem 0 4rem;
`;

export const Control = styled.button`
  background-color: transparent;
  border: 0;
  width: 4rem;
  height: 2.4rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-align: center;
  cursor: pointer;
  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.focus};
    color: ${({ theme }) => theme.colors.foreground};
    border-radius: 999px;
    padding: .4rem .8rem;
  }
`;