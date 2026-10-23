import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'study-spot',
    title: 'Study Spot',
    description:
      'A web app that shows York University students which classrooms are free to study in, used by over 5000 students',
    tags: ['SW'],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Python',
      'Flask',
      'SQL',
    ],
    github: 'https://github.com/AmmarMo123/StudySpots',
    demo: 'https://spots.yorku.dev/',
    image: {
      placeholderLabel: 'Study Spot',
      aspectRatio: '16 / 9',
      videoSrc: 'projects/study-spot.mp4',
    },
  },
  {
    id: 'asl-interpreter',
    title: 'Sign Language Interpreter',
    description:
      'A computer vision web app that turns ASL hand signs into English text in real time.',
    tags: ['SW', 'ML'],
    technologies: [
      'Python',
      'Flask',
      'React',
      'OpenCV',
      'SciKit',
      'NumPy',
      'MediaPipe',
      'Matplotlib',
    ],
    github: 'https://github.com/AmmarMo123/ASL-live-translator',
    image: {
      placeholderLabel: 'ASL Interpreter',
      aspectRatio: '16 / 9',
      videoSrc: 'projects/asl-interpreter.mp4',
      objectPosition: 'center 80%',
    },
  },
  {
    id: 'dafp',
    title: 'Blockchain Fundraising Platform',
    description:
      'A decentralized fundraising platform where investors back tokenized startup DAOs using USDC. Won at Hack the North 2024.',
    tags: ['SW'],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'TailwindCSS',
      'Solidity',
    ],
    github: 'https://github.com/AmmarMo123/DAFP',
    image: {
      placeholderLabel: 'DAFP',
      aspectRatio: '16 / 9',
      videoSrc: 'projects/dafp.mp4',
    },
  },
  {
    id: 'fpga-ocr',
    title: 'FPGA Optical Character Recognition',
    description:
      'A neural network written in Verilog that runs on an FPGA and recognizes handwritten MNIST digits.',
    tags: ['HW', 'ML'],
    technologies: ['Verilog', 'Python'],
    github: 'https://github.com/AmmarMo123/FPGA-Digit-Classifier',
    image: {
      placeholderLabel: 'FPGA OCR',
      aspectRatio: '16 / 9',
      src: 'projects/fpga-ocr.png',
    },
  },
  {
    id: 'fpga-tetris',
    title: 'FPGA Tetris',
    description:
      'Tetris running on an FPGA, driven by a state machine and displayed over VGA.',
    tags: ['HW'],
    technologies: ['Verilog'],
    github: 'https://github.com/AmmarMo123/FPGA-tetris',
    image: {
      placeholderLabel: 'FPGA Tetris',
      aspectRatio: '16 / 9',
      videoSrc: 'projects/fpga-tetris.mp4',
    },
  },
  {
    id: 'pipelined-cpu',
    title: 'Single Cycle CPU',
    description:
      'A single cycle 32 bit RISC-V processor written in Verilog.',
    tags: ['HW'],
    technologies: ['Verilog', 'RISC-V'],
    github: 'https://github.com/AmmarMo123/CPU-in-verilog',
    image: {
      placeholderLabel: 'Single Cycle CPU',
      aspectRatio: '16 / 9',
      src: 'projects/pipelined-cpu.png',
    },
  },
];
