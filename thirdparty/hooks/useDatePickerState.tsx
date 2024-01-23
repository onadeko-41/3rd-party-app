// hooks/useDatePickerState.js
import { useState } from 'react';

export const useDatePickerState = () => {
  const isServer = typeof window === 'undefined';
  const [selectedDate, setSelectedDate] = isServer ? [null, () => {}] : useState<Date | null>(null);

  return {
    selectedDate,
    setSelectedDate,
  };
};

