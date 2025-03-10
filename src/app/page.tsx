'use client'

import { useState } from "react";
import { Layout } from "antd";
import { CalculatorOutlined, HistoryOutlined } from "@ant-design/icons";
import { Header } from "@/components/Header";
import styles from "@/styles/page.module.css";
import { CustomButton } from "@/components/CustomButton";
import Calculator from "@/components/Calculator";
import History from "@/components/History";
const { Content } = Layout;

export default function DistanceCalculator() {
  const [showCalculator, setShowCalculator] = useState(true);
  const [showHistory, setShowHistory] = useState(false);

  const handleBtnClick = () => {
    setShowHistory(prev => !prev);
    setShowCalculator(prev => !prev);
  };

  const ViewHistoryBtn = () => {
    return (
      <CustomButton
        icon={<HistoryOutlined />}
        onClick={handleBtnClick}>
        View Historical Queries
      </CustomButton>
    );
  };

  const ViewCalculatorBtn = () => {
    return (
      <CustomButton
        primary={false}
        style={{ backgroundColor: "#fff", border: "1px solid #1c1c1c" }}
        icon={<CalculatorOutlined />}
        onClick={handleBtnClick}>
        Back to Calculator
      </CustomButton>
    );
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: 50 }}>
        <div className={styles.headerContainer}>
          <Header
            title="Distance Calculator"
            description="Prototype web application for calculating the distance between addresses."
          />
          {showCalculator && <ViewHistoryBtn />}
          {showHistory && <ViewCalculatorBtn />}
        </div>
        {showCalculator ? <Calculator /> : <History />}
      </Content>
    </Layout>
  );
}
