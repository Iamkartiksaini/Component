import React from 'react'
import styles from "./index.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import { Checkbox } from 'primereact/checkbox';
const ApplicantCard = ({ sectionId, handleDragOver, handleDrop, handleDragStart, value }) => {
    const jobslist = value
    return (
        <>
            <div className={`${styles.jobslist} `}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, value, sectionId)}
            >
                {jobslist.map((data, index) => {
                    const { checked, title, companyName, experience, minSalary, maxSalary, address, postedTime, branches } = data
                    return <div draggable="true" key={index} className={styles.jobCard} onDragStart={(e) =>
                        handleDragStart(e, "candidateCard", data, sectionId)}>
                        <div className={styles.jobCardMain}>
                            <div className={styles.select}>
                                <Checkbox checked={checked} />
                            </div>
                            <div className={styles.jobDetails}>
                                <div className={styles.title}>
                                    <h5>{title}</h5>
                                    <p>{companyName}</p>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.iconInfo}>
                                        <Image src={"/assets/icons/Briefcase Settings.svg"} height={20} width={20} alt='case' />
                                        <span>{experience}</span>
                                    </div>
                                    <div className={styles.iconInfo}>
                                        <Image src={"/assets/icons/Cash.svg"} height={20} width={20} alt='cash' />
                                        <span>{minSalary}</span>
                                        <span>-</span>
                                        <span>{maxSalary}</span>
                                    </div>
                                    <div className={`${styles.iconInfo} ${styles.state}`}>
                                        <Image src={"/assets/icons/Home Address.svg"} height={20} width={20} alt='address' />
                                        <span>{address}</span>
                                    </div>
                                    <div className={`${styles.iconInfo} ${styles.fullWidth}`}>
                                        <Image src={"/assets/icons/Delivery Time.svg"} height={20} width={20} alt='time' />
                                        <span>{postedTime}</span>
                                    </div>
                                    <div className={`${styles.iconInfo} ${styles.fullWidth}`}>
                                        <Image src={"/assets/icons/PlaceMarker.svg"} height={20} width={20} alt='loc' />
                                        <span>{branches}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <Link href="#">
                                <Image src={"/assets/icons/Call.svg"} height={20} width={20} alt='call' />
                            </Link>
                            <Link href="#">
                                <Image src={"/assets/icons/Email2.svg"} height={20} width={20} alt='email' />
                            </Link>
                            <Link href="#">
                                <Image src={"/assets/icons/Forward Arrow Fill.svg"} height={20} width={20} alt='share' />
                            </Link>
                            <Link href="#" className={styles.fullWidth}>
                                <Image src={"/assets/icons/Comments.svg"} height={20} width={20} alt='comment' />
                            </Link>
                        </div>
                    </div>
                })
                }
            </div>
        </>
    );
}

export default ApplicantCard