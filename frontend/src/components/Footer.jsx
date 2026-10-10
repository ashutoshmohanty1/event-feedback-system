
function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-6">
            <h5 className="fw-bold">EventFeedback</h5>
            <p className="text-white-50 mb-0">
              Your feedback helps us create better events
              and experiences for everyone.
            </p>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white-50">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/events" className="text-white-50">
                  Events
                </a>
              </li>
              <li>
                <a href="/feedback" className="text-white-50">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">Get Involved</h6>
            <p className="text-white-50 small">
              Attend events, share your thoughts, and
              help us improve.
            </p>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <p className="text-center text-white-50 small mb-0">
          © {new Date().getFullYear()} EventFeedback.
          Built for learning and event feedback management.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
