
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Feedback() {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: searchParams.get('event') || '',
    rating: 0,
    comments: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError('');
    setSuccess(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.event ||
      !formData.rating ||
      !formData.comments.trim()
    ) {
      setError('Please complete all fields and select a rating.');
      return;
    }

    setError('');
    setSuccess(true);

    console.log('Feedback submitted:', formData);

    setFormData({
      name: '',
      email: '',
      event: '',
      rating: 0,
      comments: '',
    });
  }

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-xl-6">
          <div className="text-center mb-4">
            <span className="badge bg-primary mb-3">
              YOUR VOICE MATTERS
            </span>

            <h1 className="fw-bold">Share Your Feedback</h1>

            <p className="text-secondary">
              Tell us about your event experience.
            </p>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              {success && (
                <div className="alert alert-success" role="status">
                  Thank you! Your feedback was submitted successfully.
                  <br />
                  <small>
                    This is a frontend demonstration; feedback is not
                    saved to a database yet.
                  </small>
                </div>
              )}

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="event" className="form-label">
                    Select Event
                  </label>

                  <select
                    id="event"
                    name="event"
                    className="form-select"
                    value={formData.event}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose an event</option>
                    <option value="1">Web Development Workshop</option>
                    <option value="2">AI & Machine Learning Seminar</option>
                    <option value="3">Career & Placement Fair</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label d-block">
                    Rate Your Experience
                  </label>

                  <div className="d-flex gap-2" role="group" aria-label="Rating from 1 to 5 stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="btn btn-link p-0 text-decoration-none"
                        style={{ fontSize: '2rem' }}
                        aria-label={`Rate ${star} out of 5 stars`}
                        aria-pressed={formData.rating === star}
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            rating: star,
                          }))
                        }
                      >
                        <span
                          className={
                            star <= formData.rating
                              ? 'text-warning'
                              : 'text-secondary'
                          }
                        >
                          ★
                        </span>
                      </button>
                    ))}
                  </div>

                  <small className="text-secondary">
                    {formData.rating
                      ? `${formData.rating} out of 5 stars`
                      : 'Select a star rating'}
                  </small>
                </div>

                <div className="mb-4">
                  <label htmlFor="comments" className="form-label">
                    Your Comments
                  </label>

                  <textarea
                    id="comments"
                    name="comments"
                    className="form-control"
                    rows="4"
                    placeholder="Tell us what you liked or what we can improve..."
                    value={formData.comments}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2">
                  Submit Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Feedback;
