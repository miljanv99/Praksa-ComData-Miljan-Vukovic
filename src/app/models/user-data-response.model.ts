import { PaginationModel } from "./pagination.model";
import { User } from "./user.model";

export interface UserDataResponse {
    data: User[];
    meta: {
        pagination: PaginationModel
    }
}