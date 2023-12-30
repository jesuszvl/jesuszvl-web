import React, { useState } from 'react'
import './SkillSelector.css'
import JavascriptIcon from '../../icons/JavascriptIcon'
import TypescriptIcon from '../../icons/TypescriptIcon'
import PythonIcon from '../../icons/PythonIcon'
import JavaIcon from '../../icons/JavaIcon'
import RubyIcon from '../../icons/RubyIcon'
import ReactIcon from '../../icons/ReactIcon'
import HTMLIcon from '../../icons/HTMLIcon'
import NodeIcon from '../../icons/NodeIcon'
import PHPIcon from '../../icons/PHPIcon'
import CSSIcon from '../../icons/CSSIcon'
import NextIcon from '../../icons/NextIcon'
import AstroIcon from '../../icons/AstroIcon'
import DjangoIcon from '../../icons/DjangoIcon'
import SupabaseIcon from '../../icons/SupabaseIcon'
import MongoIcon from '../../icons/MongoIcon'
import ExpressIcon from '../../icons/ExpressIcon'
import RailsIcon from '../../icons/RailsIcon'

type SkillType = 'Languages' | 'Frontend' | 'Backend'

const SKILLS = {
  Languages: [
    { name: 'Javascript', icon: JavascriptIcon },
    { name: 'TypeScript', icon: TypescriptIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'Ruby', icon: RubyIcon },
    { name: 'PHP', icon: PHPIcon },
    { name: 'Java', icon: JavaIcon }
  ],
  Frontend: [
    { name: 'HTML', icon: HTMLIcon },
    { name: 'CSS', icon: CSSIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'Next', icon: NextIcon },
    { name: 'Astro', icon: AstroIcon }
  ],
  Backend: [
    { name: 'Node', icon: NodeIcon },
    { name: 'Express', icon: ExpressIcon },
    { name: 'MongoDB', icon: MongoIcon },
    { name: 'Supabase', icon: SupabaseIcon },
    { name: 'Django', icon: DjangoIcon },
    { name: 'Rails', icon: RailsIcon }
  ]
}

const SkillSelector: React.FC = () => {
  const [activeSkillType, setActiveSkillType] = useState<SkillType>('Languages')

  const handleClick = (skillType: SkillType) => {
    setActiveSkillType(skillType)
  }

  return (
    <>
      <div className='skill-selector'>
        <button
          className={activeSkillType === 'Languages' ? 'active' : ''}
          onClick={() => handleClick('Languages')}
        >
          Languages
        </button>
        <button
          className={activeSkillType === 'Frontend' ? 'active' : ''}
          onClick={() => handleClick('Frontend')}
        >
          Frontend
        </button>
        <button
          className={activeSkillType === 'Backend' ? 'active' : ''}
          onClick={() => handleClick('Backend')}
        >
          Backend
        </button>
      </div>
      <ul className='skillset'>
        {SKILLS[activeSkillType].map((skill) => (
          <li className='skill' key={skill.name}>
            <skill.icon />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SkillSelector
