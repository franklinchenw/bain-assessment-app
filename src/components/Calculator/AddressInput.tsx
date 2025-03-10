import { Input, Form } from 'antd';

interface AddressInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function AddressInput({ label, value, onChange }: AddressInputProps) {
  return (
    <Form.Item label={label}>
      <Input
        placeholder="Input address"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Item>
  );
} 