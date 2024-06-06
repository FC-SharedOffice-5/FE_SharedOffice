export const formatTimeInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: (val: string) => void,
  maxLength: number,
  maxValue: number,
) => {
  let value = e.target.value;

  if (!/^\d*$/.test(value) || value.length > maxLength) {
    return;
  }

  let parsedValue = parseInt(value, 10);

  if (parsedValue >= maxValue) {
    parsedValue = parsedValue % maxValue;
    if (parsedValue >= 10) {
      setValue(parsedValue.toString());
    } else {
      setValue('0' + parsedValue.toString());
    }
  } else {
    setValue(value);
  }
};

export const formatTimeInputBlur = (value: string, setValue: (val: string) => void) => {
  if (value.length === 1 && value >= '0' && value <= '9') {
    setValue('0' + value);
  }
};
