import React from "react";
import { Container, Row } from "react-bootstrap";
import {  Card, ListGroup, Image } from 'react-bootstrap';
import styles from "./styles.module.scss";
export default function OrderHero(props) {
  return (
    <div>
     <Container>
      {/* Heading at the top right */}
      <h2 className="text-right">Your Heading</h2>

      {/* Card with image on the right and list on the left */}
      <Card style={{ backgroundImage: 'url("https://source.unsplash.com/800x600/?nature")', backgroundSize: 'cover' }}>
        <Card.Body>
          <Card.Title>Your Card Title</Card.Title>
          <div className="d-flex">
            {/* List on the left */}
            <div>
              <Card.Text>Your List:</Card.Text>
              <ListGroup>
                <ListGroup.Item>List Item 1</ListGroup.Item>
                <ListGroup.Item>List Item 2</ListGroup.Item>
                <ListGroup.Item>List Item 3</ListGroup.Item>
              </ListGroup>
            </div>

            {/* Image on the right */}
            <Image
              src="https://placekitten.com/200/150" // Replace with your actual image source
              alt="Card Image"
              className="ml-3"
              style={{ maxWidth: '100px', maxHeight: '75px' }}
            />
          </div>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
}
