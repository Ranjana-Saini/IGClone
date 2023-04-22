import React from 'react'
import './HomeData/home.css'
import { BsDot } from 'react-icons/bs'
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { FaRegPaperPlane } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import { AiOutlineSmile } from 'react-icons/ai'
import post from './HomeData/post'

export default function home() {

    return (
        <div className='home'>
            <div className='status'>Status</div>

            {post.map(post => <div className='posts'>
                <div className='postHead'>
                    <div className='posthead1'>{post.dp}{post.userName}{<BsDot />}{post.uploadTime}</div>
                    <div>{<BsThreeDots />}</div>
                </div>
                <img src={`https://picsum.photos/id/${post.id}/447/400`} alt="" />
                <div className='like'>
                    <div className='like1'>{<AiOutlineHeart />}{<FaRegComment />}{<FaRegPaperPlane />}</div>
                    <div>{<BsBookmark />}</div>
                </div>
                <div>
                    <b>{post.likes} likes</b>
                    <p>{post.userName} {post.caption}</p>
                </div>
                <div className='comment'>
                    <div>
                        <input type="text" name="comment" id="comment" placeholder='Add a Comment...' />
                    </div>
                    <div><AiOutlineSmile /></div>
                </div>
                <hr />
            </div>)}


        </div>
    )
}
