import { Flex } from "../../Shared/Flex";
import { Image } from "../../Shared/Image";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";
import { Button } from "../../Shared/Button";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/actions/image-actions";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { HiOutlineRefresh } from "react-icons/hi";
import { Rotate } from "../../Shared/Rotate";

const AddNew = () => {
  const dispatch = useDispatch();
  const { current, rejected } = useSelector((state) => state);
  const { acceptImage, rejectImage, getNewImage } = bindActionCreators(
    actions,
    dispatch
  );

  useEffect(() => {
    if (!current?.url) getNewImage(rejected);
  }, []);

  return (
    <Flex
      br="1rem"
      bg="bg"
      pos="relative"
      direction="column"
      data-testid="add-new-body"
      width={{ sm: "100%", md: "100%", lg: "40%" }}
      height={{ sm: "100%", md: "100%", lg: "100%" }}
      boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px"
    >
      {current?.url && (
        <Button
          br="1rem"
          alignRight
          pos="absolute"
          p="0.4rem 0.6rem"
          m="0.4rem 0.4rem 0 0"
          onClick={() => getNewImage(rejected)}
        >
          <Flex>
            <HiOutlineRefresh fontSize="0.8rem" />
          </Flex>
        </Button>
      )}
      {current?.url ? (
        <Image
          width="100%"
          height="100%"
          src={current?.url}
          data-testid="current-random-image"
        />
      ) : (
        <Rotate align="center" justify="center" height="100%" width="100%">
          <AiOutlineLoading3Quarters />
        </Rotate>
      )}
      <Flex width="100%" p="1rem" justify="space-between">
        <Button
          full
          br="1rem"
          type="error"
          p="0.3rem 1rem"
          m="0 0.5rem 0 0"
          disabled={!current}
          onClick={() => {
            rejectImage(current);
            getNewImage(rejected);
          }}
        >
          Reject
        </Button>
        <Button
          full
          br="1rem"
          type="primary"
          p="0.3rem 1rem"
          m="0 0 0 0.5rem"
          disabled={!current}
          onClick={() => {
            acceptImage(current);
            getNewImage(rejected);
          }}
        >
          Accept
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddNew;
