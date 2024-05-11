import formatTimeAgo from '@/const/dateTime';
import CustomUserRoundProfileImage from '@/utils/custom-user-image';
import Link from 'next/link';
import React from 'react';
const NotificationComponent = ({ notification }) => {
    const { sender, message, createdAt } = notification
    let notificationMessage;

    switch (notification.notificationType) {
        case 'like':
            notificationMessage = `liked your post.`;
            break;
        case 'comment':
            notificationMessage = `commented on your thread : "${message}"`;
            break;
        case 'request':
            notificationMessage = `sent you a friend request.`;
            break;
        default:
            notificationMessage = 'New notification';
    }

    return (
        <>
            <CustomUserRoundProfileImage src={sender?.profilePic || "man-user.png"} />
            <div className="notification-body">
                <Link className='profileLink font-bold' href={"/dashboard/profile/" + sender.username} prefetch={false}>{sender.username}</Link>
                <p className="notification-message">{notificationMessage}</p>
            </div>
            <div className="notification-footer">
                <p className="notification-time">{formatTimeAgo(createdAt)}</p>
                <Link className='viewThreadBtn' href={"/thread/" + notification.thread} prefetch={false}>View</Link>
            </div>
        </>
    );
};

export default NotificationComponent;
