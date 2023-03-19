import React from 'react'
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
} from '@chakra-ui/react'
import { MdClose } from 'react-icons/md'

import { FilterIcon, FilterIconActive } from '@/components/Icons'

interface FilterProps {
  isOpen: boolean
  onClose: () => void
  onToggle: () => void
  title: string
  options: {
    label: string
    value: string
  }[]
  onApply: (types: string[]) => void
  onClear: () => void
}

function Filter(props: FilterProps) {
  const { isOpen, onClose, title, options, onApply, onClear, onToggle } = props

  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([])

  const handleOptionChange = (options: string[]) => {
    setSelectedOptions(options)
  }

  const resetFilters = () => {
    setSelectedOptions([])
  }

  const isDisabledFilter = selectedOptions.length === 0

  return (
    <Flex>
      <Popover isOpen={isOpen} onClose={onClose} placement="bottom-start">
        <PopoverTrigger>
          <Button
            aria-label="settings"
            variant={isOpen ? 'solid' : 'outline'}
            px="5"
            borderRadius="30px"
            bg={isOpen || !isDisabledFilter ? '#424242' : 'transparent'}
            color={isOpen || !isDisabledFilter ? '#fff' : 'inherit'}
            onClick={onToggle}
            leftIcon={
              isOpen || !isDisabledFilter ? (
                <FilterIcon />
              ) : (
                <FilterIconActive />
              )
            }
          >
            {selectedOptions.length > 0 ? selectedOptions.length : ''}
          </Button>
        </PopoverTrigger>
        <Divider
          orientation="vertical"
          height="2.5rem"
          borderColor="#D7D7D7"
          ml="1rem"
          alignSelf="center"
        />
        <PopoverContent>
          <PopoverHeader
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              variant="ghost"
              color={isDisabledFilter ? 'inherit' : '#3399FF'}
              onClick={resetFilters}
              isDisabled={isDisabledFilter}
              _hover={{ bg: 'transparent' }}
            >
              Clear All
            </Button>
            <Text fontSize="1rem" fontWeight="semibold">
              Filter
            </Text>
            <IconButton
              aria-label="close popup"
              variant="ghost"
              onClick={onClose}
              icon={<MdClose />}
            />
          </PopoverHeader>
          <PopoverBody>
            <Text color="#686868" fontSize="0.875rem" fontWeight="medium">
              {title}
            </Text>

            <CheckboxGroup
              colorScheme="blue"
              onChange={(e: any) => handleOptionChange(e)}
              value={selectedOptions}
            >
              <Stack
                mt="1.563rem"
                fontSize="1rem"
                fontWeight="semibold"
                spacing={[1, 5]}
              >
                {options.map((option, index) => {
                  return (
                    <Flex
                      key={index}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Text>{option.label}</Text>
                      <Checkbox value={option.value}></Checkbox>
                    </Flex>
                  )
                })}
              </Stack>
            </CheckboxGroup>

            <Button
              onClick={() => {
                onApply(selectedOptions)
                onClose()
              }}
              mt="2.188rem"
              color="#fff"
              bg="#424242"
              width="full"
            >
              Apply
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Divider orientation="vertical" />
      <Button
        variant="ghost"
        color={isDisabledFilter ? 'inherit' : '#3399FF'}
        isDisabled={isDisabledFilter}
        onClick={() => {
          resetFilters()
          onClear()
        }}
      >
        Clear All
      </Button>
    </Flex>
  )
}

export default Filter
