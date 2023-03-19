import React from 'react';
import { useRouter } from 'next/router';
import { APP_NAME } from '@/lib/constants/appconstant';
import { Box, List, ListItem, Text, Icon } from '@chakra-ui/react';
import { AppIcon } from '../Icons';
import navMenu from '@/lib/constants/navigation';

const NavMenuItem = () => {
  const router = useRouter();

  const isNavLinkActive = (item: string) => {
    if (item === '/') {
      // Handle index route separately
      return router.pathname === item;
    } else if (
      router.pathname === item ||
      router.pathname.startsWith(item + '/')
    ) {
      // Check if current path is equal to or starts with item.path
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Box display="flex" alignItems="center">
        <AppIcon />
        <Text fontSize="0.875rem" fontWeight="semibold">
          {APP_NAME}
        </Text>
      </Box>

      <List mt="2.8rem">
        {navMenu().map((item) => (
          <ListItem
            key={item.title}
            display="flex"
            alignItems="center"
            px="0.938rem"
            py="0.763rem"
            gap="0.75rem"
            borderRadius="6px"
            cursor="pointer"
            onClick={() => router.push(item.path)}
            bg={isNavLinkActive(item.path) ? '#424242' : 'transparent'}
            _notFirst={{
              mt: '0.813rem',
            }}>
            <Icon fontSize="1.5rem" as={item.icon} />
            <Text fontSize="1rem">{item.title}</Text>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default NavMenuItem;
