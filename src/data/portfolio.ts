/**
 * Central content for Jevendran C's portfolio. Keep these details accurate and current.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Jevendran C',
  displayName: 'Jevendran C',
  firstName: 'JEVENDRAN',
  seriesTag: 'THE SERIES',
  originalLabel: 'A JEVENDRAN ORIGINAL',
  role: 'Electronics & Communication Engineering Student',
  tagline: ['IoT & Embedded Systems', 'Computer Vision', 'Machine Learning'],
  accountLabel: 'FAUJI ASPIRANT',
  intro:
    'Electronics and Communication Engineering student building connected-device and computer-vision projects with Python, C, C++, and ESP32.',
  aboutIntro:
    'My work moves between embedded IoT prototypes, real-time vision, and applied machine-learning models, shaped by internships in hardware and analytics.',
  location: 'Chennai, Tamil Nadu',
  email: 'jevendran012006@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/jevendran-chandramohan-04256b3',
    github: undefined as string | undefined,
  },
  resumePdf: `${import.meta.env.BASE_URL}assets/Jevendran_C_Resume.pdf`,
  portrait: {
    src: `${import.meta.env.BASE_URL}assets/portrait-720.webp`,
    srcSet: `${import.meta.env.BASE_URL}assets/portrait-420.webp 420w, ${import.meta.env.BASE_URL}assets/portrait-720.webp 720w, ${import.meta.env.BASE_URL}assets/portrait-1100.webp 1100w`,
    alt: 'Portrait of Jevendran C',
  },
  interests: ['Embedded Systems', 'IoT', 'Computer Vision', 'Machine Learning'],
};

export const education = [
  {
    school: 'Tagore Engineering College',
    place: 'Chennai',
    degree: 'B.E. Electronics and Communication Engineering',
    shortDegree: 'B.E. · ECE',
    period: 'Expected Jun 2027',
    score: 'Final-year student',
  },
  {
    school: 'Bethel Matriculation Higher Secondary School',
    place: 'Velachery, Chennai',
    degree: 'Higher Secondary Education',
    shortDegree: 'Higher Secondary',
    period: '2012 – 2023',
    score: '',
  },
];

export const experience = [
  {
    company: 'PAB Hardware and Software OPC Pvt. Ltd.',
    role: 'Technical Intern',
    place: 'Chennai',
    period: 'Jun 2026 – Jul 2026',
    points: [
      'Gained hands-on experience in microcontroller programming, embedded hardware, and cloud-enabled IoT solutions.',
      'Developed ESP32-based IoT applications integrating sensors, communication modules, and Blynk Cloud for real-time monitoring and control.',
      'Represented the organization at the Mouser Electronics Technical Roadshow 2026 in Chennai, exploring emerging components and IoT technologies.',
    ],
  },
  {
    company: 'Grad Twin Services Private Limited',
    role: 'Technical Intern',
    place: 'Chennai',
    period: 'Jul 2025 – Sep 2025',
    points: [
      'Delivered six end-to-end software projects in three months, applying algorithms to real-world problems across domains.',
      'Built and tested analytical models; performed data collection, preprocessing, and evaluation using Python-based tools.',
      'Collaborated with the team to analyse requirements, document technical findings, and present results.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  status?: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'age-prediction',
    title: 'Age Prediction & Face Recognition',
    genre: 'Computer Vision · Deep Learning',
    logline: 'A deep-learning vision system for face recognition and age estimation from live video or static images.',
    stack: ['CNN', 'OpenCV', 'TensorFlow'],
    build: ['Applied CNN, OpenCV, and TensorFlow to build face recognition and age prediction for live video or still-image input.', 'Designed the system to support accurate identification and age estimation across both input types.'],
    features: ['Face recognition', 'Age estimation', 'CNN-based deep learning', 'Live video and static-image input'],
    metrics: [],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'rfid-attendance',
    title: 'RFID-Based Smart Attendance System',
    genre: 'IoT · Embedded Systems',
    logline: 'A real-time attendance setup that links RFID card and tag scans to a Blynk Cloud dashboard.',
    stack: ['RFID', 'Blynk IoT Cloud', 'Embedded Systems'],
    build: ['Integrated an RFID card/tag reader with Blynk Cloud to capture attendance and display it on a live dashboard in real time.'],
    features: ['RFID card/tag-based attendance', 'Attendance data capture', 'Live Blynk dashboard', 'Real-time display'],
    metrics: [],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'gps-asset-tracker',
    title: 'GPS Asset Tracker',
    genre: 'IoT · Connected Devices',
    logline: 'A GPS-based vehicle tracker that sends live location updates to a Blynk dashboard.',
    stack: ['GPS', 'ESP32-S3', 'Blynk'],
    build: ['Used an ESP32-S3 controller to capture and transmit a vehicle’s live location to a Blynk dashboard.'],
    features: ['GPS vehicle tracking', 'ESP32-S3 controller', 'Live location transmission', 'Blynk dashboard'],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'obstacle-avoidance-car',
    title: 'Obstacle Avoidance Car',
    genre: 'Robotics · IoT',
    logline: 'An autonomous obstacle-avoidance car connected to Blynk Cloud for live monitoring.',
    stack: ['ESP32-S3', 'Blynk'],
    build: ['Designed and deployed an autonomous car using an ESP32-S3 controller, with Blynk Cloud providing live monitoring.'],
    features: ['Autonomous obstacle avoidance', 'ESP32-S3 controller', 'Blynk Cloud connection', 'Live monitoring'],
    metrics: [],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'smart-ev-maintenance',
    title: 'Smart EV Maintenance System',
    status: 'ONGOING',
    genre: 'Embedded Systems · EV',
    logline: 'An in-progress EV battery monitoring system designed to support longer battery life and safer charging.',
    stack: ['Battery Monitoring', 'Embedded Systems'],
    build: ['Developing a battery monitor that tracks charge levels and alerts users at 90% to help prevent overcharging and safety risks.'],
    features: ['EV battery charge monitoring', 'Alert at 90% charge', 'Overcharging risk reduction', 'Battery-life awareness'],
    metrics: [{ value: '90%', label: 'charge alert threshold' }],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'tenants',
  },
  {
    id: 'smart-traffic',
    title: 'Smart Traffic System',
    genre: 'Embedded Systems · Traffic Management',
    logline: 'An intelligent traffic management system built to optimize vehicle flow and reduce congestion at intersections.',
    stack: ['Embedded Systems'],
    build: ['Designed and implemented traffic management using embedded hardware components to improve vehicle flow and reduce congestion at intersections.'],
    features: ['Embedded hardware components', 'Traffic management', 'Vehicle-flow optimization', 'Intersection congestion reduction'],
    metrics: [],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'airline-price-prediction',
    title: 'Airline Ticket Price Prediction',
    genre: 'Machine Learning · Data',
    logline: 'A software-based model that forecasts airline ticket prices from historical data patterns.',
    stack: ['Machine Learning', 'Historical Data', 'Statistical Modelling'],
    build: ['Analyzed historical ticket-price patterns and applied statistical modelling techniques to produce price forecasts.'],
    features: ['Historical data analysis', 'Pattern-based forecasting', 'Statistical modelling'],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'diabetes-prediction',
    title: 'Diabetes Prediction using Machine Learning',
    genre: 'Machine Learning · Health Data',
    logline: 'A health-data analysis project that predicts diabetes risk from patient records.',
    stack: ['Machine Learning', 'Classification'],
    build: ['Processed patient records and applied classification algorithms to predict diabetes risk.'],
    features: ['Patient-record processing', 'Health-data analysis', 'Classification-based risk prediction'],
    metrics: [],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'tenants',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };

export const achievements: Achievement[] = [
  { id: 'sih', title: 'Smart India Hackathon', org: 'SIH', detail: 'Participated in the national-level innovation initiative.', laurel: 'National Hackathon' },
  { id: '36-hour-hackathon', title: '36-Hour Hackathon', org: 'SA Engineering College', detail: 'Demonstrated teamwork and rapid prototyping in a 36-hour event.', laurel: 'Rapid Prototyping' },
  { id: 'technical-symposium', title: 'Technical Symposium', org: 'St. Joseph Engineering College', detail: 'Competed in technical events at the engineering symposium.', laurel: 'Technical Event' },
  { id: 'mouser-roadshow', title: 'Mouser Electronics Roadshow', org: 'Chennai · 2026', detail: 'Represented PAB Hardware and Software while exploring emerging components and IoT technologies.', laurel: 'Industry Exposure' },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'University of Colorado Boulder · Coursera', name: 'Deep Learning for Computer Vision — CNNs, object detection, and image classification (May 2026)' },
  { issuer: 'Chennai · 2024', name: 'Workshop on Embedded Automotive and IoT — ECUs, CAN bus, and IoT integration' },
  { issuer: 'Deloitte Australia · Forage', name: 'Data Analytics Job Simulation' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  { id: 'programming', title: 'Programming', subtitle: 'Core programming languages', skills: [{ name: 'Python', mono: 'Py' }, { name: 'C', mono: 'C' }, { name: 'C++', mono: 'C+' }] },
  { id: 'iot', title: 'IoT & Embedded', subtitle: 'Prototyping and connected devices', skills: [{ name: 'IoT', mono: 'Io' }, { name: 'ESP32', mono: '32' }, { name: 'Microcontrollers', mono: 'µC' }, { name: 'Embedded Hardware', mono: 'EH' }, { name: 'Automotive Systems', mono: 'Au' }, { name: 'CAN Bus', mono: 'CN' }, { name: 'ECUs', mono: 'EC' }, { name: 'Arduino IDE', mono: 'Ar' }, { name: 'Blynk IoT Cloud', mono: 'By' }, { name: 'RFID', mono: 'RF' }] },
  { id: 'vision', title: 'Computer Vision & ML', subtitle: 'Models, vision, and data', skills: [{ name: 'Machine Learning', mono: 'ML' }, { name: 'Deep Learning', mono: 'DL' }, { name: 'Neural Networks', mono: 'NN' }, { name: 'CNNs', mono: 'CN' }, { name: 'Face Recognition', mono: 'FR' }, { name: 'OpenCV', mono: 'CV' }, { name: 'Image Processing', mono: 'IP' }, { name: 'TensorFlow', mono: 'Tf' }, { name: 'scikit-learn', mono: 'Sk' }, { name: 'NumPy', mono: 'Np' }, { name: 'Pandas', mono: 'Pd' }] },
  { id: 'design-tools', title: 'Tools & Design', subtitle: 'Development, data, and electronics tools', skills: [{ name: 'Git', mono: 'Gt' }, { name: 'VS Code', mono: 'VS' }, { name: 'Jupyter Notebook', mono: 'Jn' }, { name: 'KiCad', mono: 'Ki' }, { name: 'Cirkit Designer', mono: 'Cd' }, { name: 'Tableau', mono: 'Tb' }, { name: 'Cisco Networking Fundamentals', mono: 'CN' }] },
  { id: 'hardware', title: 'Hardware Design', subtitle: 'Electronics prototyping and integration', skills: [{ name: 'PCB Design', mono: 'PCB' }, { name: 'Sensor Integration', mono: 'SI' }, { name: 'Communication Modules', mono: 'CM' }] },
  { id: 'soft-skills', title: 'Professional Skills', subtitle: 'How I work with people and problems', skills: [{ name: 'Analytical Thinking', mono: 'AT' }, { name: 'Team Collaboration', mono: 'TC' }, { name: 'Time Management', mono: 'TM' }, { name: 'Communication', mono: 'Co' }] },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Airline Price Prediction', 'Diabetes Prediction', 'Grad Twin Services internship'],
  C: ['Technical skills'],
  'C++': ['Technical skills'],
  ESP32: ['GPS Asset Tracker', 'Obstacle Avoidance Car', 'PAB Hardware internship'],
  'Blynk IoT Cloud': ['RFID Smart Attendance', 'GPS Asset Tracker', 'Obstacle Avoidance Car'],
  RFID: ['RFID Smart Attendance'],
  OpenCV: ['Age Prediction & Face Recognition'],
  TensorFlow: ['Age Prediction & Face Recognition'],
  CNNs: ['Age Prediction & Face Recognition', 'Deep Learning for Computer Vision certification'],
  'Machine Learning': ['Airline Price Prediction', 'Diabetes Prediction'],
  'PCB Design': ['Professional summary'],
  KiCad: ['Tools & Design Software'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };

export const seasons: Season[] = [
  {
    number: 1, title: 'The Foundations', period: 'Education', synopsis: 'Electronics and Communication Engineering studies at Tagore Engineering College in Chennai.',
    episodes: [
      { code: 'S01 E01', title: 'The ECE Path', description: 'B.E. Electronics and Communication Engineering at Tagore Engineering College; expected completion in June 2027.', tags: ['B.E.', 'ECE', 'Tagore Engineering College'], runtime: 'Expected Jun 2027', palette: violet },
      { code: 'S01 E02', title: 'The Toolkit', description: 'Building practical foundations across Python, C, C++, IoT, embedded hardware, and machine learning.', tags: ['Python', 'C', 'C++'], runtime: 'Technical skills', palette: ocean },
    ],
  },
  {
    number: 2, title: 'Inside the Lab', period: 'Jul 2025 – Jul 2026', synopsis: 'Two technical internships spanning embedded IoT applications, analytics, and software projects.',
    episodes: [
      { code: 'S02 E01', title: 'The Analyst', description: 'At Grad Twin Services, delivered six projects in three months and built and evaluated Python-based analytical models.', tags: ['Python', 'Analytics', 'Teamwork'], runtime: 'Jul 2025 – Sep 2025', palette: amber },
      { code: 'S02 E02', title: 'The IoT Intern', description: 'At PAB Hardware and Software, developed ESP32 applications using sensors, communication modules, and Blynk Cloud.', tags: ['ESP32', 'IoT', 'Blynk Cloud'], runtime: 'Jun 2026 – Jul 2026', palette: jade },
      { code: 'S02 E03', title: 'The Roadshow', description: 'Represented the organization at the Mouser Electronics Technical Roadshow in Chennai.', tags: ['Electronics', 'IoT'], runtime: '2026', palette: crimson },
    ],
  },
  {
    number: 3, title: 'Fauji Aspirant', period: 'Current milestone', synopsis: 'A defence-service goal alongside an engineering path.',
    episodes: [
      { code: 'S03 E01', title: 'The Fauji Aspirant', description: 'Pursuing a defence-service path alongside Electronics and Communication Engineering.', tags: ['FAUJI ASPIRANT', 'ECE'], runtime: 'In progress', palette: crimson },
    ],
  },
  {
    number: 4, title: 'Defence Selection Journey', period: '2026 – 2027', synopsis: 'Five examination milestones across Indian Air Force, Indian Army, Combined Defence Services, and Indian Coast Guard pathways.',
    episodes: [
      { code: 'S04 E01', title: 'Agniveer Vayu · 01/2027', description: 'Cleared the written, physical, and adaptability examinations. Completed the medical test and am awaiting the merit list.', tags: ['Indian Air Force', 'Written cleared', 'Physical cleared', 'Adaptability cleared', 'Medical complete', 'Merit list pending'], runtime: '01/2027 · Merit list pending', palette: ocean },
      { code: 'S04 E02', title: 'Agniveer Army · 01/2027', description: 'Cleared the written examination and attempted the physical examination.', tags: ['Indian Army', 'Written cleared', 'Physical attempted'], runtime: '01/2027', palette: crimson },
      { code: 'S04 E03', title: 'CDS · 02/2026', description: 'Attempted the Combined Defence Services examination.', tags: ['Combined Defence Services', 'Attempted'], runtime: '02/2026', palette: violet },
      { code: 'S04 E04', title: 'IGEPT · 01/2027', description: 'Attempted the examination and am awaiting the result.', tags: ['Indian Coast Guard', 'Attempted', 'Result pending'], runtime: '01/2027 · Result pending', palette: jade },
      { code: 'S04 E05', title: 'TGC-145', description: 'Attempted TGC-145 and am awaiting the SSB interview call letter.', tags: ['Indian Army', 'SSB call letter pending'], runtime: 'Awaiting SSB call letter', palette: amber },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'The Vision Project', title: 'Age Prediction', detail: 'CNN · OpenCV · TensorFlow', palette: crimson },
  { label: 'The Connected Build', title: 'GPS Asset Tracker', detail: 'ESP32-S3 · Blynk Cloud', palette: ocean },
  { label: 'Industry Experience', title: 'Two Internships', detail: 'IoT, embedded hardware, analytics', palette: amber },
  { label: 'Rapid Build', title: '36-Hour Hackathon', detail: 'SA Engineering College', palette: violet },
  { label: 'Connected Systems', title: 'RFID Attendance', detail: 'Live Blynk Cloud dashboard', palette: jade },
  { label: 'Smart Mobility', title: 'Obstacle Avoidance', detail: 'ESP32-S3 · Live monitoring', palette: ocean },
  { label: 'Applied ML', title: 'Price & Risk Models', detail: 'Airline prices · Diabetes risk', palette: crimson },
  { label: 'Certified', title: 'Computer Vision', detail: 'Deep Learning · Coursera · 2026', palette: violet },
  { label: 'Battery Awareness', title: 'Smart EV Maintenance', detail: 'Charge alert at 90%', palette: jade },
  { label: 'Education', title: 'B.E. · ECE', detail: 'Expected Jun 2027 · Tagore Engineering College', palette: amber },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'B.E. · ECE', lines: ['Tagore Engineering College, Chennai', 'Expected June 2027'], chips: ['Final-year student'] },
  { kicker: 'Focus', title: 'Build connected systems.', lines: ['IoT · Embedded Systems · Computer Vision', 'Python · C · C++'], chips: ['ESP32', 'OpenCV', 'TensorFlow', 'Blynk Cloud'] },
  { kicker: 'Experience', title: 'Two internships.', lines: ['PAB Hardware and Software · Jun–Jul 2026', 'Grad Twin Services · Jul–Sep 2025'], chips: ['IoT', 'Embedded', 'Analytics'] },
  { kicker: 'Projects', title: 'Eight originals.', lines: ['Vision, IoT, embedded systems, and machine learning', 'From RFID attendance to diabetes risk prediction'], chips: ['8 Projects'] },
  { kicker: 'Recognition', title: 'Build under pressure.', lines: ['Smart India Hackathon participant', '36-hour hackathon · Technical symposium'], chips: ['Teamwork', 'Rapid prototyping'] },
  { kicker: 'Certified', title: 'Keep learning.', lines: ['Deep Learning for Computer Vision · Coursera', 'Embedded Automotive & IoT · Data Analytics simulation'], chips: ['3 Credentials'] },
];

export type ProfileId = 'jevendran' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'jevendran', name: 'Jevendran', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Resume, experience & skills first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Engineer', blurb: 'Projects & technical skills first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Creative', blurb: 'The story arc & highlights first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot · Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: seasons.length + ' Seasons · ' + seasons.reduce((n, s) => n + s.episodes.length, 0) + ' Episodes', palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: projects.length + ' Engineering & ML projects', palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Career highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: skillCategories.length + ' Technical categories', palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: achievements.length + ' Moments · ' + certifications.length + ' Credentials', palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume · View & download', palette: violet },
};
