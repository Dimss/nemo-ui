import React from "react";
import { Icon, Card, Divider } from "antd";
import { Grid, Row, Col } from "react-flexbox-grid";
import { loadFeed } from "../../actions/feedActions";
const { Meta } = Card;
export default class Feed extends React.Component {
  componentWillMount() {
    this.context.store.dispatch(loadFeed());
  }
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <div style={{ marginTop: "30px" }}>
                {this.props.feed.map((el, idx) => (
                  <Card
                    key={idx}
                    style={{ width: 500, marginTop: "10px" }}
                    cover={
                      <img alt={el.title} src={"http://receiver/" + el.link} />
                    }
                    actions={[
                      <Icon
                        type="like"
                        theme="twoTone"
                        twoToneColor="#eb2f96"
                      />,
                      <Icon type="form" />,
                      <Icon type="delete" />
                    ]}
                  >
                    <Meta title={el.title} description="" />
                    <Divider orientation="left">
                      Comments <Icon type="team" theme="outlined" />
                    </Divider>
                    <div>
                      <p style={{ textAlign: "left" }}>Awesome!</p>
                      ...
                    </div>
                    <div>
                      <p style={{ textAlign: "left" }}>Good one</p>
                    </div>
                    ...
                    <div>
                      <p style={{ textAlign: "left" }}>Good one</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
