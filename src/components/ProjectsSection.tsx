import { ProjectCard } from './ProjectCard'

const projects = [
  {
    eyebrow: 'Machine learning · Web application',
    title: 'Tips Predictor',
    description: 'An end-to-end web app that estimates restaurant tips from a bill and dining details, returning a real-time prediction from a trained regression model.',
    technologies: ['Python', 'Django', 'Scikit-learn', 'pandas', 'Joblib', 'Render'],
    highlights: [
      'Linear regression with StandardScaler and one-hot encoded categorical inputs.',
      'Django form accepts bill, party size, day, time, and table characteristics.',
      'Saved model, scaler, and feature schema; deployed with Gunicorn and WhiteNoise.',
    ],
    href: 'https://tips-predictor.onrender.com/',
    actionLabel: 'Open live application',
    videoSrc: '/tips-predictor-demo.mp4',
  },
  {
    eyebrow: 'Healthcare · Deep learning',
    title: 'Pneumonia Detection & Clinical Risk Prediction System',
    subtitle: 'Pneumonia Risk Assessment API & Diagnostic Web Application',
    description: 'An end-to-end clinical risk assessment application that brings 14 patient indicators together to estimate pneumonia risk through a neural network and responsive web interface.',
    technologies: ['Python', 'TensorFlow / Keras', 'Django REST Framework', 'Tailwind CSS', 'Render'],
    highlights: [
      'Combines demographics, symptom severity, vital signs, lung exam, WBC count, and chest X-ray findings.',
      'Sequential Keras classifier uses categorical encoding and standardized features to return a risk probability.',
      'DRF API validates clinical input ranges and handles absent symptoms with defaults; deployed on Render.',
    ],
    href: 'https://pneumonia-project-1-8am5.onrender.com/api',
    actionLabel: 'Open live application',
    note: 'Designed to support clinical review, not replace professional diagnosis.',
    videoSrc: '/pneumonia-risk-demo.mp4',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="border-y border-[#e5e9df] bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="section-kicker">Data science & machine learning</p>
            <h2 className="section-title mt-4">Selected projects.</h2>
          </div>
        </div>
        <div className="mt-9 grid items-stretch gap-5 md:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
        </div>
      </div>
    </section>
  )
}
