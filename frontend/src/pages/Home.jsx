function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container py-5">
          <div className="row align-items-center py-lg-5">
            <div className="col-lg-7">
              <span className="home-badge">
                ✨ EVENT FEEDBACK PLATFORM
              </span>

              <h1 className="home-title mt-4">
                Your Voice Makes
                <br />
                Every Event <span>Better.</span>
              </h1>

              <p className="home-description mt-4">
                Every great event starts with listening. Share your
                experience, rate events, and help organizers create
                unforgettable experiences for everyone.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="/events" className="home-btn-primary">
                  Explore Events <span>→</span>
                </a>

                <a href="/feedback" className="home-btn-secondary">
                  Give Feedback
                </a>
              </div>

              <div className="home-trust mt-5">
                <span>✓ Easy to use</span>
                <span>✓ Your voice matters</span>
                <span>✓ Better events</span>
              </div>
            </div>

            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="hero-visual">
                <div className="hero-orb orb-one"></div>
                <div className="hero-orb orb-two"></div>

                <div className="hero-main-card">
                  <div className="hero-microphone">🎤</div>
                  <span className="hero-card-label">
                    YOUR EXPERIENCE MATTERS
                  </span>

                  <h3>Every Opinion Counts.</h3>

                  <p>
                    Your feedback today can make tomorrow's events
                    even better.
                  </p>

                  <div className="hero-rating">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                </div>

                <div className="floating-note note-top">
                  <span>💬</span> Share your thoughts
                </div>

                <div className="floating-note note-bottom">
                  <span>✨</span> Make an impact
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="section-eyebrow">SIMPLE & MEANINGFUL</span>
            <h2 className="section-heading mt-2">How It Works</h2>
            <p className="section-description">
              Three simple steps to make every event better.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon icon-purple">📅</div>
                <span className="feature-number">STEP 01</span>
                <h3>Explore Events</h3>
                <p>
                  Discover available events and choose an experience
                  you want to review.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon icon-blue">⭐</div>
                <span className="feature-number">STEP 02</span>
                <h3>Rate Your Experience</h3>
                <p>
                  Rate the event and describe what you loved or
                  what could be improved.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon icon-orange">💬</div>
                <span className="feature-number">STEP 03</span>
                <h3>Share Feedback</h3>
                <p>
                  Submit your thoughts and help organizers improve
                  future events.
                </p>
              </div>
            </div>
          </div>

          <div className="home-cta mt-5">
            <div>
              <h3>Ready to share your experience?</h3>
              <p className="mb-0">
                Your feedback can help make the next event even better.
              </p>
            </div>

            <a href="/feedback" className="home-cta-btn">
              Submit Feedback →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;