import * as React from "react";
import { ListItem } from "@chakra-ui/core";
import { Text, List, Link } from "../components";

export default () => (
    <>
        <Text>Here are some projects I think I can show:</Text>
        <List>
            <ListItem>
                <Link href="https://github.com/eqlion/eqlion.github.io">
                    This site
                </Link>
                : React, Gatsby, Redux, Chakra UI kit;
            </ListItem>
            <ListItem>
                <Link href="https://github.com/eqlion/rn-darkest">
                    React Native app
                </Link>{" "}
                for the Darkest Dungeon game: TypeScript, React Native, Redux,
                Material UI kit.
            </ListItem>
            <ListItem>
                <Link href="https://github.com/eqlion/rn-wage">
                    React Native app
                </Link>{" "}
                for calculating total hourly-payed salary: JavaScrip, React
                Native, Redux, Material UI, React Navigation, components for
                datepicking, calendar
            </ListItem>
        </List>
    </>
);
