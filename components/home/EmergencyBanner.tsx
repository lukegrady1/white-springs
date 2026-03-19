'use client';

// ADA: Alert banner with role="alert" and aria-live="assertive" for screen readers. Dismiss button has aria-label. Focus-visible ring on dismiss button.

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface EmergencyBannerProps {
  message?: string;
  show?: boolean;
}

const STORAGE_KEY = 'ws-emergency-dismissed';
const DEFAULT_MESSAGE =
  '\u26A0 Town Hall will be closed Monday, July 7th in observance of a holiday.';

export function EmergencyBanner({
  message = DEFAULT_MESSAGE,
  show = true,
}: EmergencyBannerProps) {
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setDismissed(true);
    }
    setMounted(true);
  }, []);

  if (!mounted || !show || dismissed) {
    return null;
  }

  function handleDismiss() {
    setDismissed(true);
    localStorage.setItem(STORAGE_KEY, 'true');
  }

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="bg-amber-banner text-white"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <p className="text-sm font-body text-white">{message}</p>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss alert"
          className="focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-banner rounded"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
