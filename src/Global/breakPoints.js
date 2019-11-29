const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '575px', //
    tablet: '768px',
    laptop: '1024px',
    laptopM: '1250px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const devicesMin = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopM: `(min-width: ${size.laptopM})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
};

export const devicesMax = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
};

export const devicesHeight = {
    mobileS: size.mobileS,
    mobileM: size.mobileM,
    mobileL: size.mobileL,
    tablet: size.tablet,
    laptop: size.laptop,
    laptopL: size.laptopL,
    desktop: size.desktop,
    desktopL: size.desktop,
};
