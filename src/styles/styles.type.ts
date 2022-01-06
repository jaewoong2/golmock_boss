type colorType = {
    priamry: string;
    secondary: string;
    third: string;
    forth: string;
    hover: string;
    fontWhite: string;
    fontBlack: string;
    background: string;
    listBackground: string;
}


type borderType = {
    primary: string,
    radius: string,
}

type sizeType = {
    device: {
        mobile: string
        tablet: string
    }
    font: {
        small: string,
        medium: string,
        large: string,
        title: string,
    }
}

export type themeType = {
    color: colorType;
    border: borderType;
    size: sizeType
}