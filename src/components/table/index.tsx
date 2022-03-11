import classNames from "classnames/bind";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TABLE_HEADERS } from "../../constants/table-headres";
import { buildTableData, getData } from "../../helpers/tableData";
import { useTypedSelector } from "../../store/hooks/usetypedSelector";
import { setDataAC } from "../../store/reducers/tableReducer/actionCreators";
import { TableRow } from "../table-row";
import style from './table.module.css';

const cx = classNames.bind(style);

export const Table : React.FC = (props) => {
    
    const dispatch = useDispatch();
    const {tableData} = useTypedSelector(state => state.table); 
    
    useEffect(() => {    
        dispatch(setDataAC(getData()))
    }, []);

    const generateTbody = (data : Array<any>) => {
        const tableData = buildTableData(data);
    
        return (
            tableData.map(item => {
                return <TableRow {...item}></TableRow>
            })
        )
    }
    
    // Посмотреть он вызываеться или диспатч прирывает
    const tbody = generateTbody(tableData)

    return (
        <div className={cx('table')}>
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
