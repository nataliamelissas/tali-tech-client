import { Camp } from '@/types/camp';

// Mock camp data - will be replaced with real API data later
export const mockCamps: Camp[] = [
  {
    id: '1',
    weekNumber: 1,
    name: 'Block-Based Foundations',
    description: 'Perfect for beginners! Learn the basics of coding through Scratch and Minecraft Education. Students will explore sequences, loops, events, and debugging in a fun, game-based environment.',
    ageMin: 7,
    ageMax: 10,
    gradeMin: 2,
    gradeMax: 5,
    maxStudents: 10,
    currentEnrolled: 3, // Mock data
    startDate: '2026-06-15',
    endDate: '2026-06-19',
    timeStart: '09:00',
    timeEnd: '12:00',
    price: 279,
    earlyBirdPrice: 249,
    earlyBirdDeadline: '2026-04-01',
    supplyFee: 35,
    tools: ['Scratch', 'Minecraft Education'],
    focus: ['Sequences', 'Loops', 'Events', 'Debugging'],
    prerequisites: null,
  },
  {
    id: '2',
    weekNumber: 2,
    name: 'Bridge to Text Coding',
    description: 'Ready for the next step? Transition from block-based coding to real text-based programming with Minecraft Education and Python. Learn functions, variables, and get introduced to professional coding syntax.',
    ageMin: 9,
    ageMax: 13,
    gradeMin: 4,
    gradeMax: 8,
    maxStudents: 10,
    currentEnrolled: 5, // Mock data
    startDate: '2026-06-23',
    endDate: '2026-06-27',
    timeStart: '09:00',
    timeEnd: '12:00',
    price: 279,
    earlyBirdPrice: 249,
    earlyBirdDeadline: '2026-04-01',
    supplyFee: 35,
    tools: ['Minecraft Education', 'Google Colab'],
    focus: ['Functions', 'Variables', 'Intro Text Syntax'],
    prerequisites: 'Week 1 OR prior block coding experience',
  },
  {
    id: '3',
    weekNumber: 3,
    name: 'Python & AI Deep Dive',
    description: 'For advanced students ready to code like the pros! Dive deep into Python programming and explore the exciting world of AI and machine learning. Build real projects using Google Colab and ChatGPT API.',
    ageMin: 11,
    ageMax: 16,
    gradeMin: 6,
    gradeMax: 11,
    maxStudents: 10,
    currentEnrolled: 7, // Mock data
    startDate: '2026-07-06',
    endDate: '2026-07-10',
    timeStart: '09:00',
    timeEnd: '12:00',
    price: 279,
    earlyBirdPrice: 249,
    earlyBirdDeadline: '2026-04-01',
    supplyFee: 35,
    tools: ['Google Colab', 'ChatGPT API'],
    focus: ['Data Structures', 'AI/ML Concepts', 'Projects'],
    prerequisites: 'Week 2 OR prior Python/text coding experience',
  },
];

// Helper function to check if early bird pricing is active
export function isEarlyBird(): boolean {
  const now = new Date();
  const deadline = new Date('2026-04-01');
  return now < deadline;
}

// Helper function to get current price for a camp
export function getCurrentPrice(camp: Camp): number {
  return isEarlyBird() ? camp.earlyBirdPrice : camp.price;
}

// Mock testimonials - will integrate Google Reviews API later
export const mockTestimonials = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    text: 'My daughter absolutely loved TaliTech! She went from never touching code to building her own Scratch games in just one week. The instructors are patient, knowledgeable, and truly care about the kids.',
    date: '2025-07-15',
  },
  {
    id: '2',
    author: 'David K.',
    rating: 5,
    text: 'Best investment we made this summer. My son attended all three weeks and his confidence soared. He\'s now building Python projects at home and talking about becoming a software engineer!',
    date: '2025-07-22',
  },
  {
    id: '3',
    author: 'Jennifer L.',
    rating: 5,
    text: 'The curriculum is perfectly tailored for each age group. My 8-year-old learned Scratch while my 12-year-old dove into Python. Both were challenged and engaged the entire time.',
    date: '2025-07-10',
  },
];
