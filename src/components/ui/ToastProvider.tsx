"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { cn } from "@/lib/utils/cn";

type ToastType = "success" | "error" | "info";

interface ToastItem {
  id: string;
  title?: string;
  description?: string;
  type?: ToastType;
  duration?: number;
}

interface ToastContextValue {
  toast: (t: Omit<ToastItem, "id">) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToastInternal() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("ToastProvider is missing");
  return ctx;
}

export function useToast() {
  return useToastInternal();
}

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);

  const toast = useCallback((t: Omit<ToastItem, "id">) => {
    const id = Math.random().toString(36).slice(2);
    const item: ToastItem = { id, type: "info", duration: 3500, ...t };
    setItems((prev) => [...prev, item]);
    const timeout = item.duration ?? 3500;
    window.setTimeout(() => {
      setItems((prev) => prev.filter((x) => x.id !== id));
    }, timeout);
  }, []);

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed z-[1000] top-4 right-4 space-y-3 w-[calc(100vw-2rem)] max-w-sm">
        {items.map((t) => (
          <div
            key={t.id}
            className={cn(
              "rounded-xl border-2 shadow-lg p-4 bg-white",
              t.type === "success" && "border-green-200",
              t.type === "error" && "border-red-200",
              t.type === "info" && "border-blue-200"
            )}
          >
            {t.title && (
              <div
                className={cn(
                  "font-semibold mb-1",
                  t.type === "success" && "text-green-700",
                  t.type === "error" && "text-red-700",
                  t.type === "info" && "text-blue-700"
                )}
              >
                {t.title}
              </div>
            )}
            {t.description && (
              <div className="text-sm text-gray-700">{t.description}</div>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
