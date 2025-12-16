export interface ClothingItem {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  brand?: string;
  size?: string;
  color?: string;
  location?: string;
}

export interface User {
  name: string;
  email: string;
  avatarUrl: string;
}

export enum AppRoute {
  SPLASH = "/",
  AUTH = "/auth",
  ONBOARDING = "/onboarding",
  HOME = "/home",
  WARDROBE = "/wardrobe",
  OUTFIT_DETAILS = "/outfit-details",
  MIX_MATCH = "/mix-match",
  SCAN = "/scan",
  EDIT_ITEM = "/edit-item",
  PROFILE = "/profile",
  RE_WEAR = "/re-wear",
  STYLE_SWAP = "/style-swap",
  THRIFT = "/thrift",
  SEARCH_LOCATION = "/search-location",
  SET_LOCATION = "/set-location",
  VISUALIZER = "/visualizer",
  PLANNER = "/planner",
}