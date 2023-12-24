import React from 'react'
import styles from './ProjectCard.module.scss'
import { motion } from 'framer-motion'

interface Props {
  title: string
  description: string
  image: any
  url: string
}

const ProjectCard: React.FC<Props> = ({ title, description, image, url }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className={styles.project}>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <section className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </section>
      </a>
    </motion.div>
  )
}

export default ProjectCard
