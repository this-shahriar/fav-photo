import { Flex } from "../../Shared/Flex";
import { Image } from "../../Shared/Image";
import logo from "../../assets/logo.png";

const Header = () => (
  <Flex p="1rem" br="18px" width={{ sm: "100%", md: "100%", lg: "40%" }}>
    <Image height="2rem" src={logo} />
  </Flex>
);

export default Header;
