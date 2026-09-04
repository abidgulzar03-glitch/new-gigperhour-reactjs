function Waitlist() {
  return (
    <>
      {/* WAITLIST SECTION */}
      <section id="waitlist-section">

        {/* TOGGLE BUTTONS */}
        <div className="toggle-box">
          <span className="toggle-text">I am a:</span>

          <button className="toggle-btn active">
            Freelancer
          </button>

          <button className="toggle-btn">
            Client
          </button>
        </div>

        {/* EMAIL BOX */}
        <div className="email-box">
          <input
            type="email"
            placeholder="Enter your email to join the waitlist"
            className="email-input"
          />

          <button className="access-btn">
            Get Early Access
          </button>
        </div>

        {/* SMALL TEXT */}
        <p className="spam-text">
          🔒 No spam. Unsubscribe anytime.
        </p>

        {/* RECENT USERS */}
        <div className="recent-box">
          <div className="avatars">
            <span>AB</span>
            <span>MK</span>
            <span>SR</span>
            <span>+</span>
          </div>

          <p className="recent-text">
            <strong>121+ freelancers</strong> &{" "}
            <strong>102+ clients</strong> already on the waitlist
          </p>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">

        <div className="stat-box">
          <h1>5<span>%</span></h1>
          <p>Platform fee — vs 20% elsewhere</p>
        </div>

        <div className="stat-box">
          <h1>24<span>h</span></h1>
          <p>Payment release after approval</p>
        </div>

        <div className="stat-box">
          <h1>100<span>%</span></h1>
          <p>Human-reviewed disputes</p>
        </div>

      </section>
    </>
  );
}

export default Waitlist;