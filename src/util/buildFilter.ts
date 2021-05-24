import { IFilter } from "../interfaces/IFilter";
import { IQuery } from "../interfaces/IRequest";


export const buildFilter = (query: IQuery) => {
    let filter: IFilter = {};

    if (!!query.keyset) {
        filter._id = { $lt: query.keyset };
    }

    return filter;
}