// ---- route path ----

export const ExcludeNavbarFooter = [
  "/cart/shipment",
  "/dashboard",
  "/dashboard/admin",
  "/dashboard/seller",
  "/myshop",
  "/login",
  "/register",
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
  search: "",
  password: "",
  passwordConfirm: "",
};

export const initialSignInState = {
  email: "",
  password: "",
};

export const initialSignUpState = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

export const signInFormControls = [
  {
    name: "email",
    label: "email",
    placeholder: "Enter your email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
  },
];

export const signUpFormControls = [
  {
    name: "name",
    label: "name",
    placeholder: "Enter your name",
    type: "text",
    componentType: "input",
  },
  {
    name: "email",
    label: "email",
    placeholder: "Enter your email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
  },

  {
    name: "passwordConfirm",
    label: "password confirm",
    placeholder: "Enter your password confirmation",
    type: "password",
    componentType: "input",
  },
];

// TODO : NEW ADDED ------------------------
