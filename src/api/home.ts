import { API_ROUTES } from "@/api-routes";
import { fetchWithHeaders } from "@/lib/fetch-utils";
import { GetHomePageResponse } from "@/types/fetch-data";

export const getHomePageData = async (): Promise<GetHomePageResponse> => {
  return fetchWithHeaders<GetHomePageResponse>(`${API_ROUTES.home}`, {
    next: {
      revalidate: 604800 // 1 week
    }
  });
};