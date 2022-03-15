import style from './table-row.module.css';
import classNames from 'classnames/bind';
import { nanoid } from 'nanoid';
import { UserDataType } from '../../types/UserDataType';

const cx = classNames.bind(style);

export const TableRow = (props : UserDataType) => {
        const {
            id,
            balance,
            name,
            email,
            isActive
        } = props;

        let childrensElements;
        if(props?.childrens !== undefined && props.childrens?.length > 0) {
            childrensElements = props.childrens?.map(child => (
                <TableRow key={nanoid()} {...child}/>
            ))                   
        }

        const componentBody = (
            <div className={cx('tableRow')} key={id}>
                <div className={cx('info')}>
                    <div className={cx('tableCell')}>
                        {id}  {String(isActive)}
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
        );

        return componentBody
}
         
