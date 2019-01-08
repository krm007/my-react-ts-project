import {createStyles, Theme, withStyles} from '@material-ui/core/styles';
import {WithStyles} from "@material-ui/core/styles/withStyles";
import * as React from "react";
import Test from "../test/Test";

const styles = (theme: Theme) => createStyles<"root">({
    root: {}
});

interface Iprops extends WithStyles<typeof styles> {
}

class PageOne extends React.Component<Iprops> {
    public sss=()=>{
        console.log(this.props)
    }
    public render() {
        const {classes} = this.props;
        return (
            <div className={classes.root} onClick={this.sss}>
                <p>这是一个表格</p>
                <Test />
            </div>);
    }
}

export default withStyles(styles)(PageOne);