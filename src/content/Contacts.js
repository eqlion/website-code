import * as React from "react";
import { ListItem } from "@chakra-ui/core";

import { Link, List } from "../components";

export default () => (
    <List>
        <ListItem>
            <Link href="https://vk.com/eqlion">VK</Link>
        </ListItem>
        <ListItem>
            <Link href="https://t.me/Eqlion">TG</Link>
        </ListItem>
        <ListItem>
            <Link href="mailto:lapa.nicholas@gmail.com">email</Link>
        </ListItem>
    </List>
);
