import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  position: absolute;
  right: 0rem;
  top: 0rem;
  overflow: hidden;
  img {
    transition: transform 0.2s ease-in-out;
  }
  &:hover,
  &:has(:focus) {
    height: fit-content;
    overflow: initial;
    img {
      transform: rotate(90deg);
    }
  }
`;

export const Flag = styled.span`
  border-radius: 50%;
  &.fi-fis {
    width: 2.4rem;
  }
`;

export const Name = styled.span`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const List = styled.ul`
  width: 100%;
  max-height: 17rem;
  overflow-y: scroll;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.foreground};
  box-shadow: ${({ theme }) => theme.shadows.secondary};
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

export const Item = styled.li`
  padding: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.selected};
  }
  ${List} &:first-child {
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }
`;

export const Selected = styled(Item)`
  border-radius: 0.8rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.2rem;
    height: 2.4rem;
    background-color: ${({ theme }) => theme.colors.border};
  }
`;