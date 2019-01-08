import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Button, Table } from "antd";
import { connect } from "react-redux";
import { getTableData } from "../../redux/action/Actions";
import { bindActionCreators } from "redux";


const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {}
  });

interface Iprops extends WithStyles<typeof styles> {
  data?: any[];
  getData: (data: any) => void;
}

class Test extends React.Component<Iprops> {
  public columns = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Age",
      dataIndex: "age"
    },
    {
      title: "Address",
      dataIndex: "address"
    }
  ];

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button
          onClick={() => {
            this.props.getData([
              {
                key: "1",
                name: "John Brown",
                age: 32,
                address: "New York No. 1 Lake Park"
              },
              {
                key: "2",
                name: "Jim Green",
                age: 42,
                address: "London No. 1 Lake Park"
              },
              {
                key: "3",
                name: "Joe Black",
                age: 32,
                address: "Sidney No. 1 Lake Park"
              }
            ]);
          }}
        >
          获取数据
        </Button>
        <Table
          columns={this.columns}
          dataSource={this.props.data}
          size="middle"
        />
      </div>
    );
  }
}
/** 将reducers中的redux state转化成react props的方法 */
const mapStateToProps = (state: any) => {
  return {
    data: state.get("tableData").get("data").toJS()
  };
};
/** 将actions中的redux action转化成react props的方法 */
const mapDispatchToProps = ({} = (dispatch: any, ownProps: any) => {
  return bindActionCreators(
    {
      getData: getTableData
    },
    dispatch
  );
});
/** 导出connect方法 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Test));
