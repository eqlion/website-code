import * as React from "react";
import { connect } from "react-redux";
import { IconButton } from "@chakra-ui/core";
import { MdBrightness7, MdBrightness4 } from "react-icons/md";

import { changeTheme } from "../actions";

const Button = ({ theme, changeTheme }) => {
    return (
        <IconButton
            aria-label="Change theme"
            icon={theme ? MdBrightness4 : MdBrightness7}
            onClick={changeTheme}
            size="lg"
            variant="ghost"
            bg={theme ? "white" : "gray.900"}
            borderColor="transparent"
            borderWidth={0}
            _hover={{ bg: theme ? "white" : "gray.900" }}
            _focus={{ borderColor: "transparent" }}
            _active={{ bg: theme ? "white" : "gray.900" }}
        />
    );
};

const mapStateToProps = state => ({
    theme: state.theme,
});

const mapDispatchToProps = {
    changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
