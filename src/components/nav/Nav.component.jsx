import { ClayVerticalNav } from "@clayui/nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const spritemap = "/images/icons/icons.svg";

const NavComponent = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("1");

  const handleNavigate = (item) => {
    setActive(item.id);
    navigate(item.href);
  };

  const items = [

    {
      id: "1",
      href: "/clients",
      label: "Clients",
    },
    {
      id: "2",
      href: "/form",
      label: "Form",
    },
    {
      id: "3",
      href: "/login",
      label: "SignOut",
    },
  ];

  return (
    <ClayVerticalNav
      active={active}
      defaultExpandedKeys={new Set(["1"])}
      items={items}
      large={false}
      onClick
      spritemap={spritemap}
    >
      {(item) => (
        <ClayVerticalNav.Item
          items={item.items}
          key={item.id}
          onClick={() => handleNavigate(item)}
        >
          {item.label}
        </ClayVerticalNav.Item>
      )}
    </ClayVerticalNav>
  );
};

export default NavComponent;
