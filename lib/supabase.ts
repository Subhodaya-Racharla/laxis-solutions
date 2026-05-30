import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client with elevated permissions (for admin operations)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  category: string;
  in_stock: boolean;
  visible: boolean;
  created_at: string;
};

export type Order = {
  id: string;
  customer_name: string;
  phone: string;
  items: Array<{ product_id: string; name: string; price: number; qty: number }>;
  total: number;
  status: "Pending" | "Confirmed" | "Delivered";
  payment_status: string;
  created_at: string;
};

export type Lead = {
  id: string;
  name: string;
  business_name: string;
  phone: string;
  service: string;
  message: string;
  contacted: boolean;
  created_at: string;
};
