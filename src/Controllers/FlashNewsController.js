import { flashnews } from "../Models/FlashSchema.js";
import { errHandler, responseHandler } from "../helper/response.js";

const uploadNews = (req, res) => {
    let body = req.body;
    let { id } = req.query;
    flashnews.create({ ...body, userId: id, })
        .then((data) => {
            responseHandler(res, data);
        })
        .catch((err) => {
            console.log(err)
            errHandler(res, 5, 403);
        });
};

const getAllNews = (req, res) => {
    flashnews.find({})
        .then((data) => {
            responseHandler(res, data);
        })
        .catch(() => {
            errHandler(res, "not Found", 404);
        });
};



export { uploadNews, getAllNews };
