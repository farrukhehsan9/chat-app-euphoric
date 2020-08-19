import React from 'react';
import ChatHeader from './ChatHeader';
import { Col, Image, Button } from 'react-bootstrap';
import ChatInput from './ChatInput';
import './index.css';
const ChatSection = () => {
    return (
        <Col xs={12} lg={6} md={6} xl={4} style={{ padding: 0 }}>
        {/* Chat Section */}
        <div style={{ background: '#e1e4eb', height: '100%' }}>
            {/* Chat Header */}
          <ChatHeader/>
            <div style={{ fontSize: 13, padding: 10 }}>
                {/* Chat Messages */}
                <div className="d-flex">
                    <div>
                        <Image roundedCircle width={40} style={{ marginBottom: 10 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfmJO1vZOid-nPBHG4aMhenFmy5zW4qPg_-g&usqp=CAU" />
                        <p>5:40pm</p>
                    </div>
                    <div className="bubble me">Hello there!</div>
                </div>
                <div className="d-flex">
                    <div>
                        <Image roundedCircle width={40} style={{ marginBottom: 10 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfmJO1vZOid-nPBHG4aMhenFmy5zW4qPg_-g&usqp=CAU" />
                        <p>5:40pm</p>
                    </div>
                    <div className="bubble me">How are you?</div>
                </div>
                <div className="d-flex justify-content-end">
                    <div className="bubble you">I am fine what about you.</div>
                    <div>
                        <Image roundedCircle width={40} style={{ marginBottom: 10 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfmJO1vZOid-nPBHG4aMhenFmy5zW4qPg_-g&usqp=CAU" />
                        <p>5:42pm</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div>
                        <Image roundedCircle width={40} style={{ marginBottom: 10 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfmJO1vZOid-nPBHG4aMhenFmy5zW4qPg_-g&usqp=CAU" />
                        <p>5:42pm</p>
                    </div>
                    <div className="bubble me">Awesome.</div>
                </div>
                <div className="d-flex justify-content-end">
                    <div className="bubble you">
                        <div className="d-flex">
                            <Image width={70} style={{ marginBottom: 10 }} src="https://static-cse.canva.com/image/20798/Facebook-Ad.png" />
                            <div>
                                <h3 className="text-white">Ready to Die</h3>
                                <p className="list2TextColor">The Nutrious B I G</p>
                                <div className="d-flex align-items-center">
                                    <Image width={40} src="https://www.pngmart.com/files/7/Rating-Star-Transparent-Images-PNG.png" />
                                    <p className="list2TextColor">95 ratings</p>
                                </div>
                                <Button variant="info">$12.99 - BUY NOW</Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image roundedCircle width={40} style={{ marginBottom: 10 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfmJO1vZOid-nPBHG4aMhenFmy5zW4qPg_-g&usqp=CAU" />
                        <p>5:42pm</p>
                    </div>
                </div>

                {/* Chat Input box */}
                <ChatInput/>
            </div>
        </div>
    </Col>
    );
}

export default ChatSection;