import { UserDataType } from "../types/UserDataType";
import Tdata from "../mock-data/data.json";
import { FiltersType } from "../store/reducers/tableReducer/tableReducer";

export  const getUserDataById = (userId : number, data : Array<UserDataType>) => {
    return data.find(item => (item.id === userId)) as UserDataType
}

export const buildTableData = (data : Array<UserDataType>, filterType : FiltersType) : Array<UserDataType> => {
    const dataCopy : Array<UserDataType> = JSON.parse(JSON.stringify(data));
    const result : Array<UserDataType> = [];

    dataCopy.forEach((item) => {
        if (filterType === FiltersType.IS_ACTIVE && !item.isActive) {
            return;
        }

        const currentItemParrentId = item.parentId;

        if(item?.childrens === undefined) {
            item.childrens = [];
        }
        
        if (currentItemParrentId !== 0) {
            const parentItem = {...getUserDataById(currentItemParrentId, dataCopy)};
            // const dataCopy = [...data];
            
            if(item.childrens === undefined) {
                parentItem.childrens = [];
            }
            if (Array.isArray(parentItem.childrens)) {

                parentItem.childrens.push(item);
                
                return
            }

            return
        }

        result.push(item);
    })
    
    return result
}

export const getData = () : Array<UserDataType> => {
    return JSON.parse(JSON.stringify(Tdata))
}
