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
                : JavaScript, React, Gatsby, Redux, Chakra UI kit;
            </ListItem>
            <ListItem>
                <Link href="https://github.com/eqlion/rn-darkest">
                    React Native app
                </Link>{" "}
                for the Darkest Dungeon game: TypeScript, React Native, Redux,
                Material UI kit;
            </ListItem>
            <ListItem>
                <Link href="https://github.com/eqlion/rn-wage">
                    React Native app
                </Link>{" "}
                for calculating total hourly-payed salary: JavaScript, React
                Native, Redux, Material UI, React Navigation, components for
                datepicking, calendar.
            </ListItem>
            <ListItem>
                <Link href="https://github.com/eqlion/the-pizza-app">
                    Pizza ordering webapp
                </Link>{" "}
                project (a test task): frontend — React, React Router, Redux,
                antd UI kit; backend — Python3, Flask, MySQL db. Was hosted on
                Heroku (the db might not work anymore).
            </ListItem>
        </List>
    </>
);
