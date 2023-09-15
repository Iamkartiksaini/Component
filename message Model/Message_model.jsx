// Message.js
import React, { useState } from 'react';

const Message = ({ message }) => {
    return (
        <div className="message">
            <div className="message-sender">{message.sender}</div>
            <div className="message-text">{message.text}</div>
        </div>
    );
};

// export default Message;

// MessageModal.js

// import React, { useState } from 'react';
// import Message from './Message';

const MessageModal = ({ receiverName, messages, onSendMessage, onClose }) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            onSendMessage(newMessage);
            setNewMessage('');
        }
    };

    return (
        <div className="message-modal modal-open">
            <div className="modal-header">
                <span className="receiver-name">{receiverName}</span>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
            <div className="message-list">
                {messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

// export default MessageModal;
// FloatingButton.js

// import React, { useState } from 'react';
// import MessageModal from './MessageModal';

const FloatingButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messages, setMessages] = useState([]); // Store messages here
    const [receiverName, setReceiverName] = useState('Receiver Name');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const sendMessage = (message) => {
        // Handle sending messages, e.g., append the new message to the messages state
        setMessages([...messages, { sender: 'You', text: message }]);
    };

    return (
        <div className="floating-button-container">
            <button className="floating-button" onClick={openModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="6" width="16" height="12" rx="2" stroke="#33363F" strokeWidth="2" />
                    <path d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9" stroke="#33363F" strokeWidth="2" />
                </svg>

            </button>
            {isModalOpen && (
                <MessageModal
                    receiverName={receiverName}
                    messages={messages}
                    onSendMessage={sendMessage}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default FloatingButton;
