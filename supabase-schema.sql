-- Laxis Solutions — Supabase Schema
-- Run this in your Supabase SQL Editor

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name        TEXT NOT NULL,
  price       NUMERIC(10, 2) NOT NULL,
  description TEXT DEFAULT '',
  image_url   TEXT DEFAULT '',
  category    TEXT DEFAULT '',
  in_stock    BOOLEAN DEFAULT true,
  visible     BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name   TEXT NOT NULL,
  phone           TEXT NOT NULL,
  items           JSONB DEFAULT '[]',
  total           NUMERIC(10, 2) DEFAULT 0,
  status          TEXT DEFAULT 'Pending' CHECK (status IN ('Pending', 'Confirmed', 'Delivered')),
  payment_status  TEXT DEFAULT 'Unpaid',
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Leads table
CREATE TABLE IF NOT EXISTS leads (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name          TEXT NOT NULL,
  business_name TEXT DEFAULT '',
  phone         TEXT NOT NULL,
  service       TEXT DEFAULT '',
  message       TEXT DEFAULT '',
  contacted     BOOLEAN DEFAULT false,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders   ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads    ENABLE ROW LEVEL SECURITY;

-- Products: public read for visible products, service-role full access
CREATE POLICY "Public can view visible products"
  ON products FOR SELECT
  USING (visible = true);

-- Leads: allow insert from anon (contact form), service-role manages rest
CREATE POLICY "Anyone can submit a lead"
  ON leads FOR INSERT
  WITH CHECK (true);

-- Service role bypasses RLS by default for admin operations
