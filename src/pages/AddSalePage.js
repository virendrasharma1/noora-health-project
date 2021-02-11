import * as React from "react";
import { Page, Grid, Card, Button } from "tabler-react";

import { Formik, Field, Form as FormikForm } from "formik";
import "../App.css";

class AddSalePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = () => {

    };

    render() {
            return (
                <Page>
                        <Page.Content title="Add Transaction">
                            <Grid.Row cards={true}>
                                <Grid.Col width={12}>
                                    <Card title="Form">
                                        <Formik
                                            initialValues={{
                                                name: "",
                                                medium: "SMS",
                                                filterName: "",
                                            }}
                                        >
                                            <FormikForm>
                                                <Card.Body>
                                                            <Grid.Row>
                                                                <Grid.Col width={6}>
                                                                    <div className="form-group">
                                                                        <label className="form-label">Item Name</label>
                                                                        <Field
                                                                            className="form-control"
                                                                            id="name"
                                                                            name="name"
                                                                            required={true}
                                                                            placeholder="Item Name"
                                                                        />
                                                                    </div>
                                                                </Grid.Col>
                                                                <Grid.Col width={6}>
                                                                    <div className="form-group">
                                                                        <label className="form-label">Quantity</label>
                                                                        <Field
                                                                            className="form-control"
                                                                            id="Quantity"
                                                                            name="Quantity"
                                                                            type="number"
                                                                            required={true}
                                                                            placeholder="Quantity"
                                                                        />
                                                                    </div>
                                                                </Grid.Col>
                                                            </Grid.Row>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <Grid.Row>
                                                                <Grid.Col width={12}>
                                                                    <div className="form-group">
                                                                        <label className="form-label">Cost Price</label>
                                                                        <Field
                                                                            className="form-control"
                                                                            id="costPrice"
                                                                            name="costPrice"
                                                                            type="number"
                                                                            required={true}
                                                                            placeholder="Cost Price"
                                                                        />
                                                                    </div>
                                                                </Grid.Col>
                                                                <Grid.Col width={12}>
                                                                    <div className="form-group">
                                                                        <label className="form-label">Discount</label>
                                                                        <Field
                                                                            className="form-control"
                                                                            id="Discount"
                                                                            name="Discount"
                                                                            type="number"
                                                                            required={true}
                                                                            placeholder="Discount"
                                                                        />
                                                                    </div>
                                                                </Grid.Col>
                                                            </Grid.Row>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">
                                                                    Description
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    as="textarea"
                                                                    rows="5"
                                                                    id="Description"
                                                                    name="Description"
                                                                    required={true}
                                                                    placeholder="Description"
                                                                    maxLength="160"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Button type="submit" color="primary">
                                                        Submit
                                                    </Button>
                                                </Card.Body>
                                            </FormikForm>
                                        </Formik>
                                    </Card>
                                </Grid.Col>
                            </Grid.Row>
                        </Page.Content>
                    </Page>
            );
    }
}

export default AddSalePage;
