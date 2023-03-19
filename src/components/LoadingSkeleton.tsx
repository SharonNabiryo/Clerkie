import React from 'react'
import { Card, SkeletonText, Stack } from '@chakra-ui/react'

const LoadingSkeleton = () => {
  return (
    <Stack spacing="0.938rem" mt="1.563rem">
      {Array.from(Array(4)).map((_, el) => (
        <Card key={el} variant="outline" size="sm" py="1.75rem" px="1.875rem">
          <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
        </Card>
      ))}
    </Stack>
  )
}

export default LoadingSkeleton
