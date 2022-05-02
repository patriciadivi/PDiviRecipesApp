export default function randomIdNumber() {
  const max = 10000;
  return (Math.random() * max).toFixed(0);
}
