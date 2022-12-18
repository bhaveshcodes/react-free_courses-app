import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const EachCard = (props) => {
    return (
        <div className="each--card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.thumbnail} />
                <Card.Body>
                    <Card.Title>{props.author}</Card.Title>
                  <h3> {props.title}</h3>
                  <h6>{props.views}</h6>
                    <Card.Text>
                    {/* <%=post.content%><a href='/posts/<%=post.title %>'>Read More</a> */}
                        {props.description.substring(0,100)+"..."}
                    </Card.Text>
                    <Button variant="primary">{props.btn_txt}</Button>
                </Card.Body>
            </Card>
        </div>


    )
}
export default EachCard 