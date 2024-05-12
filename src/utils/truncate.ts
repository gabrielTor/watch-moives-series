export const truncateText = (text: string, maxLength: number = 110) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};
