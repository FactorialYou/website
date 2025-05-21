import { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  Card
} from "react-bootstrap";
import Instruction from "../../components/Instruction";
import { FaTrash, FaPlus } from "react-icons/fa";

export default function DebtPayoffForm({ onSubmit, onClear }) {
  const [debts, setDebts] = useState([
    { name: "", balance: "", minPayment: "", interestRate: "" },
  ]);
  const [oneTimeExtra, setOneTimeExtra] = useState("");
  const [monthlyExtra, setMonthlyExtra] = useState("");
  const [method, setMethod] = useState("snowball");
  const [showError, setShowError] = useState(false);

  const handleDebtChange = (index, field, value) => {
    const newDebts = [...debts];
    newDebts[index][field] = value;
    setDebts(newDebts);
  };

  const addDebt = () => {
    setDebts([...debts, { name: "", balance: "", minPayment: "", interestRate: "" }]);
  };

  const removeDebt = (index) => {
    const newDebts = debts.filter((_, i) => i !== index);
    setDebts(newDebts);
  };

  const isFieldValid = (field) => {
    return field !== undefined && field !== "";
  };

  const isFieldNumberValid = (field) => {
    return !isNaN(field) && !isNaN(parseFloat(field));
  };

  const clear = () => {

    setOneTimeExtra("");
    setMonthlyExtra("");
    setMethod("snowball");
    setDebts([{ name: "", balance: "", minPayment: "", interestRate: "" }]);
    setShowError(false);

    onClear()

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasValidDebt = debts.every((debt) =>
      isFieldValid(debt.name) && isFieldNumberValid(debt.balance) && isFieldNumberValid(debt.minPayment) && isFieldNumberValid(debt.interestRate)
    );

    const oneTimeEmptyOrValid = oneTimeExtra === "" || isFieldNumberValid(oneTimeExtra)
    const monthlyEmptyOrValid = monthlyExtra === "" || isFieldNumberValid(monthlyExtra)


    if (!hasValidDebt || !oneTimeEmptyOrValid || !monthlyEmptyOrValid) {
      setShowError(true);
      return;
    }
    else {
      setShowError(false);
    }

    const formattedDebts = debts.map((debt) => ({
      ...debt,
      balance: parseFloat(debt.balance),
      minPayment: parseFloat(debt.minPayment),
      interestRate: parseFloat(debt.interestRate),
    }));

    onSubmit({
      debts: formattedDebts,
      oneTimeExtra: parseFloat(oneTimeExtra || 0),
      monthlyExtra: parseFloat(monthlyExtra || 0),
      method,
    });

  };

  return (
    <Card className="m-2">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Instruction title="Enter Your Debts" number="1">
            <p>List each of your debts, including the name, remaining balance, minimum monthly payment, and interest rate.</p>
          </Instruction>
          <h3 className="mb-4"></h3>

          {debts.map((debt, index) => (
            <Row className="mb-4 gy-2" key={index} >
              <Col lg={5}>
                <Form.Control
                  type="text"
                  placeholder="Debt Name"
                  value={debt.name}
                  onChange={(e) => handleDebtChange(index, "name", e.target.value)}
                  isInvalid={showError && !isFieldValid(debt.name)}
                  required
                />
              </Col>
              <Col lg={2} xs={6}>
                <Form.Control
                  type="text"
                  placeholder="Balance"
                  value={debt.balance}
                  onChange={(e) => handleDebtChange(index, "balance", e.target.value)}
                  isInvalid={showError && !isFieldNumberValid(debt.balance)}
                  required
                />
              </Col>
              <Col lg={2} xs={6}>
                <Form.Control
                  type="text"
                  placeholder="Min Payment"
                  value={debt.minPayment}
                  onChange={(e) => handleDebtChange(index, "minPayment", e.target.value)}
                  isInvalid={showError && !isFieldNumberValid(debt.minPayment)}
                  required
                />
              </Col>
              <Col lg={2} xs={10}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Interest (%)"
                    value={debt.interestRate}
                    onChange={(e) => handleDebtChange(index, "interestRate", e.target.value)}
                    isInvalid={showError && !isFieldNumberValid(debt.interestRate)}
                    required
                  />
                  <InputGroup.Text>%</InputGroup.Text>
                </InputGroup>
              </Col>
              <Col lg={1} xs={2}>
                <Button style={debts.length === 1 ? {"color": "lightgray", "border-color": "lightgray"} : {}}
                  variant="outline-danger"
                  onClick={() => removeDebt(index)}
                  aria-label="Remove debt"
                  className="w-100 px-0"
                  disabled={debts.length === 1}
                >
                  <FaTrash className="m-auto" />
                </Button>
              </Col>
            </Row>
          ))}

          <Row>
            <Col lg={1} xs={12} className="ms-auto">
              <Button variant="outline-primary" className="w-100" onClick={addDebt}>
                <FaPlus />
              </Button>
            </Col>
          </Row>

          <Instruction title="Enter Your Extra Payments" number="2" className="mt-5">
            <p>Specify any additional money you can put toward your debts—either as a one-time lump sum or recurring extra monthly payments. This allows the tool to accelerate your payoff timeline.</p>
          </Instruction>

          <Row className="mb-3 gy-2">
            <Col md={6}>
              <Form.Label>One-Time Extra Payment</Form.Label>
              <Form.Control
                type="text"
                value={oneTimeExtra}
                onChange={(e) => setOneTimeExtra(e.target.value)}
                isInvalid={showError && oneTimeExtra !== "" && !isFieldNumberValid(oneTimeExtra)}
              />
            </Col>
            <Col md={6}>
              <Form.Label>Monthly Extra Payment</Form.Label>
              <Form.Control
                type="text"
                value={monthlyExtra}
                onChange={(e) => setMonthlyExtra(e.target.value)}
                isInvalid={showError && monthlyExtra !== "" && !isFieldNumberValid(monthlyExtra)}
              />
            </Col>
          </Row>

          <Instruction title="Select Payoff Method" number="3" className="mt-5">
            <p>Choose how you want to prioritize debt payments:</p>
            <ul>
              <li><strong>Snowball:</strong> Pay off the smallest balance first to gain momentum.</li>
              <li><strong>Avalanche:</strong> Pay off the highest interest rate first to save the most money.</li>
            </ul>
          </Instruction>
          <Form.Group className="mb-4">
            <Form.Select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="snowball">Snowball (lowest balance first)</option>
              <option value="avalanche">Avalanche (highest interest first)</option>
            </Form.Select>
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button onClick={clear} className="btn btn-outline-theme me-2">Clear</Button>
            <Button type="submit" className="btn btn-theme">Calculate</Button>
          </div>

        </Form>
      </Card.Body>
    </Card>
  );
}
