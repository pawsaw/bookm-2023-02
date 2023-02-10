export interface CounterProps {
  value: number;
  onValueChanged: (newValue: number) => void;
}

export const Counter: React.FC<CounterProps> = ({ value, onValueChanged }) => {
  const increment = () => {
    onValueChanged(value + 1);
  };

  return <button onClick={increment}>{value}</button>;
};
