import AddNew from "../Components/AddNew";
import ApprovedList from "../Components/ApprovedList";
import Header from "../Components/Header";
import { Container } from "../Shared/Container";
import { Flex } from "../Shared/Flex";

const Homepage = () => {
  return (
    <Container bg="bg">
      <Flex
        width="100%"
        direction="column"
        height={{ sm: "100%", md: "100%", lg: "100vh" }}
      >
        <Header />
        <Flex
          p="0 1rem 1rem 1rem"
          width="100%"
          height="100%"
          direction={{ sm: "column", md: "column", lg: "row" }}
        >
          <AddNew />
          <Flex p="0.5rem" />
          <ApprovedList />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Homepage;
