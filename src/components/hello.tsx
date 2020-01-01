import React, { FC } from "react";
import { css } from "@emotion/core";

interface Props {
  name: string;
}

const Hello: FC<Props> = ({ name }) => (
  <div css={styles.root}>Hello, {name}</div>
);

const styles = {
  root: css`
    color: tomato;
  `
};

export default Hello;
