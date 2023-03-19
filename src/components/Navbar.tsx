import { Box, Flex, GridItem, IconButton, Text } from '@chakra-ui/react'
import { MdOutlineMenu } from 'react-icons/md'

interface NavbarProps {
  isLargerThanMD: boolean
  onOpen: () => void
  title?: string
}

const Navbar = ({ isLargerThanMD, onOpen, title }: NavbarProps) => {
  return (
    <GridItem
      rowSpan={1}
      colSpan={1}
      bg="#fff"
      minH="80px"
      boxShadow="0px 4px 4px rgba(162, 162, 162, 0.1) !important"
      zIndex="1"
    >
      <Flex alignItems="center" height="80px" pl="40px">
        {!isLargerThanMD && (
          <IconButton
            aria-label="Open sidebar"
            icon={<MdOutlineMenu />}
            fontSize="2rem"
            size="md"
            variant="ghost"
            onClick={onOpen}
          />
        )}
        {title && (
          <Text
            fontSize="1rem"
            fontWeight="bold"
            display="inline-block"
            ml={isLargerThanMD ? 0 : 2}
          >
            {title}
          </Text>
        )}
      </Flex>
    </GridItem>
  )
}

export default Navbar
