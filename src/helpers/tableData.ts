import { UserDataType } from "../types/UserDataType";
import data from "../mock-data/data.json";

export  const getUserDataById = (userId : number, data : Array<UserDataType>) => {
    return data.find(item => (item.id === userId)) as UserDataType
}

export const buildTableData = (data : Array<UserDataType>) : Array<UserDataType> => {
    const result : Array<UserDataType> = [];

    data.forEach((item) => {
        const currentItemId = item.id;
        const currentItemParrentId = item.parentId;

        if(item?.childrens === undefined) {
            item.childrens = [];
        }
        
        if (currentItemParrentId !== 0) {
            const parentItem = getUserDataById(currentItemParrentId, data);
            
            if(item.childrens === undefined) {
                parentItem.childrens = [];
            }
            if (Array.isArray(parentItem.childrens)) {
                // parentItem.childrens.push(currentItemId);
                parentItem.childrens.push(item);
            }

            return
        }

        result.push(item);
    })
    
    return result
}

export const getData = () : Array<UserDataType> => {
    return data
}
