import {MdOutlineSpaceDashboard} from 'react-icons/md'
import {RiGroupLine} from 'react-icons/ri'

const navigation = () => {
    return [
      {
        title: 'Home',
        icon: MdOutlineSpaceDashboard,
        path: '/',
      },
      {
        title: 'Friends',
        icon: RiGroupLine,
        path: '/friends',
      },
     
    ]
  }
  
  export default navigation