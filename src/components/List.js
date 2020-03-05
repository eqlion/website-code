import * as React from "react";
import { List } from "@chakra-ui/core";

export default ({ children }) => (
    <List styleType="disc" fontSize={["sm", "md", "lg", "xl"]}>
        {children}
    </List>
);
