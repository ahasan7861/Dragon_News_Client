import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-ahfahasan786-gmailcom.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    }, [])


    return (
        <div className="mt-4">
            <h4>All Category</h4>


            <div className='ps-4'>
            {
                categories.map(categorie => <p key={categorie.id}>
                    <Link to={`/category/${categorie.id}`} className='text-black text-decoration-none'>{categorie.name}</Link>
                </p>)
            }
            </div>


            <Row xs={1} md={1} className="g-4 mt-4">
      
        <Col>
          <Card>
            <Card.Img variant="top" src="https://i.ibb.co/zZS6Zkb/1.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://i.ibb.co/6Xhg4yp/2.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://i.ibb.co/SXwtD3M/3.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>


        </div>
    );
};

export default LeftNav;