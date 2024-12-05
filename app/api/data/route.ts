import { executeQuery } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const query = `
      SELECT 
        c.*,
        t.email AS tenant_email, t.phone AS tenant_phone, t.pro_status AS tenant_pro_status, t.guarantor_type AS tenant_guarantor_type,
        g.email AS guarantor_email, g.phone AS guarantor_phone, g.pro_status AS guarantor_pro_status
      FROM [dbo].[CardItems] c
      LEFT JOIN [dbo].[Users] t ON c.tenant_id = t.id
      LEFT JOIN [dbo].[Users] g ON c.guarantor_id = g.id
    `;
    
    const result = await executeQuery(query);
    
    interface CardItem {
      name: string;
      reference: string;
      request_date: string;
      status: string;
      tenant_email: string;
      tenant_phone: string;
      tenant_pro_status: string;
      tenant_guarantor_type: string;
      guarantor_email?: string;
      guarantor_phone?: string;
      guarantor_pro_status?: string;
      validated: boolean;
    }

    const formattedResult = result.map((item: CardItem) => ({
      name: item.name,
      reference: item.reference,
      request_date: item.request_date,
      status: item.status,
      tenant: {
        email: item.tenant_email,
        phone: item.tenant_phone,
        pro_status: item.tenant_pro_status,
        guarantor_type: item.tenant_guarantor_type
      },
      guarantor: item.guarantor_email ? {
        email: item.guarantor_email,
        phone: item.guarantor_phone,
        pro_status: item.guarantor_pro_status
      } : undefined,
      validated: item.validated
    }));

    return NextResponse.json(formattedResult);
  } catch (error) {
    console.log("the error : ", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}