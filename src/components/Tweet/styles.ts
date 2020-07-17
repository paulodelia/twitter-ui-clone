import styled, { css } from 'styled-components';

import { Chat, Retweet, Favorite } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  :not(:last-of-type) {
    border-bottom: 1px solid var(--outline);
  }

  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  > svg {
    height: 16px;
    width: 16px;

    margin-left: 35px;
    margin-right: 9px;

    > path {
      fill: var(--gray);
    }
  }
`;

export const Body = styled.div`
  display: flex;

  margin-top: 3px;
  position: relative;
`;

export const Avatar = styled.div`
  height: 49px;
  width: 49px;
  border-radius: 50%;

  flex-shrink: 0;
  background-color: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  height: 2px;
  width: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  height: min(285px, max(175px, 41vw));
  width: 100%;

  background-color: var(--outline);
  border-radius: 14px;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 11px auto 0;
  width: 100%;

  @media (min-width: 400px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const iconCSS = css`
  height: 19px;
  width: 19px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    ${iconCSS}
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);

    &,
    svg path {
      fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);
    &,
    svg {
      fill: var(--like);
    }
  }
`;

export const CommentIcon = styled(Chat)``;

export const RetweetIcon = styled(Retweet)``;

export const LikeIcon = styled(Favorite)``;
