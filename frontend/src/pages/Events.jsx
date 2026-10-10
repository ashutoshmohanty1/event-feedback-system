
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
  },
];

function Events() {
  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <span className="badge bg-primary mb-3">
          DISCOVER & PARTICIPATE
        </span>

        <h1 className="fw-bold">Upcoming Events</h1>

        <p className="text-secondary">
          Explore our events and share your experience with us.
        </p>
      </div>

      <div className="row g-4">
        {events.map((event) => (
          <div className="col-md-6 col-lg-4" key={event.id}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="bg-primary bg-opacity-10 text-center py-4">
                <span style={{ fontSize: '4rem' }}>
                  {event.icon}
                </span>
              </div>

              <div className="card-body d-flex flex-column p-4">
                <span className="badge bg-light text-primary align-self-start mb-3">
                  {event.category}
                </span>

                <h5 className="card-title fw-bold">
                  {event.title}
                </h5>

                <p className="text-secondary small mb-2">
                  📅 {event.date}
                </p>

                <p className="text-secondary small">
                  📍 {event.location}
                </p>

                <p className="card-text text-secondary">
                  {event.description}
                </p>

                <a
                  href={`/feedback?event=${event.id}`}
                  className="btn btn-primary mt-auto"
                >
                  Give Feedback →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Events;
