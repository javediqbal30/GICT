import { neon } from '@neondatabase/serverless';

export interface ContactRecord {
  id?: number;
  name: string;
  email: string;
  phone: string;
  topic?: string;
  message?: string;
  variant?: 'contact' | 'corporate';
  company?: string;
  team_size?: string;
  format?: string;
  status?: string;
  created_at?: string;
}

export function getDatabaseUrl(): string {
  return (
    import.meta.env.DATABASE_URL ||
    process.env.DATABASE_URL ||
    ''
  );
}

export function isDbConfigured(): boolean {
  const url = getDatabaseUrl();
  return Boolean(url && url.trim().startsWith('postgresql://'));
}

export function getDb() {
  const connectionString = getDatabaseUrl();
  if (!connectionString) {
    throw new Error('Neon DATABASE_URL is not configured.');
  }
  return neon(connectionString);
}

/**
 * Inserts a new contact or lead into Neon DB contacts table
 */
export async function saveContactEnquiry(data: {
  name: string;
  email: string;
  phone: string;
  topic?: string;
  message?: string;
  variant?: 'contact' | 'corporate';
  company?: string;
  teamSize?: string;
  format?: string;
}): Promise<{ success: boolean; id?: number; error?: string }> {
  try {
    if (!isDbConfigured()) {
      console.warn('[Neon DB] DATABASE_URL not configured. Skipping database save.');
      return { success: false, error: 'Database not configured' };
    }

    const sql = getDb();
    const result = await sql`
      INSERT INTO contacts (
        name,
        email,
        phone,
        topic,
        message,
        variant,
        company,
        team_size,
        format
      ) VALUES (
        ${data.name},
        ${data.email},
        ${data.phone},
        ${data.topic || null},
        ${data.message || null},
        ${data.variant || 'contact'},
        ${data.company || null},
        ${data.teamSize || null},
        ${data.format || null}
      )
      RETURNING id, created_at;
    `;

    const insertedId = result[0]?.id;
    return { success: true, id: insertedId };
  } catch (err: any) {
    console.error('[Neon DB Error] Failed to save contact enquiry:', err);
    return { success: false, error: err?.message || 'Database insert failed' };
  }
}
