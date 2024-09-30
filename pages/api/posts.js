import { posts } from "../../data/posts"
export default function handler(req, res){
    res.send(posts)
};