import { Row, Col } from "react-bootstrap";

export default function Instruction({ number, title, children, className  }) {
    return (
        <div className={`mb-4 ${className}`}>
            <Row className="align-items-center mb-1">
                <Col xs="auto">
                    <div className="instruction-circle">{number}</div>
                </Col>
                <Col>
                    <h5 className="mb-0">{title}</h5>
                </Col>
            </Row>
            <hr className="mt-2 mb-2" />
            {children && <div className="text-muted mb-0">{children}</div>}
        </div>
    );
}
