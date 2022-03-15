interface UserType {
    id: number,
    parentId: number,
    isActive: boolean,
    balance: string,
    name: string,
    email: string,
}


export interface UserDataType extends UserType {
    childrens?: Array<UserDataType>
}
