import {AiFillHome} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {MdExplore} from 'react-icons/md'
import {TfiVideoClapper} from 'react-icons/tfi'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {GrAddCircle} from 'react-icons/gr'
import {CgProfile} from 'react-icons/cg'

const tab = [{
    tagName : "Home",
    logo : <AiFillHome/>
},{
    tagName : "Search",
    logo : <BsSearch/>
},{
    tagName : "Explore",
    logo : <MdExplore/>
},{
    tagName : "Reels",
    logo : <TfiVideoClapper/>
},{
    tagName : "Messages",
    logo : <AiOutlineMessage/>
},{
    tagName : "Notifications",
    logo : <AiOutlineHeart/>
},{
    tagName : "Create",
    logo : <GrAddCircle/>
},{
    tagName : "Profile",
    logo : <CgProfile/>
}];
export default tab;