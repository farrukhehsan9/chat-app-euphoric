import React from "react";
import { ListGroup, ListGroupItem, Col, Image } from "react-bootstrap";
import './index.css';

const Header = ({ clickEffect }) => {
  return (
    <Col
    className="header-column"
      xs={2}
      lg={1}
      md={1}
      xl={1}
      style={{ paddingRight: 0, paddingLeft: 0 }}
    >
      <ListGroup className="listGroupCstm">
        <ListGroupItem
          onClick={_ => clickEffect("list1", 0)}
          className="list1BgColor list1HoverEffect hamBurgercstm"
        >
          <i
            className="glyphicon glyphicon-menu-hamburger"
          ></i>
        </ListGroupItem>
        {[
          "https://p7.hiclipart.com/preview/102/349/273/whatsapp-computer-icons-logo-clip-art-whatsapp.jpg",
          "https://cdn.worldvectorlogo.com/logos/facebook-messenger-3.svg",
          "https://lh3.googleusercontent.com/proxy/h-ycqKbDy8-YoFLIJfi_ZXPrQTYHYNvYHycRnvJq3r6P13f-bVvz_rSaUKD2Ds7G-f4wsHiq248S1Y_ctSQXbObdB1juLec1lyuOj9KNLmNpsvQH",
          "https://cdn.iconscout.com/icon/free/png-512/skype-1411851-1194340.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1024px-Netflix_icon.svg.png",
          ""
        ].map((e, i) => {
          return (
            <ListGroupItem
              onClick={_ => i !== 5 && clickEffect("list1", 1 + i)}
              key={e}
              style={{ height: i === 5 ? "100%" : "", textAlign: "center" }}
              className={`list1BgColor ${i !== 5 ? "list1HoverEffect" : ""}`}
            >
              <Image
                roundedCircle
                width={30}
                src={e}
                style={{ visibility: i === 5 ? "hidden" : "visible" }}
              />
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Col>
  );
};

export default Header;
