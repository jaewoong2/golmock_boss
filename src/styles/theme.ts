import { themeType } from './styles.type';

export const theme: themeType = {
    color: {
        priamry: `#FEF7DC`,
        secondary: `#E6DDC6`,
        third: `#C2B8A3`,
        forth: `#A19882`,
        hover: `#e8e8e8`,
        fontWhite: "#fff",
        fontBlack: "#000",
        background: '#FFF8F3',
        listBackground: '#A3E4DB',
    },
    border: {
        primary: `1px solid #f3f3f3`,
        radius: `10px`,
    },
    size: {
        device: {
            mobile: "768px",
            tablet: '1450px',
        },
        font: {
            small: "16px",
            medium: "18px",
            large: "42px",
            title: "60px",
        }
    },
    font: {
        primary: `"Nanum Gothic", sans-serif`,
    }
}