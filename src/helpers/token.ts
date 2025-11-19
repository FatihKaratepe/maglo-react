export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  const token = localStorage.getItem('magloAuthToken');
  return token?.replace(/^"|"$/g, '') || null;
};
