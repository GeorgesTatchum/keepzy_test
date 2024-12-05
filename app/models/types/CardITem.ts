export interface CardItem {
    id: number;
    name: string;
    reference: string;
    request_date: Date;
    status?: 'complet' | 'incomplet' | 'rejete';
    tenant: User;
    guarantor?: User;
    validated: boolean;
}

interface User {
    id: number;
    email: string;
    phone: string;
    pro_status: string;
    guarantor_type?: string;
}