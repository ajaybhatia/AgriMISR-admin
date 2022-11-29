import { useMutation, useQuery } from "@tanstack/react-query";

import axiosInstance from "./axiosInstance";

const deflateParams = (params) =>
  params && Object.keys(params).map((key) => params[key]);

// GET APIS
export const useCropCategories = (params, options) =>
  useQuery(
    ["getCropCategories", deflateParams(params)],
    () =>
      axiosInstance.get("Crop/getCropCategories", {
        params,
      }),
    options
  );

export const useCrops = (params, options) =>
  useQuery(
    ["getCrops", deflateParams(params)],
    () =>
      axiosInstance.get("Crop/getCrops", {
        params,
      }),
    options
  );

// POST APIS
export const useCreateUpdateCropCategory = (options) =>
  useMutation(
    (data) => axiosInstance.post("Crop/createUpdateCropCategory", data),
    options
  );

export const useCreateUpdateCrop = (options) =>
  useMutation(
    (data) => axiosInstance.post("Crop/createUpdateCrop", data),
    options
  );
