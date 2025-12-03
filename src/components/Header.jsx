const Header = () => {
  return (
    <header
      style={{
        background: "#ffffff",
        padding: "1rem 2rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.8rem", fontWeight: "700" }}>
        <span style={{ color: "#1d4ed8" }}>Talento Tech</span>{" "}
        <span style={{ color: "#111827" }}>eCommerce</span>
      </h1>
    </header>
  );
};

export default Header;