import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'
import NavMenuItem from '../NavMenuItem'

const SideNavDrawer = ({ isOpen, onClose }: any) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#091928">
          <DrawerCloseButton />

          <DrawerBody py="2rem" color="white">
            <NavMenuItem />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideNavDrawer
