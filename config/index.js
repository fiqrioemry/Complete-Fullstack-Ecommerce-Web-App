// ---- route path ----
export const NavbarFooterRoute = [
  "/",
  "/users",
  "/users/settings",
  "/users/address",
  "/users/transaction",
  "/cart",
  "/product/:id",
  "/shop/product",
  "/[shop]/[product]",
  "/shop:",
  "/shop:/product:",
  "/:shop",
  "/:shop/:product",
];

export const RestrictedRoute = ["/dashboard", "/dashboard/:path"];

export const NonAuthRoute = [
  "/login",
  "/register",
  "/",
  "/product/:id",
  "/search/:params",
  "/category/:params",
  "/[shop]/product/:id",
  "/[shop]",
];

export const AuthRoute = [
  "/users",
  "/users/settings",
  "/users/address",
  "/users/transaction",
  "/cart/shipment",
  "/dashboard",
  "/dashboard/:path",
  "/dashboard/admin",
  "/dashboard/seller",
  "/myshop",
];

//  ---- homepage -----
// homepage : banner
export const banners = [
  {
    url: "/assets/banner1.png",
    title: "banner1",
  },
  {
    url: "/assets/banner2.png",
    title: "banner2",
  },
];

// homepage : category
export const categoryList = [
  {
    title: "Electronics",
    image: "/assets/computer.png",
  },
  {
    title: "Handphone and Tablets",
    image: "/assets/handphone.png",
  },
  {
    title: "Men's Fashion",
    image: "/assets/mens_fashion.png",
  },
  {
    title: "Women's Fashion",
    image: "/assets/womens_fashion.png",
  },
];

export const initialInputState = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  search: "",
};
