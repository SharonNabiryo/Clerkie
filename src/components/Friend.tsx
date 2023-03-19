import React from 'react'
import { Badge, Card, CardBody, Flex, Heading, Text } from '@chakra-ui/react'
import { BsDot } from 'react-icons/bs'

import { getFriendsBgColor, getFriendsColor } from '@/lib/utils'

interface FriendProps {
  friend: {
    id: number
    name: string
    email: string
    phone: string
    type: string | null
  }
}

function Friend(props: FriendProps) {
  const { friend } = props
  return (
    <Card
      variant="outline"
      size="sm"
      py="1.875rem"
      px="1.875rem"
      borderRadius="6px"
    >
      <CardBody>
        <Heading fontSize="1rem" fontWeight="bold">
          {friend.name}
          {friend.type && (
            <Badge
              bg={getFriendsBgColor(friend.type)}
              color={getFriendsColor(friend.type)}
              ml="1"
              py="3px"
              px="7px"
              fontSize="0.75rem"
              fontWeight="semibold"
              borderRadius="21px"
              textTransform="capitalize"
            >
              {friend.type}
            </Badge>
          )}
        </Heading>
        <Flex
          fontSize="0.875rem"
          fontWeight="semibold"
          color="#ABABAB"
          alignItems="center"
          gap={1}
          mt="0.813rem"
        >
          <Text textTransform="lowercase">{friend.email}</Text>
          <BsDot />
          <Text>{friend.phone}</Text>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default Friend
