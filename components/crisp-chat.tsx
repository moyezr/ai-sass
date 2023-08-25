"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1a3e2779-be14-4ab1-897b-4f8bb133b1ef");
  }, []);

  return null;
};