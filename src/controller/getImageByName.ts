import { Request, Response } from "express";
import path from "path";
import fs from 'fs'


const getImageByName = (req: Request, res: Response): void => {
    try {
        const { name } = req.params;
        const filePath = path.join(
            __dirname,
            '..',
            '..',
            'assets',
            'images',
            `${name}`)
        const file = fs.readFileSync(filePath)
        res.send(file).status(201)
    } catch (error) {
        res.send(error).status(500)
    }
}
export default getImageByName