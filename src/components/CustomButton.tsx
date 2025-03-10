'use client'

import { Button } from 'antd';
import { ReactNode } from 'react';
import styles from "@/styles/button.module.css";

interface CustomButtonProps {
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  primary?: boolean;
  loading?: boolean;
}

export const CustomButton = ({ primary = true, children, onClick, icon, style, disabled, loading }: CustomButtonProps) => {
  return (
    <Button
      disabled={loading || disabled}
      type={primary ? "primary" : "default"}
      size="large"
      loading={loading}
      onClick={onClick}
      className={styles.customButton}
      style={{ ...style }}
    >
      <div className={styles.buttonInner}>
        <div>{children}</div>
        {icon && icon}
      </div>
    </Button>
  );
}; 