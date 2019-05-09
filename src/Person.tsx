import "./Person.css";

import React from "react";
import { connect } from "react-redux";

interface IBaseProps {
  children: React.ReactNode;
  type: "name" | "nickname";

  // From connect
  theme?: "dark" | "light";
}

export interface INameProps extends IBaseProps {
  type: "name";
  name: string;
}

export interface INicknameProps extends IBaseProps {
  type: "nickname";
  nickname: string;
}

type IProps = INameProps | INicknameProps;

export function UnconnectedPerson(props: IProps) {
  const { theme = "light", children } = props;

  return (
    <div className={`person person--theme-${theme}`}>
      {isName(props) && <p>Name: {props.name}</p>}
      {isNickname(props) && <p>Nickname: {props.nickname}</p>}
      {children}
    </div>
  );
}

export const ConnectedPerson = connect((state: {}) => {
  return {
    theme: "dark" // e.g. `selectTheme(state)`
  };
})(UnconnectedPerson);

function isName(arg: any): arg is INameProps {
  return arg.type === "name";
}

function isNickname(arg: any): arg is INicknameProps {
  return arg.type === "nickname";
}
