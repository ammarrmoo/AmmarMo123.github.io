import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'study-spot',
    title: 'Study Spot',
    description:
      'A web app that shows York University students which classrooms are free to study in. Over 5000 students use it.',
    reflection:
      "I got tired of walking around campus looking for an empty room to study in, so two friends and I built this using YorkU's official class schedules. Over 5,000 students use it now. Having real people depend on it taught me a lot about keeping a site up, fixing weird bugs users find, and maintaining something long term. That's stuff I never really ran into with class projects.",
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
    reflection:
      "I wanted to see if sign language recognition could work with nothing but a regular webcam. It uses OpenCV and MediaPipe to track your hand, then a SciKit model I trained guesses which ASL letter you're signing. I put it behind Flask and React so anyone can try it in their browser, which I cared about more than chasing a few extra percent of accuracy.",
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
    reflection:
      "Four of us built this in 36 hours at Hack the North 2024, and it was my first time writing Solidity. I had to learn how smart contracts work on the fly because the rest of the team was waiting on my parts. Winning was awesome, but honestly the best part was getting something working that fast.",
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
    reflection:
      "Normally a neural network is a few lines of PyTorch. Here every matrix multiply, ReLU, and memory read had to be written by hand in Verilog. The hardest part was getting UART working reliably so I could send drawings over from a touchscreen. Seeing the board actually classify my handwriting was super satisfying, and it made me understand what ML looks like at the hardware level.",
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
    reflection:
      "A friend and I built this on a DE10-Lite board. Writing a game in hardware is really different from writing one in code since there are no functions or loops to fall back on. Falling pieces, collisions, and clearing lines all had to be states in a state machine, and the whole thing draws to a monitor over VGA.",
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
    title: 'Pipelined CPU',
    description:
      'A pipelined 32 bit RISC-V processor written in Verilog.',
    reflection:
      "I learned about pipeline architecture in class, but building this is when they actually clicked. Fetch, decode, execute, memory, and writeback are each pretty simple by themselves. Getting all five to run at once without instructions stepping on each other took a lot of debugging, and that's where I learned the most.",
    tags: ['HW'],
    technologies: ['Verilog', 'RISC-V'],
    github: 'https://github.com/AmmarMo123/CPU-in-verilog',
    image: {
      placeholderLabel: 'Pipelined CPU',
      aspectRatio: '16 / 9',
      src: 'projects/pipelined-cpu.png',
    },
  },
];
