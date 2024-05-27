export const formatBirthDate = (value: string) => {
  const cleaned = value.replace(/\D/g, ''); // Remove non-digit characters
  const match = cleaned.match(/^(\d{4})(\d{2})(\d{2})$/);
  if (match) {
    return `${match[1]}.${match[2]}.${match[3]}`;
  }

  return value;
};
