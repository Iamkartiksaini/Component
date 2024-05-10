// Thread App
"use client"
import "@/styles/threadCard.scss"
import CustomUserRoundProfileImage from '@/utils/custom-user-image'
import TimeAndOptions from './TimeAndOptions'
import { useRouter } from "next/navigation"
import LikeButton from "./LikeButton"
import { authenticationClientMiddleware } from "@/utils/token"

const Card = ({ list }) => {
    const router = useRouter()
    const auth = authenticationClientMiddleware();

    return (
        <>
            {list.map((data, index) => <div onClick={() => router.push(`/thread/${data._id}`)} key={index}
                className='threadCard shadow-2 border-round-md' >
                <CustomUserRoundProfileImage width={48} height={48} alt={`user-profile-${index}.png`} />
                <div className="right-section">
                    <div onClick={() => router.push(`/dashboard/profile/${data?.author?.username}`)} className='head'>
                        <h4>{data?.author?.username}</h4>
                        <p>{data?.author?.email}</p>
                    </div>
                    <pre>{data.text}</pre>
                    <div className='actions'>
                        <LikeButton auth={auth} data={data} type="thread" />
                        <div className="flex gap-2">
                            <i className={"pi pi-comment"}></i>
                            <span className='text-sm'>{data?.comments.length} comments</span>
                        </div>
                        <div className="flex gap-2">
                            <i className="pi pi-send"></i>
                            <span className='text-sm'>0 shares</span>
                        </div>
                        <i className="pi pi-bookmark"></i>
                        {/* <i className="pi pi-share-alt"></i> */}
                    </div>
                </div>
                <TimeAndOptions time={data.createdAt} />
            </div>
            )}
        </>
    )
}

export default Card
