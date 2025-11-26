export const maxPageNumber = 500;

export const getValidPage = (page?: number | string) => {
  if (!page) return "1";
  const rawPage = Math.max(1, Math.min(+page, maxPageNumber));
  return rawPage.toString();
};
