const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://www.gulllakebeachresorts.com/wp-content/uploads/2023/03/josh-hild-LuCWEh0nb5s-unsplash-min.jpg')", 
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 245, 235, 0.9)", 
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#8b3e3e",
            fontSize: "2.8rem",
            marginBottom: "20px",
          }}
        >
          Best MN Eats 
        </h1>
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            color: "#5c3d2e",
            fontSize: "1.2rem",
            lineHeight: "1.6",
          }}
        >
          Discover these local Minnesota gems. Cozy breakfasts, refreshing lunches, and best dinners!
        </p>
      </div>
    </div>
  );
};

export default Home
