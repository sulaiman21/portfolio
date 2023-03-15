type BlackAndWhiteSimple = {
  black: string;
  white: string;
};

declare module "@mui/material/styles" {
  interface PaletteColorOptions {
    light?: string;
    main: string;
    dark?: string;
  }

  interface PaletteColor {
    main: string;
  }

  interface SimplePaletteColorOptions {
    light?: string;
    main: string;
    dark?: string;
  }

  interface Palette {
    bw?: BlackAndWhiteSimple;
  }

  interface PaletteOptions {
    bw?: BlackAndWhiteSimple;
  }
}

export {};
