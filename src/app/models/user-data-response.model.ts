import { PaginationModel } from "./pagination.model";
import { Student } from "./student.model";

export interface StudentsDataResponse {
    data: Student[];
    meta: {
        pagination: PaginationModel
    }
}