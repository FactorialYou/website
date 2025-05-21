import { useCallback, useState } from "react";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, Legend } from "recharts";
export default function CompoundInterestCalculatorPage() {

    const [initial, setInitial] = useState();
    const [monthly, setMonthly] = useState();
    const [rate, setRate] = useState();
    const [years, setYears] = useState();
    const [chartData, setChartData] = useState([]);
    const [chartXAxis, setChartXAxis] = useState([]);
    const [showError, setShowError] = useState(false);

    const NUM_OF_TICKS = 10;

    const submit = () => {
        if (isValid()) {
            calculate()
        }
        else {
            setShowError(true);
        }
    }

    const isValid = () => {
        return isFieldValid(initial) && isFieldValid(monthly) && isFieldValid(rate) && isFieldValid(years);
    };

    const isFieldValid = (field) => {
        return field !== undefined && field !== "" && !isNaN(field) && field >= 0;
    };

    const calculate = () => {
        const r = rate / 100 / 12;
        const n = years * 12;
        let futureValue = initial;
        let totalContributions = initial;
        let data = [];

        for (let i = 0; i <= n; i++) {
            futureValue *= 1 + r;
            if (i > 0) {
                futureValue += monthly;
                totalContributions += monthly;
            }
            data.push({ month: i, value: futureValue.toFixed(2), contributions: totalContributions.toFixed(2) });
        }
        setChartData(data);
        setChartXAxis([...Array(years + 1).keys()].map(x => x * 12))
    };

    const clear = () => {
        setInitial("");
        setMonthly("");
        setRate("");
        setYears("");
        setChartData([]);
        setChartXAxis([]);
    };

    const getDomainUpperBound = useCallback(() => {

        const tickInterval = chartData[chartData.length - 1].value / (NUM_OF_TICKS - 1);
        const magnitude = Math.pow(10, Math.floor(Math.log10(tickInterval)));
        const roundedTickInterval = Math.ceil(tickInterval / magnitude) * magnitude;
        const upperBound = roundedTickInterval * NUM_OF_TICKS

        return upperBound

    }, [chartData])

    return (

            <div className="row mx-2">

                <div className="col-12 col-lg-12 col-xl-4 mx-auto px-xl-3 px-0 mb-3">
                    <Card >
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="initialInvestment">Initial Investment</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="initialInvestment"
                                        value={initial}
                                        onChange={(e) => setInitial(+e.target.value)}
                                        aria-describedby="initialInvestmentHelp"
                                        isInvalid={showError && !isFieldValid(initial)}
                                        required
                                    />
                                    <Form.Text id="initialInvestmentHelp" muted>
                                        The starting amount of money you are investing.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="monthlyContribution">Monthly Contribution</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="monthlyContribution"
                                        value={monthly}
                                        onChange={(e) => setMonthly(+e.target.value)}
                                        aria-describedby="monthlyContributionHelp"
                                        isInvalid={showError && !isFieldValid(monthly)}
                                        required
                                    />
                                    <Form.Text id="monthlyContributionHelp" muted>
                                        The amount you plan to add to your investment each month.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="annualRate">Annual Interest Rate (%)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="annualRate"
                                        value={rate}
                                        onChange={(e) => setRate(+e.target.value)}
                                        aria-describedby="annualRateHelp"
                                        isInvalid={showError && !isFieldValid(rate)}
                                        required
                                    />
                                    <Form.Text id="annualRateHelp" muted>
                                        The yearly rate of return expected on your investment.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="years">Years</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="years"
                                        value={years}
                                        onChange={(e) => setYears(+e.target.value)}
                                        aria-describedby="yearsHelp"
                                        isInvalid={showError && !isFieldValid(years)}
                                        required
                                    />
                                    <Form.Text id="yearsHelp" muted>
                                        The number of years you plan to keep the investment.
                                    </Form.Text>
                                </Form.Group>
                                <div class="d-flex flex-row-reverse mb-3 ms-auto" style={{ "gap": "10px" }}>
                                    <Button onClick={submit} className="btn btn-theme">Calculate</Button>
                                    <Button onClick={clear} className="btn btn-outline-theme">Clear</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>


                {chartData.length > 0 && (
                    <>
                        <Card className="col-12 col-lg-12 col-xl-6 mb-3" style={{ "minHeight": "500px" }}>
                            <ResponsiveContainer>
                                <AreaChart data={chartData} margin={{ top: 25, right: 25, left: 50, bottom: 55 }}>
                                    <CartesianGrid strokeDasharray="3 3" />

                                    <XAxis
                                        dataKey="month"
                                        label={{ value: "Years", position: "bottom" }}
                                        tickFormatter={(month) => (month / 12).toFixed(0)}
                                        ticks={chartXAxis}
                                    />

                                    <YAxis
                                        tickFormatter={(value) => `$${value.toFixed(0)}`}
                                        domain={[0, getDomainUpperBound()]}
                                        tickCount={NUM_OF_TICKS} // More refined spacing
                                        label={{
                                            value: "US Dollars ($)",
                                            angle: -90,
                                            dx: -65,
                                            style: { textAnchor: 'middle' }
                                        }}
                                    />

                                    <Tooltip formatter={(value) => `$${parseFloat(value).toFixed(2)}`} />
                                    <Legend verticalAlign="bottom" align="center" layout="horizontal"
                                        wrapperStyle={{
                                            border: "1px solid #ccc",
                                            padding: "10px",
                                            borderRadius: "5px",
                                            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                                            transform: 'translateY(40px)'
                                        }}
                                    />

                                    <Area type="monotone" dataKey="value" stroke="var(--bs-purple)" fill="var(--bs-purple)" name="Total Value" legendType="circle" />
                                    <Area type="monotone" dataKey="contributions" stroke="#1ABC9C" fill="#1ABC9C" name="Total Contributions" legendType="circle" />

                                </AreaChart >
                            </ResponsiveContainer>

                        </Card>

                        <div className="col-12 col-lg-12 col-xl-2 px-xl-3 px-0 text-center">
                            <div className="row mx-0">
                                <Card className="mb-2 col-xl-12 col-lg-6 col-md-6 p-0">
                                    <Card.Body>
                                        <p className="mx-auto mb-2" style={{ borderBottom: "solid 2px black", width: "fit-content" }}>Final Value</p>
                                        <span class="badge text-bg-primary align-middle fs-5 w-100">
                                            {Number(chartData[chartData.length - 1].value).toLocaleString("en-US", { style: "currency", currency: "USD" })}
                                        </span>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2 col-xl-12 col-lg-6 col-md-6 p-0">
                                    <Card.Body>
                                        <p className="mx-auto mb-2" style={{ borderBottom: "solid 2px black", width: "fit-content" }}>Net Return</p>
                                        <span class="badge text-bg-primary align-middle fs-5 w-100">
                                            {(100 * chartData[chartData.length - 1].value / chartData[chartData.length - 1].contributions).toFixed(1)}%
                                        </span>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </>
                )}

            </div>


    )
}
