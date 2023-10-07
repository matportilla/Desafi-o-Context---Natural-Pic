import React, { useContext } from 'react';
import { Col, Card } from 'react-bootstrap';
import { Context } from '../contexts/PhotoContext';
import IconHeart from './IconHeart';

const Gallery = ({ filtro = 'home' }) => {
  const { fotos } = useContext(Context);

  return (
    <>
      {fotos
        .filter((foto) => (filtro === 'favoritos' ? foto.liked === true : true))
        .map((foto) => (
          <Col key={foto.id}>
            <Card className="text-white">
              <Card.Img src={foto.src} alt={foto.alt} />
              <Card.ImgOverlay>
                <Card.Text className="text-end">
                  <IconHeart id={foto.id} />
                </Card.Text>
                <Card.Text>{foto.alt}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
    </>
  );
};

export default Gallery;

