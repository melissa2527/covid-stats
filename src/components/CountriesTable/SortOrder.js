import React from 'react';
import styles from './CountriesTable.module.scss';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const SortOrder = ({order}) => {
    if (!order) {
        return <></>;
    }
    if (order === 'desc') {
        return (
            <div className={styles.arrow}>
                <ArrowDropDownIcon/>
            </div>
        )
    } else {
        return (
            <div className={styles.arrow}>
                <ArrowDropUpIcon />
            </div>
        )
    }
}

export default SortOrder;