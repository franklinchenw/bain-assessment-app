import { DistanceUnit } from '@/types/distance';
import { Radio, Space } from 'antd';
import type { RadioChangeEvent } from 'antd';

const unitDisplayText: Record<DistanceUnit, string> = {
  [DistanceUnit.KM]: 'Kilometers',
  [DistanceUnit.MI]: 'Miles',
  [DistanceUnit.BOTH]: 'Both',
};

interface UnitSelectorProps {
  selectedUnit: DistanceUnit;
  onChange: (unit: DistanceUnit) => void;
}

export function UnitSelector({ selectedUnit, onChange }: UnitSelectorProps) {
  const handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  return (
    <Radio.Group value={selectedUnit} onChange={handleChange}>
      <Space direction="vertical">
        {([DistanceUnit.MI, DistanceUnit.KM, DistanceUnit.BOTH] as const).map((option) => (
          <Radio key={option} value={option} style={{ fontSize: 18, fontWeight: 400 }}>
            {unitDisplayText[option]}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
} 