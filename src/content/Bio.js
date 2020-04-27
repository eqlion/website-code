import * as React from "react";
import { Link, Text } from "../components";

export default () => (
    <Text>
        Hey, I'm Nikolay Lapa and I'm a{" "}
        {Math.floor((new Date() - new Date(1999, 8, 5)) / 31536000000)} year old
        student from St. Petersburg, Russia, studying laser communication at{" "}
        <Link href="https://en.itmo.ru/en/">ITMO University</Link>. Right now
        I'm looking for a junior frontend job (paid internship would work too!)
        or some other practice to sharpen my skill and fill the lists below. If
        you can suggest something or want to hire me, be sure to contact below!
    </Text>
);
