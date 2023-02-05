import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      paynesGrey: string;
    };
    fontFamily: {
      antonio: string;
      spartan: string;
    };
    fontWeight: {
      regular: number;
      medium: number;
      bold: number;
    };
    fontSizes: {
      xl: number;
      l: number;
      m: number;
      s: number;
      xs: number;
    };
  }
}
