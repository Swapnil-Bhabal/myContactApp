import { Heading, Flex, Box, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

const Header = ({title}) => {
    return (
        <Heading fontSize="4xl" color='black.500' bgColor="gray.200" p="5">
            <Box>
                <UnorderedList >
                    <Flex flexDirection="row" justifyContent="space-between">
                        <Link as={RouterLink} to="/" textDecoration="none">
                            <ListItem listStyleType="none">Home</ListItem>
                        </Link>
                        <Link as={RouterLink} to="/dashboard" textDecoration="none">
                            <ListItem listStyleType="none">All Messages</ListItem>
                        </Link>
                    </Flex>
                </UnorderedList>
            </Box>
        </Heading>
    )
}

export default Header;