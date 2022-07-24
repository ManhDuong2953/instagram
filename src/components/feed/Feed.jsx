import React from 'react';
import './feed.scss';
import Friend from '../onlineFriend/Friend';
import Posts from '../posts/Posts';
import SideBar from '../sidebar/SideBar';

const Feed = () => {
  return (
    <div className='feed'>
        <div className="content">
            <Friend />
            <Posts />
        </div>
        <div className="sidebar">
            <SideBar />
        </div>
    </div>
  )
}

export default Feed