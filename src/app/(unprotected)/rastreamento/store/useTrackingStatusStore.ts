"use client";

import { create } from "zustand";

type TrackingStatusStore = {
  statusByLogId: Record<number, number>;
  setLogStatus: (logId: number, statusId: number) => void;
  clearLogStatus: (logId: number) => void;
};

export const useTrackingStatusStore = create<TrackingStatusStore>((set) => ({
  statusByLogId: {},
  setLogStatus: (logId, statusId) =>
    set((state) => ({
      statusByLogId: {
        ...state.statusByLogId,
        [logId]: statusId,
      },
    })),
  clearLogStatus: (logId) =>
    set((state) => {
      const nextStatusByLogId = { ...state.statusByLogId };

      delete nextStatusByLogId[logId];

      return { statusByLogId: nextStatusByLogId };
    }),
}));
