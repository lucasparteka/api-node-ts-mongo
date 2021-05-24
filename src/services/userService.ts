import User from "../models/userModel";
import { IUser } from "../interfaces/IUser";
import {buildFilter} from "../util/buildFilter";
import { IQuery } from "../interfaces/IRequest";
import { DeleteWriteOpResultObject } from "mongodb";

class UserService {

    static async listUsers(query: IQuery): Promise<IUser[]> {
        return await User.find(buildFilter(query)).sort({_id: -1}).limit(50);
    };

    static async findById(id: string): Promise<IUser[]> {
        return await User.findOne({ _id: id });
    };

    static async updateUser(id: string, user: IUser): Promise<IUser> {
        return await User.findOneAndUpdate({_id: id}, {$set: user}, {new: true});
    };

    static async deleteUser(id: string): Promise<DeleteWriteOpResultObject> {
        return await User.deleteOne({_id: id });
    };

}

export default UserService;