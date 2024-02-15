import { Button, Provider, TreeView, VerticalBar } from "@clayui/core";
import Icon from "@clayui/icon";

const AppNavComponent = ({ children }) => {
  const items = [
    {
      icon: "tag",
      title: "Tag",
    },
    {
      divider: true,
      icon: "message",
      title: "Message",
    },
    {
      icon: "effects",
      title: "Effects",
    },
  ];

  return (
    <div style={{ height: "400px" }}>
      <Provider >
        <VerticalBar absolute defaultActive="Tag">
          <VerticalBar.Content items={items}>
            {(item) => (
              <VerticalBar.Panel key={item.title}>
                <div className="sidebar-header">
                  <div className="component-title">{item.title}</div>
                </div>
              </VerticalBar.Panel>
            )}
          </VerticalBar.Content>

          <VerticalBar.Bar displayType="light" items={items}>
            {(item) => (
              <VerticalBar.Item divider={item.divider} key={item.title}>
                <Button aria-label={"Open " + item.title} displayType={null}>
                  <Icon symbol={item.icon} />
                </Button>
              </VerticalBar.Item>
            )}
          </VerticalBar.Bar>
        </VerticalBar>
      </Provider>
    </div>
  );
};

export default AppNavComponent;
