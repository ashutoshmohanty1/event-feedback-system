
function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="badge bg-light text-primary mb-3">
                EVENT FEEDBACK PLATFORM
              </span>

              <h1 className="display-4 fw-bold">
                Your Voice Makes Every Event Better.
              </h1>

              <p className="lead mt-3">
                Share your experience, rate events, and help
                organizers create better experiences for everyone.
              </p>

              <a href="/events" className="btn btn-light btn-lg mt-3">
                Explore Events →
              </a>

              <a
                href="/feedback"
                className="btn btn-outline-light btn-lg mt-3 ms-2"
              >
                Give Feedback
              </a>
            </div>

            <div className="col-lg-5 text-center mt-5 mt-lg-0">
              <div className="bg-white text-primary rounded-4 p-5 shadow">
                <div className="display-1">🎤</div>
                <h3 className="fw-bold mt-3">Every Opinion Matters</h3>
                <p className="text-secondary mb-0">
                  Feedback helps us improve every event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">How It Works</h2>
          <p className="text-secondary">
            Share your thoughts in three simple steps.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-3">
              <div className="card-body text-center">
                <div className="display-5 mb-3">📅</div>
                <h5 className="fw-bold">Explore Events</h5>
                <p className="text-secondary">
                  Browse available events and choose an experience
                  you want to review.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-3">
              <div className="card-body text-center">
                <div className="display-5 mb-3">⭐</div>
                <h5 className="fw-bold">Rate Your Experience</h5>
                <p className="text-secondary">
                  Give a rating and describe what you liked or
                  what could be improved.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-3">
              <div className="card-body text-center">
                <div className="display-5 mb-3">💬</div>
                <h5 className="fw-bold">Share Feedback</h5>
                <p className="text-secondary">
                  Submit your feedback and help organizers
                  improve future events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
