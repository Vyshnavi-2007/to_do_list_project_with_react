import "./header.css";

function Header() {
  const today = new Date();

  const date = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const quotes = [
    
    "One task at a time.",
    
  ];

  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="header">
      <div>
        <h1>{randomQuote}</h1>
      </div>

      <div className="header-right">
        <h3>{date}</h3>
        <p>Welcome back, Vyshnavi</p>
      </div>
    </div>
  );
}

export default Header;