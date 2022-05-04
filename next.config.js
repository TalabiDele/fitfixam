module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
    loader: "imgix",
    path: "/",
  },
  env: {
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  },
};
