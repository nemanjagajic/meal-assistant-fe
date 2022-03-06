export const calculateValueByPortionSize = (value: number, size: number): number => {
  return (value / 100 * size) || 0
}