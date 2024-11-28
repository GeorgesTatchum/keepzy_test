export interface CardItem {
    name: string;
    reference: string;
    request_date: string;
    status?: 'complet' | 'incomplet' | 'rejete';
    tenant: User;
    guarantor?: User;
    validated: boolean;
}

interface User {
    email: string;
    phone: string;
    pro_status: string;
    guarantor_type?: string;
}