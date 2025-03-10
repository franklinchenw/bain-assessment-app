'use client'

import { useEffect, useState } from "react";
import { Typography } from "antd";
import { CalculatorOutlined } from "@ant-design/icons";
import { UnitSelector } from "@/components/Calculator/UnitSelector";
import { DistanceResult } from "@/components/Calculator/DistanceResult";
import { DistanceUnit, Distance } from '@/types/distance';
import styles from "@/styles/page.module.css";
import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import { doCalculateDistance } from "@/apis/geocoding";
import { showError } from "@/utils/message";
const { Text } = Typography;

export default function Calculator() {
  const [sourceAddress, setSourceAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [unit, setUnit] = useState<DistanceUnit>(DistanceUnit.KM);
  const [distance, setDistance] = useState<Distance | null>(null);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setBtnDisabled(!sourceAddress || !destinationAddress);
  }, [sourceAddress, destinationAddress]);

  const validateAddress = (address: string): boolean => {
    // TODO: Use google maps api instead

    if (!address || address.trim().length === 0) {
      showError({
        title: "Invalid Address",
        content: "Address cannot be empty",
      });
      return false;
    }

    const addressRegex = /^[a-zA-Z0-9\s,.-]+$/;
    if (!addressRegex.test(address)) {
      showError({
        title: "Invalid Address",
        content: "Address contains invalid characters",
      });
      return false;
    }

    return true;
  };

  const calculateDistance = async () => {
    if (!validateAddress(sourceAddress) || !validateAddress(destinationAddress)) {
      return;
    }

    try {
      setLoading(true);
      setDistance(null);
      const result = await doCalculateDistance({
        address1: sourceAddress,
        address2: destinationAddress,
        unit,
      });
      setUnit(result.unit);
      setDistance(result.metadata.distance);
    } catch (error) {
      showError({
        title: "Calculation failed",
        content: "Something went wrong and the calculation failed.",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentRowContainer}>
        <CustomInput
          label="Source Address"
          value={sourceAddress}
          onChange={(e) => setSourceAddress(e.target.value)}
        />
        <CustomInput
          label="Destination Address"
          value={destinationAddress}
          onChange={(e) => setDestinationAddress(e.target.value)}
        />
        <div className={styles.unitSelectorContainer}>
          <Text className={styles.sectionText}>Unit</Text>
          <UnitSelector
            selectedUnit={unit}
            onChange={setUnit}
          />
        </div>
        <div className={styles.unitSelectorContainer}>
          <Text className={styles.sectionText}>Distance</Text>
          <DistanceResult
            distance={distance}
            unit={unit}
          />
        </div>
      </div>
      <CustomButton
        icon={<CalculatorOutlined />}
        onClick={calculateDistance}
        loading={loading}
        disabled={btnDisabled}
        style={{ backgroundColor: btnDisabled ? 'rgba(187, 187, 185, 1)' : 'rgba(209, 0, 1, 1)' }}
      >
        Calculate Distance
      </CustomButton>
    </div>
  )
}
