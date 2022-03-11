import style from './table-row.module.css';
import classNames from 'classnames/bind';
import { UserDataType } from '../../types/UserDataType';

const cx = classNames.bind(style);

const makeRow = (rowData : UserDataType) => {
    const {
        id,
        balance,
        name,
        email,
        // childrens
    } = rowData;

    let childrensElements;
    if(rowData?.childrens !== undefined && rowData.childrens?.length > 0) {
        childrensElements = rowData.childrens?.map(child => (
            makeRow(child)
        ))                   
    }

    return (
        <div className={cx('tableRow')}>
            <div className={cx('info')}>
                <div className={cx('tableCell')}>
                    {id}  
                </div>
                <div className={cx('tableCell')}>
                    {balance}  
                </div>
                <div className={cx('tableCell')}>
                    {name}  
                </div>
                <div className={cx('tableCell')}>
                    {email}  
                </div>
            </div>

            <div className={cx('childrens')}>
                {childrensElements}
            </div>
        </div>
    )
}

interface TableRowProps extends UserDataType {
    children?: React.ReactNode
}

export const TableRow = (props : TableRowProps) => {


    return makeRow(props)
}
         
