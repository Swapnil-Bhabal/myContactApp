import { Heading } from "@chakra-ui/react";

const Header = ({title}) => {
    return (
        <Heading fontSize="4xl" color='black.500' bgColor="gray.200" p="5">
            {title}
        </Heading>
    )
}

export default Header;