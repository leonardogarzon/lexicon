import ClayPaginationBar, {
  ClayPaginationBarWithBasicItems,
} from "@clayui/pagination-bar";
import ClayButton from "@clayui/button";
import ClayIcon from "@clayui/icon";
import { useState } from "react";

const spritemap = "/images/icons/icons.svg";

const PaginationBarControl = () => {
  const [delta, setDelta] = useState(5);

  return (
    <ClayPaginationBarWithBasicItems
      activeDelta={delta}
      defaultActive={3}
      ellipsisBuffer={3}
      ellipsisProps={{ "aria-label": "More", title: "More" }}
      onDeltaChange={setDelta}
      showDeltasDropDown={false}
      totalItems={21}
      spritemap={spritemap}
    />
  );
};

export default PaginationBarControl;
