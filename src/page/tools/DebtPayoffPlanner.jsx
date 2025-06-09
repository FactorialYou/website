import { useState } from "react";
import { Button, Pagination } from "react-bootstrap";
import DownloadPdfButton from "../../components/DownloadFileButton";

import InlinePageLink from "../../components/InlinePageLink";

export default function DebtPayoffPlanner() {

    const NUM_OF_STEPS = 6
    const [active, setActive] = useState(1);

    return (

        <div>

            <p>Welcome to the Debt Payoff Planner, your step-by-step guide to becoming debt-free with intention and clarity. Whether you're tackling credit cards, student loans, or personal loans, this tool helps you take control of your payments, minimize interest, and build momentum toward your financial goals.</p>

            <h4 className="fs-5 mb-3 mt-3">How to Use This Tool:</h4>
            <ol>
                <li><strong>List Your Debts</strong></li>
                <li><strong>Choose Debts to Payoff</strong></li>
                <li><strong>Determine Extra Payments Amount</strong></li>
                <li><strong>Pick a Payoff Method</strong></li>
                <li><strong>Calculate Savings</strong></li>
                <li><strong>Rinse and Repeat</strong></li>
            </ol>

            <p>By following these steps, you'll build peace of mind, reduce financial stress, and gain the confidence to tackle life's challenges.</p>

            <div className="d-flex justify-content-end">
                <DownloadPdfButton label='Download as PDF' url="/DebtPayoffPlanner.pdf" type="pdf" />
            </div>

            <hr className="my-4" />

            <Pagination className="justify-content-center my-4">
                <Pagination.First onClick={() => setActive(1)} disabled={active === 1} />
                <Pagination.Prev onClick={() => setActive(active - 1)} disabled={active === 1} />
                {Array.from({ length: NUM_OF_STEPS }, (_, i) => (
                    <Pagination.Item key={i + 1} active={i + 1 === active} onClick={() => setActive(i + 1)}>
                        {i + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => setActive(active + 1)} disabled={active === NUM_OF_STEPS} />
                <Pagination.Last onClick={() => setActive(NUM_OF_STEPS)} disabled={active === NUM_OF_STEPS} />
            </Pagination>


            <div className="mx-1">

                <div hidden={active !== 1}>
                    <h3 id="Step1" className="fs-4 mb-4">Step 1: List Your Debts</h3>
                    <p>List out all your debts: the balance, the interest rate, and the minimum payment.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <div class="col-xs-12 col-lg-8 mx-auto mb-5">
                        <div class="card p-2">
                            <table class="table mb-0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Balance</th>
                                        <th>Interest Rate</th>
                                        <th>Minimum Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Credit Card - ABC Bank</td>
                                        <td>$3,200</td>
                                        <td>24.99%</td>
                                        <td>$98.67</td>
                                    </tr>
                                    <tr>
                                        <td>Auto Loan - VW Beetle</td>
                                        <td>$9,800</td>
                                        <td>6.75%</td>
                                        <td>$253.94</td>
                                    </tr>
                                    <tr>
                                        <td>Federal Student Loan</td>
                                        <td>$18,500</td>
                                        <td>4.45%</td>
                                        <td>$206.80</td>
                                    </tr>
                                    <tr>
                                        <td>Personal Loan – LendingClub</td>
                                        <td>$5,400</td>
                                        <td>13.25%</td>
                                        <td>$123.56</td>
                                    </tr>
                                    <tr>
                                        <td>Mortgage - ABC Bank</td>
                                        <td>$245,000</td>
                                        <td>3.25%</td>
                                        <td>$1,305.62</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div hidden={active !== 2}>
                    <h3 id="Step2" className="fs-4 mb-4">Step 2: Choose Debts to Payoff</h3>
                    <p>When taking out debt, it should meet the following criteria:</p>
                    <ul>
                        <li><strong>Minimal:</strong> the smallest amount possible e.g. avoid overspending.</li>
                        <li><strong>Functionable:</strong> it should solve a tangible problem e.g. function over fashion.</li>
                        <li><strong>Affordable:</strong> you have the ability to make the payment now and into the foreseeable future.</li>
                    </ul>
                    <p>Any debts that do not meet these criteria should be a prime candidate for early payoff.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <div class="col-xs-12 col-lg-8 mx-auto mb-5">
                        <div class="card p-2 mb-2">
                            <table class="table mb-0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Balance</th>
                                        <th>Interest Rate</th>
                                        <th>Minimum Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Credit Card - ABC Bank</td>
                                        <td>$3,200</td>
                                        <td>24.99%</td>
                                        <td>$98.67</td>
                                    </tr>
                                    <tr>
                                        <td>Auto Loan - VW Beetle</td>
                                        <td>$9,800</td>
                                        <td>6.75%</td>
                                        <td>$253.94</td>
                                    </tr>
                                    <tr>
                                        <td>Federal Student Loan</td>
                                        <td>$18,500</td>
                                        <td>4.45%</td>
                                        <td>$206.80</td>
                                    </tr>
                                    <tr>
                                        <td>Personal Loan – LendingClub</td>
                                        <td>$5,400</td>
                                        <td>13.25%</td>
                                        <td>$123.56</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p><em>Note: Mortgage has been removed from the list</em></p>

                    </div>
                </div>

                <div id="Step3" hidden={active !== 3}>

                    <h3 id="Step3" className="fs-4 mb-4">Step 3: Determine Extra Payment Amount</h3>
                    <p>Take a look at your budget to identify how much spare money per month you can contribute to your payoff plan. Look at what expenses you can temporarily cut back on such as going out to eat and subscriptions. Additionally, identify spare assets you could contribute as a one time lump sum payment towards your debt. This would include things like money in savings all the way up to selling a car, paying off your car loan, and buying a smaller car with the leftover money.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        <p>Extra One Time Payment: $1,500</p>
                        <p>Extra Monthly Payment: $200</p>
                    </blockquote>

                </div>

                <div id="Step4" hidden={active !== 4}>

                    <h3 className="fs-4 mb-4">Step 4: Pick a Payoff Method</h3>

                    <p>Now it’s time to select your debt payoff method. The two options are:</p>

                    <ul>
                        <li><strong>Snowball:</strong> List debts from smallest to largest balance in order to build psychological momentum.</li>
                        <li><strong>Avalanche:</strong> List debts from highest to lowest interest rate in order to pay off debt as fast as possible.</li>
                    </ul>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        <p>Payoff Method: Snowball</p>
                    </blockquote>

                </div>

                <div id="Step5" hidden={active !== 5}>

                    <h3 className="fs-4 mb-4">Step 5: Calculate Savings</h3>

                    <p>Calculate how much time and money you will save by entering all of your data into our <InlinePageLink title="Debt Payoff Calculator" /></p>

                    <p className="fw-bold mt-4">Example</p>
                    <div class="col-xs-12 col-lg-8 mx-auto mb-5">
                        <div class="card p-2">
                            <table class="table mb-0">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Original</th>
                                        <th>Projected</th>
                                        <th>Savings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Interest Paid</strong></td>
                                        <td>$5,600</td>
                                        <td>$4,000</td>
                                        <td>$1,600</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Time Spent</strong></td>
                                        <td>60 Months</td>
                                        <td>43 Months</td>
                                        <td>17 Months</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>

                <div id="Step6" hidden={active !== 6}>

                    <h3 className="fs-4 mb-4">Step 6: Rinse and Repeat</h3>

                    <p>Periodically revisit your plan and adjust as your life changes.</p>

                </div>

            </div>

            <div className="d-flex flex-row justify-content-between my-5">
                <Button href={"#Step" + active} onClick={() => setActive(active - 1)} hidden={active === 1} className="btn-outline-theme">{"<  Back"}</Button>
                <div hidden={active !== 1} />
                <Button href={"#Step" + active} onClick={() => setActive(active + 1)} hidden={active === NUM_OF_STEPS} className="btn-outline-theme">{"Next  >"}</Button>
            </div>

        </div>
    )
}