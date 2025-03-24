export default function CardBlock({ children}: { children: React.ReactNode }){
  const cardStyle = {
    padding: "20px",
    margin: "10px",
    boxShadow: "0 4px 8px 0 rgba(236, 208, 48, 0.5)",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "600px",
    maxWidth: "1000px",
    borderRadius: "10px",
  };
  return <div style={ cardStyle}>{children}</div>;
};
