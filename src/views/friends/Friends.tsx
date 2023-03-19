import * as React from 'react'
import {
  Box,
  Button,
  Stack,
  Center,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'

import LoadingSkeleton from '@/components/LoadingSkeleton'
import Friend from '@/components/Friend'
import Filter from '@/components/Filter'
import { useFetchFriends } from '@/services/react-query/queries/useFetchFriends'

const Friends = () => {
  const { ref, inView } = useInView()
  const { isOpen, onToggle, onClose } = useDisclosure()

  const {
    data,
    isFetching,
    fetchNextPage,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
    setFilter,
  } = useFetchFriends()

  React.useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  if (isLoading) {
    return <LoadingSkeleton />
  }

  if (isError) {
    return <Text>{error.message}</Text>
  }

  return (
    <Box>
      <Filter
        title="Friend Status"
        onToggle={onToggle}
        isOpen={isOpen}
        onClose={onClose}
        options={[
          {
            label: 'Close Friends',
            value: 'Close Friends',
          },
          {
            label: 'Super Close Friends',
            value: 'Super Close Friends',
          },
        ]}
        onApply={(values) => {
          setFilter(values)
        }}
        onClear={() => {
          setFilter([])
        }}
      />

      <Stack spacing="0.938rem" mt="1.563rem">
        {data.friends.map((friend, i) => (
          <Friend key={i} friend={friend} />
        ))}
      </Stack>

      <Center my="2">
        <Button
          ref={ref}
          variant="ghost"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load Newer'
            : 'Nothing more to load'}
        </Button>
        <Box>
          <Text>
            {isFetching && !isFetchingNextPage
              ? 'Background Updating...'
              : null}
          </Text>
        </Box>
      </Center>
    </Box>
  )
}

export default Friends
