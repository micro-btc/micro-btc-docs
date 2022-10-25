export const Logo = ({ size = 44 }) => {
  return (
    <svg width={size} height={size} style={{ display: 'block' }}>
      <rect width={size} height={size} />
      <text
      x={size*0.1}
      y={size*0.85}
      style={{ fill: 'white', fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 'normal' }}
      >
        μBTC
      </text>
    </svg>
  );
};