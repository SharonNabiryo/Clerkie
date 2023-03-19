import { GridItem } from '@chakra-ui/react'

import NavMenuItem from './navMenu/NavMenuItem'

const Sidebar = ({ isLargerThanMD }: any) => {
  return (
    <GridItem
      rowSpan={2}
      colSpan={1}
      bg="#091928"
      py="2rem"
      px="0.938rem"
      fontSize=""
      color="white"
      hidden={!isLargerThanMD}
    >
      <NavMenuItem />
    </GridItem>
  )
}

export default Sidebar
