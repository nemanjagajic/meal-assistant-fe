export const calculateValueByPortionSize = (value: number, size: number): number => {
  return (value / 100 * size) || 0
}

export const limitText = (str: string, limit: number) => {
  return str.length > limit ? str.substring(0, limit) + '...' : str;
}