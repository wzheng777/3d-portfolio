import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';
import { DATA } from '../constants';
import { SectionType } from '../types';

interface OverlayProps {
  activeSection: SectionType | null;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ activeSection, onClose }) => {
  return (
    <AnimatePresence>
      {activeSection && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none"
        >
          {/* Glass Container */}
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700 w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col relative text-slate-100">
            
            {/* Header */}
            <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800/50">
              <h2 className="text-2xl font-bold tracking-wider text-blue-400">
                {activeSection}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Scroll Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
              {activeSection === SectionType.PROFILE && <ProfileContent />}
              {activeSection === SectionType.EXPERIENCE && <ExperienceContent />}
              {activeSection === SectionType.SKILLS && <SkillsContent />}
              {activeSection === SectionType.EDUCATION && <EducationContent />}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Sub-components for specific content ---

const ProfileContent: React.FC = () => (
  <div className="space-y-8">
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{DATA.profile.name}</h1>
      <p className="text-xl md:text-2xl text-blue-400 font-light">{DATA.profile.title}</p>
      
      <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start text-sm text-slate-300">
        <div className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
          <Mail size={16} /> {DATA.profile.contact.email}
        </div>
        <div className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            <Phone size={16} /> {DATA.profile.contact.phone}
        </div>
        <div className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            <MapPin size={16} /> {DATA.profile.contact.address}
        </div>
      </div>
    </div>

    <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
      <h3 className="text-xl font-semibold mb-4 text-blue-300">Professional Highlights</h3>
      <ul className="space-y-3">
        {DATA.profile.highlights.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-slate-300">
            <span className="text-blue-500 mt-1">▹</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SkillsContent: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <SkillCategory title="Languages" skills={DATA.skills.languages} />
    <SkillCategory title="Cloud & DevOps" skills={DATA.skills.cloudDevOps} />
    <SkillCategory title="Frameworks" skills={DATA.skills.frameworks} />
    <SkillCategory title="Tools" skills={DATA.skills.tools} />
    <SkillCategory title="Integration" skills={DATA.skills.integration} />
  </div>
);

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
  <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
    <h3 className="text-lg font-semibold mb-3 text-blue-300">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-200 text-sm rounded-md shadow-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceContent: React.FC = () => (
  <div className="relative border-l-2 border-slate-700 ml-3 space-y-12">
    {DATA.experience.map((job, idx) => (
      <div key={idx} className="relative pl-8">
        {/* Timeline Dot */}
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 shadow-lg shadow-blue-500/50"></div>
        
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
            <h3 className="text-xl font-bold text-white">{job.role}</h3>
            <span className="text-sm font-mono text-blue-400">{job.period}</span>
        </div>
        
        <div className="text-lg text-slate-300 font-medium mb-1">{job.company}</div>
        <div className="text-sm text-slate-500 mb-4">{job.location}</div>
        
        <ul className="space-y-2 mt-2">
          {job.details.map((detail, dIdx) => (
            <li key={dIdx} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                <span className="text-slate-600">•</span>
                {detail}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const EducationContent: React.FC = () => (
  <div className="space-y-10">
    <section>
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Education</h3>
        <div className="grid gap-6">
            {DATA.education.map((edu, idx) => (
                <div key={idx} className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                    <h4 className="text-xl font-semibold text-blue-300">{edu.degree}</h4>
                    <p className="text-lg text-slate-200 mt-1">{edu.institution}</p>
                    <div className="flex justify-between mt-3 text-sm text-slate-500 font-mono">
                        <span>{edu.location}</span>
                        <span>{edu.year}</span>
                    </div>
                </div>
            ))}
        </div>
    </section>

    <section>
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Volunteer</h3>
        <div className="grid gap-6">
            {DATA.volunteer.map((vol, idx) => (
                <div key={idx} className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                     <h4 className="text-xl font-semibold text-blue-300">{vol.role}</h4>
                     <p className="text-lg text-slate-200 mt-1">{vol.organization}</p>
                     <div className="flex justify-between mt-3 text-sm text-slate-500 font-mono">
                        <span>Volunteer</span>
                        <span>{vol.period}</span>
                    </div>
                </div>
            ))}
        </div>
    </section>
  </div>
);

export default Overlay;