import { Flex } from "../../Shared/Flex";
import { Text } from "../../Shared/Text";
import { Image } from "../../Shared/Image";
import { bindActionCreators } from "redux";
import { colors } from "../../Theme/colors";
import { Button } from "../../Shared/Button";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/actions/image-actions";
import { IoImagesOutline } from "react-icons/io5";
import { AiOutlineDelete, AiOutlineSafetyCertificate } from "react-icons/ai";

const ApprovedList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { removeImage, removeAllAccepted } = bindActionCreators(
    actions,
    dispatch
  );

  return (
    <Flex
      p="0.5rem"
      br="0.4rem"
      bg="accent3"
      direction="column"
      width={{ sm: "100%", md: "100%", lg: "60%" }}
      height={{ sm: "auto", md: "auto", lg: "100%" }}
    >
      <Flex
        width="100%"
        align="center"
        p="0.5rem"
        overflow="hidden"
        justify="space-between"
        height={{ sm: "auto", md: "auto", lg: "auto" }}
      >
        <Flex align="center">
          <AiOutlineSafetyCertificate color={colors.accent2} size="0.8rem" />
          <Text p="0 0 0 0.4rem" weight="bold" size="0.6rem">
            Approved List
          </Text>
        </Flex>
        <Button
          type="error"
          color="text"
          hoverScale={1}
          p="0.2rem 1rem"
          m="0 0.2rem 0 0"
          fontSize="0.5rem"
          onClick={removeAllAccepted}
          disabled={state?.accepted?.length < 1}
        >
          <Flex align="center">
            <AiOutlineDelete size="0.8rem" />
            <Flex p="0.1rem" />
            Delete all
          </Flex>
        </Button>
      </Flex>

      {state?.accepted && (
        <Flex wrap width="100%" height="100%">
          {state.accepted.length > 0 ? (
            state.accepted.map((item) => (
              <Flex
                width={{ sm: "50%", md: "50%", lg: "33.3%" }}
                key={item?.id}
                pos="relative"
              >
                <Button
                  alignRight
                  type="ghost"
                  width="1.6rem"
                  pos="absolute"
                  height="1.6rem"
                  hoverScale={1.1}
                  p="0.6rem 1.4rem"
                  onClick={() => removeImage(item?.id)}
                >
                  <AiOutlineDelete size="0.8rem" />
                </Button>
                <Flex height="10rem" width="100%" p="0.2rem">
                  <Flex height="100%" width="100%" br="0.4rem">
                    <Image height="100%" width="100%" src={item?.url} />
                  </Flex>
                </Flex>
              </Flex>
            ))
          ) : (
            <Flex
              p="2rem 0"
              width="100%"
              height="100%"
              align="center"
              justify="center"
              direction="column"
            >
              <IoImagesOutline fontSize="1.8rem" color={colors.accent2} />
              <Flex width="14rem">
                <Text p="0.5rem" size="0.6rem" align="center">
                  No image is accepted yet. Accept images to see them here as a
                  collection.
                </Text>
              </Flex>
            </Flex>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default ApprovedList;
