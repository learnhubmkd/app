/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import style from './filter.module.scss';

export enum UserRole {
  Admin = 'Admin',
  Member = 'Member',
  ContentManager = 'Content Manager',
}

interface FilterProps {
  handleRoleChange: (roles: UserRole[]) => void;
}

const Filter: React.FC<FilterProps> = ({ handleRoleChange }) => {
  const [selectedOption, setSelectedOption] = useState<UserRole | ''>('');

  useEffect(() => {
    if (selectedOption === '') {
      handleRoleChange(Object.values(UserRole));
    } else {
      handleRoleChange([selectedOption]);
    }
  }, [selectedOption, handleRoleChange]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = event.target.value as UserRole;
    setSelectedOption(selectedRole);
  };

  return (
    <div className={style.filter}>
      <select className={style.dropdown} value={selectedOption} onChange={handleChange}>
        <option value="">All Roles</option>
        {Object.values(UserRole).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
