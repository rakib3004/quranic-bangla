import React from 'react'
import { Tooltip } from "keep-react";

const ToolTip = ({ word, definition }) => {
    const formattedDefinition = definition.map((item, index) => (
        <span key={index}>
          {item}
          <br />
        </span>
      ));
  return (
    <Tooltip
    title={word}
    content={formattedDefinition}
    trigger="hover"
    placement="top"
    animation="duration-300"
    style="dark"
  >
  </Tooltip>
  )
}

export default ToolTip;