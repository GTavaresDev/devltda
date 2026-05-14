import { cache } from "react";

import { db } from "@/db";
import type { TrackingStatus } from "@/app/types/status-types";

function mapStatus(status: {
  id: number;
  title: string;
  subTitle: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}): TrackingStatus {
  return {
    id: status.id,
    title: status.title,
    subTitle: status.subTitle,
    content: status.content,
    createdAt: status.createdAt,
    updatedAt: status.updatedAt,
  };
}

export const getTrackingStatuses = cache(async (): Promise<TrackingStatus[]> => {
  const statuses = await db.status.findMany({
    orderBy: { id: "asc" },
  });

  return statuses.map(mapStatus);
});
