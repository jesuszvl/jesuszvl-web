import React from 'react'
import styles from './ProjectCard.module.scss'
import { motion, MotionConfig } from 'framer-motion'
import classNames from 'classnames'
import makahco from '../../images/portfolio/makahco.png'

interface Props {
  title: string
  description: string
  image: any
  url: string
  color: string
  isTextLight?: boolean
}

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  image,
  url,
  color,
  isTextLight
}) => {
  return (
    <MotionConfig transition={{ duration: 0.15 }}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={styles.project}
        style={{ background: color }}
      >
        <a href={url} target='_blank' rel='noopener noreferrer'>
          <section className={styles.content}>
            <h1
              className={classNames([
                styles.title,
                {
                  [styles.isTextLight]: isTextLight
                }
              ])}
            >
              {title}
            </h1>
            <p
              className={classNames([
                styles.description,
                {
                  [styles.isTextLight]: isTextLight
                }
              ])}
            >
              {description}
            </p>
            <img src={makahco.src} alt={title} className={styles.image} />
          </section>
        </a>
      </motion.div>
    </MotionConfig>
  )
}

export default ProjectCard
