const events = [
  {
    id: 1,
    title: 'Web Development Workshop',
    category: 'Technology',
    date: '15 November 2026',
    location: 'Bhubaneswar, Odisha',
    description:
      'Learn modern web development concepts, tools, and practical techniques.',
    icon: '💻',
    color: 'event-purple',
  },
  {
    id: 2,
    title: 'AI & Machine Learning Seminar',
    category: 'Artificial Intelligence',
    date: '22 November 2026',
    location: 'Online Event',
    description:
      'Explore AI, machine learning applications, and emerging technology trends.',
    icon: '🤖',
    color: 'event-blue',
  },
  {
    id: 3,
    title: 'Career & Placement Fair',
    category: 'Career',
    date: '5 December 2026',
    location: 'Bhubaneswar, Odisha',
    description:
      'Discover career opportunities and learn how to prepare for interviews.',
    icon: '🎯',
    color: 'event-orange',
  },
];

function Events() {
  return (
    <main className="events-page">
      <section className="events-heading">
        <div className="container text-center">
          <span className="section-eyebrow">
            DISCOVER & PARTICIPATE
          </span>

          <h1 className="section-heading mt-3">
            Explore Upcoming Events
          </h1>

          <p className="section-description mx-auto">
            Find your next experience, learn something new, and
            share your feedback to make every event better.
          </p>
        </div>
      </section>

      <section className="container pb-5">
        <div className="row g-4">
          {events.map((event) => (
            <div className="col-md-6 col-lg-4" key={event.id}>
              <article className="event-card">
                <div className={`event-card-banner ${event.color}`}>
                  <span className="event-icon" aria-hidden="true">
                    {event.icon}
                  </span>

                  <span className="event-category">
                    {event.category}
                  </span>
                </div>

                <div className="event-card-body">
                  <h2 className="event-title">{event.title}</h2>

                  <div className="event-meta">
                    <p>
                      <span aria-hidden="true">📅</span>
                      <span>{event.date}</span>
                    </p>

                    <p>
                      <span aria-hidden="true">📍</span>
                      <span>{event.location}</span>
                    </p>
                  </div>

                  <p className="event-description">
                    {event.description}
                  </p>

                  <a
                    href={`/feedback?event=${event.id}`}
                    className="event-feedback-btn"
                  >
                    Give Feedback <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="events-bottom-note">
          <span aria-hidden="true">💜</span>
          <p>
            Attended an event? Your feedback helps create better
            experiences for everyone.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Events;
