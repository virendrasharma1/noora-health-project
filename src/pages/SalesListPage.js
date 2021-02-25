import * as React from "react";
import { Page, Grid, Card, Table, Button, Tag } from "tabler-react";
import { Link } from "react-router-dom";
import ApiCalls from "../api/index";

class SalesListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            salesList: [],
        };
    }

    componentDidMount = () => {
        this.getAllSales();
    };

    getAllSales = () => {
        ApiCalls.get(`/sales.json`).then((res) => {
            if (res.ok) {
                const response = res.data;
                console.log(response);
                this.setState({
                    salesList: response.data
                });
            }
        });
    };

    getTableRows = () => {
        let list = this.state.salesList;

        if (list) {
            return (
                <Table.Body>
                    {list.map((row, idx) => {
                        return (
                            <Table.Row key={idx}>
                                <Table.Col>{row.item_name}</Table.Col>
                                <Table.Col>{row.quantity}</Table.Col>
                                <Table.Col>{row.description}</Table.Col>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            );
        }
    };

    render() {
        return (
            <React.Fragment>
                <Page>
                    <Page.Content className="pg" title="Campaigns">
                        <div align="right" className="xx">
                            <Link to="/transaction" className="btn btn-success">
                                Add Sale
                            </Link>
                        </div>
                        <Grid.Row cards={true}>
                            <Grid.Col width={12}>
                                <Card title="History">
                                    <Table className="table-layout-fixed">
                                        <Table.Header>
                                            <Table.ColHeader className="width-25">Item Name</Table.ColHeader>
                                            <Table.ColHeader className="width-20">Quantity</Table.ColHeader>
                                            <Table.ColHeader className="width-15">Description</Table.ColHeader>
                                            <Table.ColHeader />
                                        </Table.Header>
                                        {this.getTableRows()}
                                    </Table>
                                </Card>
                            </Grid.Col>
                        </Grid.Row>
                    </Page.Content>
                </Page>
            </React.Fragment>
        );
    }
}

export default SalesListPage;
