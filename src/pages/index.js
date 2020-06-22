import * as React from "react";
import { Flex, Box, Heading, ThemeProvider } from "@chakra-ui/core";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";

import store from "../store";
import theme from "../theme";

import { Button } from "../components";
import { Bio, Stack, Showcase, Contacts } from "../content";

export default () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Helmet>
                <title>Eqlion's home</title>
            </Helmet>
            <Flex flexDirection="column" align="center">
                <Box m={5} maxW="2xl">
                    <Flex align="baseline">
                        <Button />
                        <Heading ml={5}>about</Heading>
                    </Flex>
                    <Bio />
                    <Flex align="baseline">
                        <Box w={47} />
                        <Heading ml={5}>what i know</Heading>
                    </Flex>
                    <Stack />
                    <Flex align="baseline">
                        <Box w={47} />
                        <Heading ml={5}>what i can show</Heading>
                    </Flex>
                    <Showcase />
                    <Flex align="baseline">
                        <Box w={47} />
                        <Heading ml={5}>contact me</Heading>
                    </Flex>
                    <Contacts />
                </Box>
            </Flex>
        </ThemeProvider>
    </Provider>
);
