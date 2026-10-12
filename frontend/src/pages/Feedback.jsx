import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const eventOptions = [
  { id: '1', title: 'Web Development Workshop' },
  { id: '2', title: 'AI & Machine Learning Seminar' },
  { id: '3', title: 'Career & Placement Fair' },
];

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError('');
    setSuccess(false);
  }

  function handleRating(star) {
    setFormData((prev) => ({
      ...prev,
      rating: star,
    }));

    setError('');
    setSuccess(false);
  }

  async function handleSubmit(e) {
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

    try {
      setError('');
      setSuccess(false);
      setIsSubmitting(true);

      const response = await fetch(
        'http://localhost:5000/api/feedback',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            name: formData.name.trim(),
            email: formData.email.trim(),
            comments: formData.comments.trim(),
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || 'Failed to submit feedback.'
        );
      }

      setSuccess(true);

      setFormData({
        name: '',
        email: '',
        event: '',
        rating: 0,
        comments: '',
      });
    } catch (err) {
      setError(
        err.message || 'Unable to connect to the server.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="feedback-page">
      <section className="container py-5">
        <div className="feedback-heading text-center">
          <span className="section-eyebrow">
            YOUR VOICE MATTERS
          </span>

          <h1 className="section-heading mt-3">
            Share Your Feedback
          </h1>

          <p className="section-description">
            Every opinion matters. Tell us about your experience
            and help us make future events even better.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <div className="feedback-card">
              <div className="feedback-card-header">
                <div className="feedback-header-icon">
                  💬
                </div>

                <div>
                  <h2>Event Review</h2>
                  <p>Complete the form below to share your thoughts.</p>
                </div>
              </div>

              <div className="feedback-card-body">
                {success && (
                  <div
                    className="feedback-alert feedback-alert-success"
                    role="status"
                  >
                    <span aria-hidden="true">✓</span>
                    <div>
                      <strong>Feedback submitted successfully!</strong>
                      <p>
                        Thank you for sharing your experience.
                        Your feedback has been saved.
                      </p>
                    </div>
                  </div>
                )}

                {error && (
                  <div
                    className="feedback-alert feedback-alert-error"
                    role="alert"
                  >
                    <strong>Submission failed</strong>
                    <p>{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label htmlFor="name" className="feedback-label">
                        Full Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control feedback-input"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email" className="feedback-label">
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control feedback-input"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="event" className="feedback-label">
                        Select Event
                      </label>

                      <select
                        id="event"
                        name="event"
                        className="form-select feedback-input"
                        value={formData.event}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose an event</option>

                        {eventOptions.map((event) => (
                          <option key={event.id} value={event.id}>
                            {event.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="feedback-label d-block">
                        Rate Your Experience
                      </label>

                      <div
                        className="feedback-stars"
                        role="group"
                        aria-label="Rating from 1 to 5 stars"
                      >
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className={`feedback-star ${
                              star <= formData.rating
                                ? 'selected'
                                : ''
                            }`}
                            aria-label={`Rate ${star} out of 5 stars`}
                            aria-pressed={formData.rating === star}
                            onClick={() => handleRating(star)}
                          >
                            ★
                          </button>
                        ))}
                      </div>

                      <p className="feedback-rating-text">
                        {formData.rating
                          ? `${formData.rating} out of 5 stars selected`
                          : 'Select a rating from 1 to 5'}
                      </p>
                    </div>

                    <div className="col-12">
                      <label
                        htmlFor="comments"
                        className="feedback-label"
                      >
                        Your Comments
                      </label>

                      <textarea
                        id="comments"
                        name="comments"
                        className="form-control feedback-input feedback-textarea"
                        rows="5"
                        placeholder="What did you like? What could we improve?"
                        value={formData.comments}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="feedback-submit-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? 'Submitting...'
                          : 'Submit Feedback →'}
                      </button>

                      <p className="feedback-privacy-note">
                        Your feedback helps organizers improve
                        future events.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Feedback;
