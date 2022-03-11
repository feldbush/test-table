export interface UserDataType {
    id: number,
    parentId: number,
    isActive: boolean,
    balance: string,
    name: string,
    email: string,
    childrens?: Array<UserDataType>
}
