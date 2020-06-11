import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const StateStats = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width='100%' src='/assets/318x318.svg' alt='Card img cap' />
                <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardSubtitle>Card Subtitle</CardSubtitle>
                    <CardText>Some quick example text to build a card</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default StateStats;