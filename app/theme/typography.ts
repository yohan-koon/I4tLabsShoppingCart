const fonts = {
    roboto: {
        thin: 'Roboto-Thin',
        light: 'Roboto-Light',
        regular: 'Roboto-Regular',
        medium: 'Roboto-Medium',
        bold: 'Roboto-Bold',
    }, 
    notoSans: {
        thin: 'NotoSans-Thin',
        light: 'NotoSans-Light',
        regular: 'NotoSans-Regular',
        medium: 'NotoSans-Medium',
        semiBold: 'NotoSans-SemiBold',
        bold: 'NotoSans-Bold',
    }
}

export const typography = {
    /**
     * The fonts that are used throughout the application.
     */
    fonts,
    /**
     * The primary font family.
     */
    primary: fonts.roboto,
    /**
     * The secondary font family.
     */
    secondary: fonts.notoSans,
}