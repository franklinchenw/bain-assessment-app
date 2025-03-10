import { Typography } from 'antd';
import styles from "@/styles/page.module.css"

const { Text } = Typography;

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <div className={styles.headerRowContainer}>
      <Text className={styles.headerText}>{title}</Text>
      <Text className={styles.headerDesc}>{description}</Text>
    </div>
  );
} 