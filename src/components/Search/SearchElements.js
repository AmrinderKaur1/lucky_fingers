import styled from "styled-components";
import { Input } from "antd";

const {Search} = Input;

export const SearchContainer = styled.div`
    padding: 24px 0;
`;
export const SearchBox = styled(Search)`
    padding: 0 14px 14px 14px;
    .ant-btn {
        background: linear-gradient(90deg,#ff9801,#ff570a);
    }
`;