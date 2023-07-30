export const clientBaseUrl =
  process.env.NODE_ENV === "development" ? "/" : "/fulcrum.ai-frontend/";

export const clientAssetBaseUrl =
  process.env.NODE_ENV === "development" ? "/fulcrum.ai-frontend/" : "/";
