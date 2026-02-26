export const GradientLight = () => {
  return (
    <div
      className="absolute inset-0 opacity-60 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 30% 20%, rgba(40,32,108,0.9) 0%, rgba(40,32,108,0) 70%)",
      }}
    />
  );
};
