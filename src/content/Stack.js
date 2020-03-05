import * as React from "react";
import { ListItem } from "@chakra-ui/core";
import { List, Text } from "../components";

export default () => (
    <>
        <Text>I have tried and have experience with:</Text>
        <List>
            <ListItem>
                JS: ES6, yarn, npm. React and React Native + Redux and Redux
                Persist (pretty new to all of it, quickly working my way
                through);
            </ListItem>
            <ListItem>
                Python 3 (have yet to work with any major framework, but have a
                solid grasp of the language, able to figure out quickly if need
                to);
            </ListItem>
            <ListItem>
                English (C1) and Russian (native): can read/write/listen/speak
                on tech/casual/you name it topic;
            </ListItem>
            <ListItem>
                Somewhat experienced with unix systems (mostly working with
                Ubuntu), so cli-utils, git, little bits of bash;
            </ListItem>
            <ListItem>
                LaTeX (perhaps might be useful, several dozens of papers written
                with it).
            </ListItem>
        </List>
    </>
);
