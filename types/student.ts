export interface Student {
  id: string;
  parentId: string;
  name: string;
  age: number;
  grade: number;
  specialNeeds?: string;
  createdAt: string;
}

export interface StudentFormData {
  name: string;
  age: number;
  grade: number;
  specialNeeds?: string;
}
