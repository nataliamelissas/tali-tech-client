export enum RegistrationStatus {
  Pending = 'pending',
  Confirmed = 'confirmed',
  Cancelled = 'cancelled',
}

export enum PaymentStatus {
  Unpaid = 'unpaid',
  Partial = 'partial',
  Paid = 'paid',
}

export enum PaymentPlan {
  Full = 'full',
  Installment = 'installment',
}

export interface Registration {
  id: string;
  parentId: string;
  studentId: string;
  campId: string;
  aftercare: boolean;
  aftercareFee: number;
  registrationDate: string;
  status: RegistrationStatus;
  totalAmount: number;
  discountApplied: number;
  paymentStatus: PaymentStatus;
  paymentPlan: PaymentPlan;
  depositAmount?: number;
  remainingAmount?: number;
  createdAt: string;
}

export interface CartItem {
  studentId: string;
  studentName: string;
  campId: string;
  weekNumber: number;
  basePrice: number;
  supplyFee: number;
  aftercare: boolean;
  aftercareFee: number;
  discount: number;
  finalPrice: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  totalDiscount: number;
  total: number;
}

export interface RegistrationFormData {
  studentId: string;
  campId: string;
  aftercare: boolean;
}
