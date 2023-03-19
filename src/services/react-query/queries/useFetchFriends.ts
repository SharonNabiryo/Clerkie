import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'

import { queryKeys } from '../constants';

interface UseFetchFriends {
    data: {
        friends: any[]
        pageParams: any
        pages: any
    }
    isLoading: boolean
    isFetching: boolean
    isRefetching: boolean
    isFetchingNextPage: boolean
    isError: boolean
    hasNextPage: boolean | undefined,
    error: any
    fetchNextPage: () => void
    refetch: () => Promise<any>
    filter: string[]
    setFilter: React.Dispatch<React.SetStateAction<string[]>>
}


async function getFriends(page: string): Promise<any> {
    const resp = await axios.get('/api/friends?cursor=' + page);
    return resp.data;
}

const filterFriends = (data: any, filter: string[]) => {
    let flattenData = data.pages.flatMap((page: any) => page.data)

    if (!filter || filter.length === 0) return data

    return {
        friends: flattenData.filter((friend: any) => filter.includes(friend.type || '')),
        pageParams: data.pageParams,
        pages: data.pages
    }
}

export function useFetchFriends(): UseFetchFriends {
    const [filter, setFilter] = React.useState<string[]>([])

    const fallback = {
        pageParams: [],
        pages: [],
        friends: []
    } as any

    const selectFn = React.useCallback((data: any) => filterFriends(data, filter), [filter])

    const { data = fallback, refetch, isFetching, isRefetching, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage, isError, error } = useInfiniteQuery(
        [queryKeys.friends],
        ({ pageParam = 0 }) => getFriends(pageParam),
        {
            select: !filter || filter.length === 0 ? (data) => {
                let flattenData = data.pages.flatMap((page) => page.data)

                return {
                    friends: flattenData,
                    pageParams: data.pageParams,
                    pages: data.pages
                }
            } : selectFn,
            getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
            getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
            staleTime: 1000 * 60 * 5, // 5 minutes
        },
    )

    return {
        data,
        isLoading,
        isFetching,
        isRefetching,
        isFetchingNextPage,
        isError,
        error,
        hasNextPage,
        fetchNextPage,
        refetch,
        filter,
        setFilter
    }
}
