import { Typography } from 'antd';
import { DistanceUnit, Distance } from '@/types/distance';
const { Text } = Typography;

interface DistanceResultProps {
  distance: Distance | null;
  unit: DistanceUnit;
}

export function DistanceResult({ distance, unit }: DistanceResultProps) {
  if (distance === null) return null;

  if (unit === DistanceUnit.BOTH) {
    return (
      <div style={{ display: 'flex', gap: 20 }}>
        <Text strong>{distance[DistanceUnit.MI].toFixed(2)} {DistanceUnit.MI.toLowerCase()}</Text>
        <Text strong>{distance[DistanceUnit.KM].toFixed(2)} {DistanceUnit.KM.toLowerCase()}</Text>
      </div>
    );
  }

  return (
    <Text strong>{distance[unit].toFixed(2)} {unit.toLowerCase()}</Text>
  );
} 