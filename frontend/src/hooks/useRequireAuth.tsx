"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useRequireAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        // chama endpoint protegido; backend retorna 200 se token válido, 401 se inválido
        const res = await fetch("/api/vaccine-card/mine", {
          method: "GET",
          credentials: "include",
        });
        if (!mounted) return;
        if (res.status === 200) {
          setLoading(false);
          return;
        }
      } catch {
        // ignore
      }
      router.replace("/");
    })();
    return () => {
      mounted = false;
    };
  }, [router]);

  return { loading };
}
