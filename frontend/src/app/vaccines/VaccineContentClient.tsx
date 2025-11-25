"use client";
import React from "react";
import useRequireAuth from "../../hooks/useRequireAuth";

export default function VaccineContentClient({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { loading } = useRequireAuth();
  if (loading) return <div>Carregando...</div>;
  return <>{children ?? <div>Conteúdo protegido das vacinas</div>}</>;
}
