import React, { FC } from "react";

interface Props {
  name: string;
}

const Hello: FC<Props> = ({ name }) => <div>Hello, {name}</div>;

export default Hello;
