const BOX_BORDER = "1px solid rgba(0,0,0,.1)";
const BORDER_RADIUS = "4px";

export const PRIAMRY_COLOR = "#1D2439";

const theme = {
  whiteBox: `
    border: ${BOX_BORDER};
    border-radius:${BORDER_RADIUS};
    background-color:white;
    z-index: 1; 
  `,

  borderRadius: "4px",

  blackColor: "#1D2439",
  bgColor: "#FAFAFA",
  blueColor: "#0195F6",
  darkBleuColor: PRIAMRY_COLOR,
  lightGreyColor: "#cfd4d5",
  greyColor: "#96A5A6",

  primaryColor: PRIAMRY_COLOR,
};

export type ITheme = typeof theme;

export default theme;
