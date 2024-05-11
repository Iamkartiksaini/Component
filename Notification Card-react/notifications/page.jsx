import NotificationComponent from '@/components/notification/notificationCard'
import { fetchUsernotifications } from '@/lib2/actions/notification.action'
import React from 'react';
import "./page.scss";

const Page = async () => {

    const res = await fetchUsernotifications()
    const { data, success } = JSON.parse(res)

    if (!success) {
        throw new Error(data)
    }

    return (
        <div className='Notifications'>
            <div className='communtiy-header'>
                <h1>Notifications </h1>
                <div className="search-query flex gap-2">
                    <button className='p-button button'>Mark all as read</button>
                    <button className='p-button button'>Clear All</button>
                </div>
            </div>
            <div className="notificationList">
                {data.notifications.length === 0 ?
                    <p style={{ color: "var(--textColor)" }}>No Notification</p> :
                    data.notifications.map((notification, index) => {
                        return <div className='notification' key={index}>
                            <NotificationComponent notification={notification} />
                        </div>
                    })}
            </div>
        </div>
    )
}

export default Page