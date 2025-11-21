const TOKEN_NAME = 'magloAuthToken';

const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  const token = localStorage.getItem(TOKEN_NAME);
  return token?.replace(/^"|"$/g, '') || null;
};

export { getToken, TOKEN_NAME };
