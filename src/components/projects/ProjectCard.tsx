import type { Project } from '../../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div
        className={styles.imagePlaceholder}
        style={{ aspectRatio: project.image.aspectRatio }}
      >
        {project.image.videoSrc ? (
          <video
            src={project.image.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: project.image.objectPosition ?? 'center',
            }}
          />
        ) : project.image.src ? (
          <img
            src={project.image.src}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span>{project.image.placeholderLabel}</span>
        )}
      </div>
      <div className={styles.body}>
        <div>
          <span className={styles.title}>{project.title}</span>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.techList}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          <a
            className={styles.link}
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub →
          </a>
          {project.demo && (
            <a
              className={styles.link}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Check it out →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
