import * as React from "react";
import { Link } from "@chakra-ui/core";
import { connect } from "react-redux";

const customLink = ({ theme, href, children }) => (
    <Link href={href} color={theme ? "orange.500" : "orange.200"}>
        {children}
    </Link>
);

const mapStateToProps = state => ({
    theme: state.theme,
});

export default connect(mapStateToProps)(customLink);
