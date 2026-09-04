function Launch() {
  return (
    <section id="launch-wrapper">
      <div className="launch-box">

        <h2 className="launch-title">
          Be first when we launch
        </h2>

        <p className="launch-desc">
          Join the waitlist today. First 100 users get lifetime discounted rates.
        </p>

        <div className="launch-form">
          <input
            className="launch-input"
            type="email"
            placeholder="your@email.com"
          />

          <button className="launch-btn">
            Join Now
          </button>
        </div>

        <p className="launch-small">
          No spam. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
}

export default Launch;