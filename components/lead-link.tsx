"use client";

import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";

import { trackEvent, type LeadEventName } from "@/lib/tracking";

type LeadLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  className?: string;
  eventName: LeadEventName;
  eventParams?: Record<string, unknown>;
  onClick?: () => void;
};

export default function LeadLink({
  children,
  className,
  eventName,
  eventParams,
  onClick,
  ...props
}: LeadLinkProps) {
  return (
    <Link
      {...props}
      className={className}
      onClick={() => {
        trackEvent(eventName, eventParams);
        onClick?.();
      }}
    >
      {children}
    </Link>
  );
}
