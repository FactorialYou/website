import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";
import {
  Card
} from "react-bootstrap";
import { useCallback } from "react";

const DebtPayoffSummary = ({ bauSchedule, acceleratedSchedule, method }) => {

  const NUM_OF_TICKS = 10;

  const lastMonth = acceleratedSchedule[acceleratedSchedule.length - 1]
  let totalInterest = lastMonth.debts.reduce((sum, debt) => sum + Number(debt.totalInterest), 0)
  let timeSavings = bauSchedule.length - acceleratedSchedule.length
  let chartXAxis = [...Array(bauSchedule.length).keys()].map(x => x * 12)

  const getPayoffDate = () => {
    const today = new Date();
    const future = new Date(today.getFullYear(), today.getMonth() + acceleratedSchedule.length - 1, 1);
    return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(future);
  };

  const getMonitarySavings = () => {
    let totalPaidBau = bauSchedule[bauSchedule.length - 1].debts.reduce((sum, debt) => sum + Number(debt.totalPaid), 0)
    let totalPaidAccelerated = acceleratedSchedule[acceleratedSchedule.length - 1].debts.reduce((sum, debt) => sum + Number(debt.totalPaid), 0)
    return totalPaidBau - totalPaidAccelerated
  }

  const generateGraphData = () => {

    return Array.from({ length: bauSchedule.length }, (_, i) => ({
      month: i,
      "BAU": bauSchedule[i].debts.reduce((sum, debt) => sum + debt.balance, 0),
      [METHOD]: acceleratedSchedule[i]?.debts.reduce((sum, debt) => sum + debt.balance, 0) ?? null,
    }));

  }

  const generatePayoffMilestones = () => {
    const milestones = {};

    acceleratedSchedule.forEach(({ month, debts }) => {
      debts.forEach(({ name, balance }) => {
        if (
          !milestones[name] &&
          (balance <= 0 || balance < 1e-2)
        ) {
          milestones[name] = month;
        }
      });
    });

    return Object.entries(milestones).map(([name, month]) => ({ name, month }))

  };

  const METHOD = method.charAt(0).toUpperCase() + method.slice(1);
  const payoffMilestones = generatePayoffMilestones();
  const data = generateGraphData()

  return (
    <div className="row mx-2">
      <Card className="col-12 col-xl-10 mb-2">
        <Card.Body>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ top: 25, right: 25, left: 50, bottom: 55 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                label={{ value: "Years", position: "bottom" }}
                tickFormatter={(month) => (month / 12).toFixed(0)}
                ticks={chartXAxis} />
              <YAxis
                tickFormatter={(value) => `$${value.toFixed(0)}`}
                tickCount={NUM_OF_TICKS} // More refined spacing
                label={{
                  value: "Outstanding Balance ($)",
                  angle: -90,
                  dx: -65,
                  style: { textAnchor: 'middle' }
                }}
              />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Legend verticalAlign="bottom" align="center" layout="horizontal"
                wrapperStyle={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                  transform: 'translateY(40px)'
                }}
              />
              <Line type="monotone" dataKey="BAU" stroke="#1ABC9C" strokeWidth={2} />
              <Line type="monotone" dataKey={METHOD} stroke="var(--bs-purple)" strokeWidth={2} />
              {payoffMilestones.map(({ name, month }) => (
                <ReferenceLine
                  key={name}
                  x={month}
                  stroke="gray"
                  strokeDasharray="3 3"
                  label={{
                    position: "top",
                    value: name,
                    offset: 10,
                    fontSize: 12,
                  }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>
      <div className="col-12 col-xl-2 px-0 ps-xl-3">
        <Card className="mb-2">
          <Card.Body>
            <p className="mx-auto mb-2" style={{ borderBottom: "solid 2px black", width: "fit-content" }}>Payoff Date</p>
            <span class="badge text-bg-primary align-middle fs-5 w-100 mb-2">
              {getPayoffDate()}
            </span>
          </Card.Body>
        </Card>
        <Card className="mb-2">
          <Card.Body>
            <p className="mx-auto mb-2" style={{ borderBottom: "solid 2px black", width: "fit-content" }}>Total Interest Paid</p>
            <span class="badge text-bg-primary align-middle fs-5 w-100 mb-2">
              {totalInterest.toLocaleString("en-US", { style: "currency", currency: "USD" })}
            </span>
          </Card.Body>
        </Card>

        <Card className="mb-2">
          <Card.Body>
            <p className="mx-auto mb-2" style={{ borderBottom: "solid 2px black", width: "fit-content" }}>Savings</p>
            <span class="badge text-bg-success align-middle fs-5 w-100 mb-2">
              {`${timeSavings} Month${timeSavings === 1 ? '' : 's'}`}
            </span>
            <span class="badge text-bg-success align-middle fs-5 w-100">
              {getMonitarySavings().toLocaleString("en-US", { style: "currency", currency: "USD" })}
            </span>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DebtPayoffSummary;
