import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid var(--outline);
`;

export const Tab = styled.div`
  text-align: center;

  width: 100%;

  margin-top: 10px;
  padding: 11px 0 15px;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  &.active {
    color: var(--twitter);
    border-bottom: 2px solid var(--twitter);
  }

  :hover {
    color: var(--twitter);
    background-color: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
`;
