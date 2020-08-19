import React from "react";
import { Row, Col, ListGroup, ListGroupItem, Image, Button, Badge } from "react-bootstrap";
import "./dashboard.css";
import Header from "../../components/Header";
import MenuList from "../../components/MenuList";
import Divider from "../../components/Divider";
import ChatSection from "../../components/ChatSection";

const Dashboard = () => {

    const clickEffect = (name, index) => {
        let elements = Array.from(document.querySelectorAll(`.${name}HoverEffect`));
        elements.map((element, ind) => {
            if (ind === index) {
                element.style.background = '#343d46';
                (name === 'list3') && (element.style.borderLeft = '3px solid blue');
            }
            else {
                element.style.background = (name === 'list1') ? '#1c232b' : (name === 'list3') ? '#2c333b' : '#222931';
                (name === 'list3') && (element.style.borderLeft = 'none');
            }
        })
    }

    return (
        <Row style={{ margin: 0 }}>
            <Header clickEffect={clickEffect}/>
            {!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent) && <Col lg={2} md={2} xl={2} style={{ padding: 0 }}>
                <ListGroup variant="flush" className="dashListGrp">
                    <ListGroupItem className="list2BgColor inboxCstm">
                        <div className="d-flex align-items-center justify-content-between">
                            <h1 className="text-white pl-3">Inbox</h1>
                            <Button style={{ borderRadius: '100%' }} variant="dark">
                                <i className="glyphicon glyphicon-user" style={{ fontSize: 20, color: 'white' }}></i>
                            </Button>
                        </div>
                    </ListGroupItem>
                    <MenuList clickEffect={clickEffect}/>
                    <Divider/>
                    {['Teams', 'Group', 'Channel', 'Location', 'Media'].map((e, i) => {
                        return <ListGroupItem onClick={_ => clickEffect('list2', 4 + i)} key={e} className="list2BgColor list2HoverEffect">
                            <div className="d-flex align-items-center justify-content-between">
                                <h3 className="list2TextColor pl-3">{e}</h3>
                                {e !== 'Location' && <h3 className="list2TextColor pr-3">25</h3>}
                            </div>
                        </ListGroupItem>
                    })}
                    <Divider/>
                    {['Help', 'Settings', ''].map((e, i) => {
                        return <ListGroupItem onClick={_ => i !== 2 && clickEffect('list2', 9 + i)} key={e} style={{ height: i === 2 ? '100%' : '' }} className={`list2BgColor ${i !== 2 ? 'list2HoverEffect' : ''}`}>
                            <h3 className="list2TextColor pl-3">{e}</h3>
                        </ListGroupItem>
                    })}
                </ListGroup>
            </Col>}
            {!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent) && <Col lg={3} md={3} xl={3} style={{ padding: 0, backgroundColor: '#F6F6F6' }} className="mainLast">
                <ListGroup variant="flush" className="dashChildGrp" style={{ height: '100%' }}>
                    <ListGroupItem className="list3BgColor cstmSearchBar">
                        <div className="d-flex">
                            <i className="glyphicon glyphicon-search searchBoxIcon"></i>
                            <input placeholder="Search" className="searchBox" />
                        </div>
                    </ListGroupItem>
                    <ListGroupItem className="list3BgColor px-0">
                        <hr style={{ backgroundColor: '#4c4c4c', height: 1 }} />
                    </ListGroupItem>
                    {[1, 2, 3, 4, 5, 6, 7].map((e, i) => {
                        return <ListGroupItem onClick={_ => e !== 7 && clickEffect('list3', i)} key={e} style={{ height: e === 7 ? '100%' : '' }} className={`list3BgColor ${e !== 7 ? 'list3HoverEffect' : ''}`}>
                            {e !== 7 && <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center p-2">
                                    <Badge style={{ position: 'absolute', top: 5, left: 15, margin: -3, borderRadius: 10 }} variant="success"><span style={{ visibility: 'hidden' }}>s</span></Badge>
                                    <Image roundedCircle width={40} style={{ marginBottom: 10 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfmJO1vZOid-nPBHG4aMhenFmy5zW4qPg_-g&usqp=CAU" />
                                    <div style={{ marginLeft: 10 }}>
                                        <h6 className="text-white senderName">Username</h6>
                                        <p className="list2TextColor msgHint">Message</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <i className="glyphicon glyphicon-option-horizontal" style={{ fontSize: 17, color: 'white' }}></i>
                                    <p className="list2TextColor">5:12 pm</p>
                                </div>
                            </div>}
                        </ListGroupItem>
                    })}
                </ListGroup>
            </Col>}
           <ChatSection/>
            <Col lg={2} md={4} xl={2} style={{ padding: 0 }}>
                <ListGroup variant="flush" style={{ height: '100%', padding: 15 }}>
                    <ListGroupItem style={{ borderBottom: '2px solid grey' }}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <Badge style={{ position: 'absolute', top: 8, left: 8, margin: -3, borderRadius: 10 }} variant="primary"><span style={{ visibility: 'hidden' }}>s</span></Badge>
                                <i className="glyphicon glyphicon-bell" style={{ fontSize: 30 }}></i>
                            </div>
                            <h4>Username</h4>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className="d-flex justify-content-between align-items-center">
                            <Image width={20} roundedCircle src="https://cdn.worldvectorlogo.com/logos/facebook-messenger-3.svg" />
                            <i className="glyphicon glyphicon-option-horizontal" style={{ fontSize: 20 }}></i>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className="d-flex justify-content-center">
                            <Image width={100} roundedCircle src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfmJO1vZOid-nPBHG4aMhenFmy5zW4qPg_-g&usqp=CAU" />
                        </div>
                    </ListGroupItem>
                    <ListGroupItem style={{ textAlign: 'center', borderBottom: '2px solid grey' }}>
                        <h3>Username</h3>
                        <h4 className="list2TextColor">Location</h4>
                    </ListGroupItem>
                    {['Nickname', 'Tel', 'Date of Birth', 'Gender', 'Language'].map(e => {
                        return <ListGroupItem key={e} style={{ paddingRight: 0 }}>
                            <div className="d-flex align-items-center justify-content-between">
                                <h3>{e}</h3>
                                <h3>Example</h3>
                            </div>
                        </ListGroupItem>
                    })}
                </ListGroup>
            </Col>
        </Row>
    );
}

export default Dashboard;


