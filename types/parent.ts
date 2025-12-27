export interface Parent {
  id: string;
  email: string;
  name: string;
  phone?: string;
  hasPassword: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ParentFormData {
  email: string;
  name: string;
  phone?: string;
}
