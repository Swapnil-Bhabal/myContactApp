import { Box } from "@chakra-ui/react"

const Heading = ({title}) => {
    return (
        <Box bgColor="gray.800" color="white" fontWeight="bold" fontSize="3xl" p="3">
                {title}
        </Box>
    )
}

export default Heading;