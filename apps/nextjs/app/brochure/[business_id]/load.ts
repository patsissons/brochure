import { cache } from "react";

async function loadBusiness(businessId: string) {
  return Promise.resolve({
    id: businessId,
    name: "Test Business",
    locations: [
      { id: "123e4567-e89b-12d3-a456-426614174000", name: "Test Location 1" },
      { id: "987fcdeb-51a2-3b4c-9d0e-142357159000", name: "Test Location 2" },
    ],
  });
}

export default cache(loadBusiness);
