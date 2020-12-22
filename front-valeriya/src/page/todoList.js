import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { FIND_MANY_POST } from "../gqls/queries";

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const TodoList = () => {
    const { data } = useQuery(FIND_MANY_POST);

    const renderItems = () => {
        if (!data) return null;
        return data.findManyPost.map((item) => {
            return <div style={{ marginTop: 8 }}>{item.title}</div>;
        });
    };
    return <Container>{renderItems()}</Container>;
};

export default TodoList;
