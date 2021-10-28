import client from "./client";

// urlEndPoint
const endpoint = "/listings";

// Getting the listings
const getListings = () => client.get(endpoint);

// Posting a new listing
const addListing = (listing, onUploadProgress) => {
  const data = new FormData();

  date.append("title", listing.title);
  date.append("price", listing.price);
  date.append("title", listing.title);
  date.append("categoryId", listing.category.value);

  listing.images.forEach((image, index) =>
    data.append({
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
};
