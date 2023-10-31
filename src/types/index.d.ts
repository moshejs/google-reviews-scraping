import { FetchReviewsOptions } from './common';

export type LocalPlaceInfoParams = {
  placeUrl: string;
  options?: FetchReviewsOptions;
};

export type LocalPlaceReviewsParams = {
  placeUrl: string;
  options?: FetchReviewsOptions & { lastCursor?: string | null };
};
