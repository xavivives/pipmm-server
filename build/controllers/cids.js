"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repo_1 = __importDefault(require("./repo"));
const utils_1 = __importDefault(require("./utils"));
const getCids = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let iids = req.params.iids.split(",");
    let response = repo_1.default.getCidsResponse(iids);
    return res.status(200).json({
        data: response,
    });
});
// Destroys current repo and replaces it by the new set of abstractions
const restore = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get the post id from the req.params
    let mid = req.params.mid;
    //TODO check signature
    let abstractions = utils_1.default.toMapOfNotes(req.body);
    repo_1.default.restore(mid, abstractions);
    return res.status(200).json({
        message: "Repo destoryed and restored successfully with new abstractions",
    });
});
// Replaces abstraction
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get the post id from the req.params
    let mid = req.params.mid;
    //TODO check signature
    let abstractions = utils_1.default.toMapOfNotes(req.body);
    repo_1.default.update(mid, abstractions);
    return res.status(200).json({
        message: "Abstractions uploaded successfully!",
    });
});
/*
// deleting a post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  // get the post id from req.params
  let id: string = req.params.id;
  // delete the post
  let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // return response
  return res.status(200).json({
    message: "post deleted successfully",
  });
};

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
  // get the data from req.body
  let title: string = req.body.title;
  let body: string = req.body.body;
  // add the post
  let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
    title,
    body,
  });
  // return response
  return res.status(200).json({
    message: response.data,
  });
};
*/
//export default { getPosts, getPost, updatePost, deletePost, addPost };
exports.default = { getCids, restore, update };
