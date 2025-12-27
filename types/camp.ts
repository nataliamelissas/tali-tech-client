export interface Camp {
  id: string;
  weekNumber: 1 | 2 | 3;
  name: string;
  description: string;
  ageMin: number;
  ageMax: number;
  gradeMin: number;
  gradeMax: number;
  maxStudents: number;
  currentEnrolled: number;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  timeStart: string; // "09:00"
  timeEnd: string; // "12:00"
  price: number; // Regular price (279)
  earlyBirdPrice: number; // Early bird price (249)
  earlyBirdDeadline: string; // ISO date string "2026-04-01"
  supplyFee: number; // 35
  tools: string[]; // ["Scratch", "Minecraft Education"]
  focus: string[]; // ["Sequences", "loops", "events", "debugging"]
  prerequisites: string | null;
}

export interface CampAvailability {
  campId: string;
  available: number;
  total: number;
  isFull: boolean;
  percentFull: number;
}

export type CampStatus = 'available' | 'filling-fast' | 'full';

export interface CampWithAvailability extends Camp {
  availability: CampAvailability;
  status: CampStatus;
}
