import type { NextApiRequest, NextApiResponse } from 'next'
import { faker } from '@faker-js/faker';

type IReq = NextApiRequest & {
    query: {
        cursor: string
    }
}

export default function handler(
    req: IReq,
    res: NextApiResponse
) {
    const cursor = parseInt(req.query.cursor) || 0
    const pageSize = 20

    const data = Array(pageSize)
        .fill(0)
        .map((_, i) => {
            return {
                id: i + cursor,
                name: faker.name.fullName(),
                email: faker.internet.email(),
                phone: faker.phone.number(),
                type: faker.helpers.arrayElement(['Close Friends', 'Super Close Friends', null]),
            }
        })

    const nextId = cursor < 200 ? data[data.length - 1].id + 1 : null
    const previousId = cursor > -200 ? data[0].id - pageSize : null

    setTimeout(() => res.json({ data, nextId, previousId }), 1000)
}

