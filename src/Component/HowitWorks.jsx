function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <p className="subtitle">HOW IT WORKS</p>
        <h2 className="title">Simple by design</h2>

        <div className="timeline">

          <div className="step">
            <div className="circle">1</div>
            <div className="content">
              <h3>Create your profile</h3>
              <p>
                Set up your freelancer or client profile in minutes. Showcase your skills, portfolio, and rates.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="circle">2</div>
            <div className="content">
              <h3>Find work or post a job</h3>
              <p>
                Browse verified job listings or post your project and receive proposals from skilled freelancers.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="circle">3</div>
            <div className="content">
              <h3>Work with milestone protection</h3>
              <p>
                Funds are held in escrow and released automatically when milestones are approved — no chasing payments.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="circle">4</div>
            <div className="content">
              <h3>Get paid fast</h3>
              <p>
                Money hits your account within 24 hours of approval. That's it. No hoops, no delays.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;