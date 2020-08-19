import React from 'react';
import './index.css';

const ChatHeader = () => {
    return (
        <div className="d-flex justify-content-between align-items-center box-border" >
        <h4 className="pl-4"><b>User</b> is typing...</h4>
        <div className="d-flex">
            <i className="glyphicon glyphicon-star p-4 box-border" ></i>
            <i className="glyphicon glyphicon-earphone p-4 box-border" ></i>
            <i className="glyphicon glyphicon-facetime-video p-4 box-border" ></i>
        </div>
    </div>
    );
}

export default ChatHeader;