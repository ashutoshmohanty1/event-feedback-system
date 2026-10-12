import { useEffect, useState } from 'react';

const eventNames = {
  1: 'Web Development Workshop',
  2: 'AI & Machine Learning Seminar',
  3: 'Career & Placement Fair',
};

function FeedbackList() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchFeedback() {
      try {
        const response = await fetch(
          'http://localhost:5000/api/feedback'
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message || 'Failed to fetch feedback.'
          );
        }

        setFeedbackList(result.data || []);
      } catch (err) {
        setError(
          err.message || 'Unable to connect to the server.'
        );
      } finally {
        setLoading(false);
      }
    }

    fetchFeedback();
  }, []);

  return (
    <main className="feedback-list-page">
      <section className="container py-5">
        <div className="text-center mb-5">
          <span className="section-eyebrow">
            EVENT EXPERIENCES
          </span>

          <h1 className="section-heading mt-3">
            Community Feedback
          </h1>

          <p className="section-description">
            Explore the experiences and ratings shared by
            event participants.
          </p>
        </div>

        {loading && (
          <p className="text-center" role="status">
            Loading feedback...
          </p>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {!loading && !error && feedbackList.length === 0 && (
          <div className="text-center py-5">
            <h3>No feedback yet</h3>
            <p>Be the first to share your event experience!</p>
          </div>
        )}

        {!loading && !error && feedbackList.length > 0 && (
          <>
            <p className="text-muted mb-4">
              {feedbackList.length}{' '}
              {feedbackList.length === 1
                ? 'response'
                : 'responses'}{' '}
              received
            </p>

            <div className="row g-4">
              {feedbackList.map((item) => (
                <div className="col-md-6 col-lg-4" key={item.id}>
                  <article className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
                        <h2 className="h5 mb-0">
                          {item.name}
                        </h2>

                        <span className="badge text-bg-light">
                          {item.rating}/5 ★
                        </span>
                      </div>

                      <p className="text-muted small mb-2">
                        Event: {eventNames[item.event] || item.event}
                      </p>

                      <div
                        className="text-warning mb-3"
                        aria-label={`${item.rating} out of 5 stars`}
                      >
                        {'★'.repeat(Number(item.rating))}
                        {'☆'.repeat(
                          5 - Number(item.rating)
                        )}
                      </div>

                      <p className="mb-3">
                        {item.comments}
                      </p>

                      {item.created_at && (
                        <p className="text-muted small mb-0">
                          Submitted:{' '}
                          {new Date(
                            item.created_at
                          ).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default FeedbackList;