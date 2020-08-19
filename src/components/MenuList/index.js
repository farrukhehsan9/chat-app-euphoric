import React, { Fragment, useState } from "react";
import { ListGroupItem } from "react-bootstrap";

const MenuList = ({clickEffect}) => {

    const [items,setItems]=useState(["All Messages", "Unread", "Important", "Drafts"]);

  return (
    <Fragment>
      {items.map((e, i) => {
        return (
          <ListGroupItem
            onClick={_ => clickEffect("list2", i)}
            key={e}
            className="list2BgColor list2HoverEffect"
          >
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="list2TextColor pl-3">{e}</h3>
              <h3 className="list2TextColor pr-3">25</h3>
            </div>
          </ListGroupItem>
        );
      })}
    </Fragment>
  );
};

export default MenuList;
