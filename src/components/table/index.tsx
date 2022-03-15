import classNames from "classnames/bind";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TABLE_HEADERS } from "../../constants/table-headres";
import { buildTableData, getData } from "../../helpers/tableData";
import { useTypedSelector } from "../../store/hooks/usetypedSelector";
import { resetFilter, setDataAC, setFilter } from "../../store/reducers/tableReducer/actionCreators";
import { FiltersType } from "../../store/reducers/tableReducer/tableReducer";
import { UserDataType } from "../../types/UserDataType";
import { TableRow } from "../table-row";
import style from './table.module.css';

const cx = classNames.bind(style);

export const Table : React.FC = () => {   
    const dispatch = useDispatch();
    const {tableData, filterType} = useTypedSelector(state => state.table); 

    const isOnlyActive = filterType === FiltersType.IS_ACTIVE;
    
    useEffect(() => {
        dispatch(setDataAC(getData()));
    }, [dispatch]);

    const generateTbody = (data : Array<UserDataType>) => {
        const buildedTableData = buildTableData(data, filterType);
        
        return (
            buildedTableData.map(item => {
                return <TableRow key={nanoid()} {...item}></TableRow>
            })
        )

    };
    
    // Посмотреть он вызываеться или диспатч прирывает
    const tbody = generateTbody(tableData);

    const handleIsActive = () => {
        if (isOnlyActive) {
            dispatch(resetFilter());
        } else if (!isOnlyActive) {
            dispatch(setFilter(FiltersType.IS_ACTIVE));
        }
    }

    return (
        <div className={cx('table')}>
            <button onClick={handleIsActive}> isOnlyActive : {String(isOnlyActive)} </button>

            <div className={cx('header')}>
                {TABLE_HEADERS.map( header => (
                    <div className={cx('tableCell')} key={header}>
                        {header}
                    </div>
                ))}            
            </div>

            {tbody}
        </div>
    )
}
