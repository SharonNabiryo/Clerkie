import {
  Grid,
  GridItem,
  Container,
  useMediaQuery,
  useDisclosure,
} from '@chakra-ui/react'

import Navbar from './Navbar'
import SideNavDrawer from './navMenu/sideNavDrawer/SideNavDrawer'
import Sidebar from './Sidebar'

interface LayoutProps {
  title?: string
  children: React.ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  const [isLargerThanMD] = useMediaQuery('(min-width: 768px)')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns={isLargerThanMD ? '250px 1fr' : '1fr'}
      gap={0}
    >
      <Sidebar isLargerThanMD={isLargerThanMD} />
      <Navbar title={title} isLargerThanMD={isLargerThanMD} onOpen={onOpen} />
      <GridItem
        rowSpan={1}
        colSpan={1}
        bg="#fff"
        py="2.875rem"
        h="calc(100vh - 80px)"
        overflow="auto"
      >
        <Container maxW="2xl">{children}</Container>
      </GridItem>
      <SideNavDrawer isOpen={isOpen} onClose={onClose} />
    </Grid>
  )
}

export default Layout
