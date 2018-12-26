import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Layout, Menu, Icon } from "antd";
import { renderRoutes, RouteConfig } from "react-router-config";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {
      width: "100%",
      height: "100vh",
      "& #components-layout-demo-custom-trigger .trigger": {
        fontSize: "18px",
        lineHeight: "64px",
        padding: "0 24px",
        cursor: " pointer",
        transition: "color .3s"
      },

      "& #components-layout-demo-custom-trigger .trigger:hover ": {
        color: "#1890ff"
      },

      "& #components-layout-demo-custom-trigger .logo": {
        height: "32px",
        background: "rgba(255,255,255,.2)",
        margin: "16px"
      }
    }
  });

interface Iprops extends WithStyles<typeof styles>, RouteComponentProps {
  route: RouteConfig;
}

interface Istate {
  collapsed: any;
}

class MyApp extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  public render() {
    const { classes } = this.props;
    return (
      <Layout className={classes.root}>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
        >
          <div>
            <br />
            <img
              src={require("../images/logo.png")}
              alt="logo"
              style={{ width: "80%", height: "30px" }}
            />
          </div>
          <br />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to={"/pageOne"}>
                <Icon type="user" />
                <span>nav 1</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={"/pageTwo"}>
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={"/pageThree"}>
                <Icon type="upload" />
                <span>nav 3</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {renderRoutes(this.props.route.routes)}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(withStyles(styles)(MyApp));
