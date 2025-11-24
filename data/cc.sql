CREATE TABLE IF NOT EXISTS old_pros_contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  note TEXT NOT NULL,
  type TEXT,                -- e.g. 'professional' | 'business'
  status TEXT DEFAULT 'new',-- 'new' | 'in-progress' | 'done'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_contacts_status 
  ON old_pros_contacts (status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at 
  ON old_pros_contacts (created_at);
CREATE INDEX IF NOT EXISTS idx_contacts_email 
  ON old_pros_contacts (email);