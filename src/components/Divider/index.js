import React from "react";
import { ListGroupItem } from "react-bootstrap";

const Divider = () => {
  return (
    <ListGroupItem className="list2BgColor">
      <hr
        style={{
          backgroundColor: "#4c4c4c",
          height: 3,
          marginLeft: 5,
          marginRight: 5
        }}
      />
    </ListGroupItem>
  );
};

export default Divider;
