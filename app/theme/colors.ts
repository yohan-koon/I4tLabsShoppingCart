const palette = {
    neutral100: '#ffffff',
    neutral200: '#bcc1c5',
    neutral300: '#a6acb2',
    neutral400: '#90979f',
    neutral500: '#79828b',
    neutral600: '#636d78',
    neutral700: '#4d5965',
    neutral800: '#364451',
    neutral900: '#202f3e',
    primary100: '#e0defd',
    primary200: '#d1cdfc',
    primary300: '#c1bcfb',
    primary400: '#b2acfa',
    primary500: '#a39bf9',
    primary600: '#938af8',
    primary700: '#8479f7',
    primary800: '#7469f6',
    primary900: '#6558F5',
    secondary500: '#79bb83',
    secondary600: '#62af6f',
    secondary700: '#4ca45a',
    secondary800: '#359846',
    secondary900: '#1f8d31',
    error500: '#FF3C5A',
}

export const colors = {
    /**
     * The palette is used by components that need to reflect the brand identity.
     */
    palette,
    /**
     * transparent color
     */
    transparent: "rgba(0,0,0,0)",
    /**
     * The default color of text in many components.
     */
    text: palette.neutral800,
    /**
     * Secodary text color
     */
    textDim: palette.neutral600,
    /**
     * The default color of the background of many components.
     */
    background: palette.neutral100,
    /**
     * The default color of the border of many components.
     */
    border: palette.neutral300,
    /**
     * The main tinting color.
     */
    primary: palette.primary500,
    /**
     * A subtle color used for borders and lines.
     */
    seperators: palette.neutral300,
    /**
     * The default color of error text, icons and indicators.
     */
    error: palette.error500,
    /**
     * The default color of success text, icons and indicators.
     */
    success: palette.secondary900,
    /**
     * The default tint color of icons.
     */
    icon: palette.neutral600,
}