const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        // border: "3px solid",
        height: "500px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
