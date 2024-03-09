import { SortOrder } from "mongoose";

export const flowerFilter = (query: Record<string, unknown>) => {
  const {
    search,
    minPrice,
    maxPrice,
    type,
    color,
    bloom,
    size,
    fragrance,
    occasions,
    sortBy,
    sortOrder,
  } = query;

  let filter: Record<string, unknown> = {};
  let sort: Record<string, SortOrder> = {};

  if (search) {
    filter = {
      ...filter,
      name: { $regex: search, $options: "i" },
    };
  }

  if (minPrice && maxPrice) {
    filter = {
      ...filter,
      price: { $gte: minPrice, $lte: maxPrice },
    };
  }

  if (minPrice && !maxPrice) {
    filter = {
      ...filter,
      price: { $gte: minPrice },
    };
  }

  if (!minPrice && maxPrice) {
    filter = {
      ...filter,
      price: { $lte: maxPrice },
    };
  }

  if (type) {
    filter = {
      ...filter,
      type,
    };
  }

  if (color) {
    filter = {
      ...filter,
      color,
    };
  }

  if (bloom) {
    filter = {
      ...filter,
      bloom,
    };
  }

  if (size) {
    filter = {
      ...filter,
      size,
    };
  }

  if (fragrance) {
    filter = {
      ...filter,
      fragrance,
    };
  }

  if (occasions) {
    const occasionsArray = (occasions as string).split(",");

    filter = {
      ...filter,
      occasions: {
        $elemMatch: {
          name: { $in: occasionsArray },
        },
      },
    };
  }

  if (sortBy && sortOrder) {
    sort = {
      [sortBy as string]: sortOrder as SortOrder,
    };
  }

  return { filter, sort };
};
