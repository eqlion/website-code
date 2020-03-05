import * as React from "react";
import { Text } from "@chakra-ui/core";

export default props => {
    const { children } = props;
    return (
        <Text textAlign="justify" my={2} fontSize={["sm", "md", "lg", "xl"]}>
            {children}
        </Text>
    );
};
