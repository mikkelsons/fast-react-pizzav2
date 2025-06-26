// This version of the app can use the geoapify api for reverse geolocation. It requires an api key, so if you don't have one, I recommend using to the bigdatacloud api. You would have to change a line or two of code in the userSlice.js to make the change. Just change the variable "address" on lines 23-26 to the appropriate one. The geoapify api is convenient in that it will produce an actual physical address, not only a city, ZIP, and country.

// const API_KEY = import.meta.env.VITE_API_KEY;

export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}

// export async function getAddress({ latitude, longitude }) {
//   const res = await fetch(
//     `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${API_KEY}`,
//   );
//   if (!res.ok) throw Error("Failed getting address");

//   const data = await res.json();
//   return data;
// }
