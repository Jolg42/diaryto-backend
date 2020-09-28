import prisma from "../database/connection"
import { Request, Response } from "express"

function index(req: Request, res: Response) {
    res.json({
        'data': 'no'
    })
}

async function getPosts(req: Request, res: Response) {
    prisma.user.create({
        data: {
            email: "hr@bfd.com"
        }
    })

    const users = prisma.user.findMany()
        .then(records => {
            res.json({
                'data': records
            })
        })

}

export {
    index, getPosts
}