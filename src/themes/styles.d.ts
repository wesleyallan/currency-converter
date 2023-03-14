import Light from "./Light";

declare module 'styled-components' {
  type CustomTheme = typeof Light;
  export interface DefaultTheme extends CustomTheme {};
}