import styled from "@emotion/styled";

const ListItemStyle = {
  Li: styled.li`
    font-size: ${({ theme }) => theme.size.font.title};
    padding: 10px;

    &:nth-of-type(3) {
      flex: 0.7;
    }

    &:last-child {
      flex: 0.3;
    }

    span {
      cursor: pointer;
    }
  `,
};

export default ListItemStyle;
