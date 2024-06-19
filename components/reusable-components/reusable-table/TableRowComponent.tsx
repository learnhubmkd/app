/* eslint-disable no-unused-vars */

import React from 'react';
import style from './tableRowComponent.module.scss';
import ActionDropdown from './ActionDropdown';

export interface UserData {
  first_name: string;
  last_name: string;
  role: string;
  id: string;
}

interface TableRowComponentProps {
  data: UserData;
  isChecked: boolean;
  onCheckboxChange: (id: string) => void;
}

const TableRowComponent = ({ data, isChecked, onCheckboxChange }: TableRowComponentProps) => {
  const handleCheckboxChange = () => {
    onCheckboxChange(data.id);
  };

  return (
    <tr className={style.rowComponent}>
      <td aria-label="Checkbox">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      </td>
      <td className={style.firstName}>{data.first_name}</td>
      <td className={style.lastName}>{data.last_name}</td>
      <td className={style.role}>{data.role}</td>
      <td className={style.actionCell} aria-label="Actions">
        <ActionDropdown isDisabled={!isChecked} />
      </td>
    </tr>
  );
};

export default TableRowComponent;