"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getImageByName = (req, res) => {
    try {
        const { name } = req.params;
        res
            .send(`<img class="logo" src="/images/${name}.jpg" alt="My_Logo">`)
            .status(200);
        // console.log(filePath)
    }
    catch (error) {
        res.send(error).status(404);
    }
};
exports.default = getImageByName;
