const BOX_BORDER = "1px solid rgba(0,0,0,.1)";
const BORDER_RADIUS = "4px";

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
  darkBleuColor: "#1D2439",

  primaryColor: "#1D2439"
};

export type ITheme = typeof theme;

export default theme;
