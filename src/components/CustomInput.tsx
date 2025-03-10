'use client'

import { Input } from 'antd';
import { ChangeEvent } from 'react';
import styles from '@/styles/input.module.css';

interface CustomInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  style?: React.CSSProperties;
}

export const CustomInput = ({ value, onChange, placeholder = "Input address", label, style }: CustomInputProps) => {
  return (
    <div>
      {label && (
        <div className={styles.label}>
          {label}
        </div>
      )}
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
        style={{ ...style }}
      />
    </div>
  );
}; 