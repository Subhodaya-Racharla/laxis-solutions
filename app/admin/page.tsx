"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import type { Product, Order, Lead } from "@/lib/supabase";
import Image from "next/image";
import {
  LogOut,
  Package,
  ShoppingCart,
  Users,
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  CheckCircle,
  Circle,
  RefreshCw,
} from "lucide-react";

const ADMIN_PASSWORD = (process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "Lalitha.kumari").trim();

// ─── Login ────────────────────────────────────────────────────────────────────
function Login({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem("laxis_admin", "1");
      onLogin();
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h1 className="font-heading font-bold text-white text-3xl text-center mb-2">
          Laxis Admin
        </h1>
        <p className="text-[#6b7280] text-sm text-center mb-8">
          Enter your password to continue
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 flex flex-col gap-4"
        >
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Admin password"
            className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6366f1] transition-colors"
            autoFocus
          />
          {error && <p className="text-red-400 text-xs">{error}</p>}
          <button
            type="submit"
            className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-medium py-3 rounded-xl transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Products Tab ─────────────────────────────────────────────────────────────
function ProductsTab() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image_url: "",
    category: "",
    in_stock: true,
    visible: true,
  });

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) console.error("Products fetch error:", error.message);
      setProducts(data || []);
    } catch (e) {
      console.error("Products fetch failed:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const openAdd = () => {
    setEditing(null);
    setForm({ name: "", price: "", description: "", image_url: "", category: "", in_stock: true, visible: true });
    setShowForm(true);
  };

  const openEdit = (p: Product) => {
    setEditing(p);
    setForm({ name: p.name, price: String(p.price), description: p.description, image_url: p.image_url, category: p.category, in_stock: p.in_stock, visible: p.visible });
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...form, price: parseFloat(form.price) };
    if (editing) {
      await supabase.from("products").update(payload).eq("id", editing.id);
    } else {
      await supabase.from("products").insert([payload]);
    }
    setShowForm(false);
    fetchProducts();
  };

  const deleteProduct = async (id: string) => {
    if (!confirm("Delete this product?")) return;
    await supabase.from("products").delete().eq("id", id);
    fetchProducts();
  };

  const toggleField = async (id: string, field: "visible" | "in_stock", val: boolean) => {
    await supabase.from("products").update({ [field]: !val }).eq("id", id);
    fetchProducts();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading font-bold text-white text-xl">Products</h2>
        <div className="flex gap-3">
          <button onClick={fetchProducts} className="p-2 rounded-lg border border-[#1f1f1f] text-[#6b7280] hover:text-white transition-colors">
            <RefreshCw size={16} />
          </button>
          <button onClick={openAdd} className="inline-flex items-center gap-2 bg-[#6366f1] hover:bg-[#4f46e5] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            <Plus size={16} /> Add Product
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h3 className="font-heading font-bold text-white text-lg mb-5">
              {editing ? "Edit Product" : "Add Product"}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                { label: "Product Name", name: "name", placeholder: "e.g. Chicken Biryani" },
                { label: "Price (₹)", name: "price", placeholder: "299", type: "number" },
                { label: "Category", name: "category", placeholder: "e.g. Main Course" },
                { label: "Image URL", name: "image_url", placeholder: "https://..." },
              ].map((f) => (
                <div key={f.name} className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#6b7280]">{f.label}</label>
                  <input
                    required={f.name === "name" || f.name === "price"}
                    type={f.type || "text"}
                    name={f.name}
                    value={(form as Record<string, unknown>)[f.name] as string}
                    onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))}
                    placeholder={f.placeholder}
                    className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#4b5563] focus:outline-none focus:border-[#6366f1] transition-colors"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#6b7280]">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                  rows={3}
                  className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#4b5563] focus:outline-none focus:border-[#6366f1] transition-colors resize-none"
                />
              </div>
              <div className="flex gap-6">
                {[
                  { field: "in_stock" as const, label: "In Stock" },
                  { field: "visible" as const, label: "Visible" },
                ].map(({ field, label }) => (
                  <label key={field} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form[field]}
                      onChange={(e) => setForm((p) => ({ ...p, [field]: e.target.checked }))}
                      className="w-4 h-4 accent-[#6366f1]"
                    />
                    <span className="text-sm text-[#9ca3af]">{label}</span>
                  </label>
                ))}
              </div>
              <div className="flex gap-3 mt-2">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 border border-[#1f1f1f] text-white py-2.5 rounded-lg text-sm hover:bg-[#1f1f1f] transition-colors">
                  Cancel
                </button>
                <button type="submit" className="flex-1 bg-[#6366f1] hover:bg-[#4f46e5] text-white py-2.5 rounded-lg text-sm transition-colors">
                  {editing ? "Save Changes" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loading ? (
        <div className="text-[#6b7280] text-sm">Loading…</div>
      ) : products.length === 0 ? (
        <div className="text-center py-16 text-[#6b7280]">No products yet. Add your first product.</div>
      ) : (
        <div className="grid gap-3">
          {products.map((p) => (
            <div key={p.id} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 flex items-center gap-4">
              {p.image_url && (
                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-[#1f1f1f] relative">
                  <Image src={p.image_url} alt={p.name} fill className="object-cover" unoptimized />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-white text-sm">{p.name}</span>
                  {p.category && <span className="text-xs text-[#6b7280] bg-[#1f1f1f] px-2 py-0.5 rounded-full">{p.category}</span>}
                </div>
                <p className="text-[#6366f1] text-sm font-medium">₹{p.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => toggleField(p.id, "in_stock", p.in_stock)} title={p.in_stock ? "In Stock" : "Out of Stock"} className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${p.in_stock ? "border-green-500/30 text-green-400 bg-green-400/5" : "border-red-500/30 text-red-400 bg-red-400/5"}`}>
                  {p.in_stock ? "In Stock" : "Out of Stock"}
                </button>
                <button onClick={() => toggleField(p.id, "visible", p.visible)} title={p.visible ? "Visible" : "Hidden"} className="p-1.5 rounded-lg border border-[#1f1f1f] text-[#6b7280] hover:text-white transition-colors">
                  {p.visible ? <Eye size={14} /> : <EyeOff size={14} />}
                </button>
                <button onClick={() => openEdit(p)} className="p-1.5 rounded-lg border border-[#1f1f1f] text-[#6b7280] hover:text-white transition-colors">
                  <Edit2 size={14} />
                </button>
                <button onClick={() => deleteProduct(p.id)} className="p-1.5 rounded-lg border border-[#1f1f1f] text-red-400 hover:text-red-300 transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Orders Tab ───────────────────────────────────────────────────────────────
function OrdersTab() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) console.error("Orders fetch error:", error.message);
      setOrders(data || []);
    } catch (e) {
      console.error("Orders fetch failed:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("orders").update({ status }).eq("id", id);
    fetchOrders();
  };

  const statusColors: Record<string, string> = {
    Pending: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    Confirmed: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    Delivered: "text-green-400 bg-green-400/10 border-green-400/20",
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading font-bold text-white text-xl">Orders</h2>
        <button onClick={fetchOrders} className="p-2 rounded-lg border border-[#1f1f1f] text-[#6b7280] hover:text-white transition-colors">
          <RefreshCw size={16} />
        </button>
      </div>

      {loading ? (
        <div className="text-[#6b7280] text-sm">Loading…</div>
      ) : orders.length === 0 ? (
        <div className="text-center py-16 text-[#6b7280]">No orders yet.</div>
      ) : (
        <div className="grid gap-4">
          {orders.map((o) => (
            <div key={o.id} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="font-medium text-white">{o.customer_name}</p>
                  <p className="text-[#6b7280] text-sm">{o.phone}</p>
                </div>
                <div className="text-right">
                  <p className="font-heading font-bold text-white text-lg">₹{o.total}</p>
                  <p className="text-xs text-[#6b7280]">
                    {new Date(o.created_at).toLocaleDateString("en-IN")}
                  </p>
                </div>
              </div>

              {o.items && (
                <div className="mb-3 text-xs text-[#9ca3af]">
                  {o.items.map((item, i) => (
                    <span key={i}>
                      {item.name} ×{item.qty}
                      {i < o.items.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-3 flex-wrap">
                <span className={`text-xs px-2.5 py-1 rounded-full border ${statusColors[o.status] || "text-[#9ca3af] bg-[#1f1f1f] border-[#1f1f1f]"}`}>
                  {o.status}
                </span>
                {o.payment_status && (
                  <span className="text-xs text-[#6b7280] bg-[#1f1f1f] px-2.5 py-1 rounded-full">
                    Payment: {o.payment_status}
                  </span>
                )}
                <div className="ml-auto flex gap-2">
                  {["Pending", "Confirmed", "Delivered"].map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(o.id, s)}
                      disabled={o.status === s}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${o.status === s ? "bg-[#6366f1] border-[#6366f1] text-white" : "border-[#1f1f1f] text-[#6b7280] hover:text-white hover:border-[#6366f1]"}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Leads Tab ────────────────────────────────────────────────────────────────
function LeadsTab() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) console.error("Leads fetch error:", error.message);
      setLeads(data || []);
    } catch (e) {
      console.error("Leads fetch failed:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const toggleContacted = async (id: string, current: boolean) => {
    await supabase.from("leads").update({ contacted: !current }).eq("id", id);
    fetchLeads();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading font-bold text-white text-xl">Leads</h2>
        <button onClick={fetchLeads} className="p-2 rounded-lg border border-[#1f1f1f] text-[#6b7280] hover:text-white transition-colors">
          <RefreshCw size={16} />
        </button>
      </div>

      {loading ? (
        <div className="text-[#6b7280] text-sm">Loading…</div>
      ) : leads.length === 0 ? (
        <div className="text-center py-16 text-[#6b7280]">No leads yet.</div>
      ) : (
        <div className="grid gap-4">
          {leads.map((l) => (
            <div key={l.id} className={`bg-[#111111] border rounded-xl p-5 transition-colors ${l.contacted ? "border-[#1f1f1f] opacity-60" : "border-[#6366f1]/30"}`}>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <p className="font-medium text-white">{l.name}</p>
                  {l.business_name && (
                    <p className="text-[#9ca3af] text-sm">{l.business_name}</p>
                  )}
                  <a href={`tel:${l.phone}`} className="text-[#6366f1] text-sm hover:underline">
                    {l.phone}
                  </a>
                </div>
                <div className="text-right flex flex-col items-end gap-2">
                  <p className="text-xs text-[#6b7280]">
                    {new Date(l.created_at).toLocaleDateString("en-IN")}
                  </p>
                  <button
                    onClick={() => toggleContacted(l.id, l.contacted)}
                    className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors ${l.contacted ? "border-green-500/30 text-green-400 bg-green-400/5" : "border-[#1f1f1f] text-[#6b7280] hover:border-[#6366f1] hover:text-white"}`}
                  >
                    {l.contacted ? (
                      <><CheckCircle size={11} /> Contacted</>
                    ) : (
                      <><Circle size={11} /> Mark Contacted</>
                    )}
                  </button>
                </div>
              </div>
              {l.service && (
                <span className="inline-block text-xs bg-[#6366f1]/10 text-[#818cf8] border border-[#6366f1]/20 px-2.5 py-1 rounded-full mb-2">
                  {l.service}
                </span>
              )}
              {l.message && (
                <p className="text-[#9ca3af] text-sm mt-2 leading-relaxed">{l.message}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Admin Shell ──────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [tab, setTab] = useState<"products" | "orders" | "leads">("leads");

  useEffect(() => {
    if (sessionStorage.getItem("laxis_admin") === "1") {
      setAuthenticated(true);
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem("laxis_admin");
    setAuthenticated(false);
  };

  if (!authenticated) {
    return <Login onLogin={() => setAuthenticated(true)} />;
  }

  const tabs = [
    { id: "leads" as const, label: "Leads", icon: Users },
    { id: "products" as const, label: "Products", icon: Package },
    { id: "orders" as const, label: "Orders", icon: ShoppingCart },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-[#1f1f1f] bg-[#0a0a0a] sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <span className="font-heading font-bold text-white text-lg">
            Laxis Admin
          </span>
          <button
            onClick={logout}
            className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-white transition-colors"
          >
            <LogOut size={15} /> Logout
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-[#1f1f1f] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex gap-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 px-4 py-3.5 text-sm font-medium border-b-2 transition-colors ${
                tab === id
                  ? "border-[#6366f1] text-white"
                  : "border-transparent text-[#6b7280] hover:text-white"
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {tab === "products" && <ProductsTab />}
        {tab === "orders" && <OrdersTab />}
        {tab === "leads" && <LeadsTab />}
      </div>
    </div>
  );
}
