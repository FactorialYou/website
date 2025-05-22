import { useState } from "react";
import { Button, Form, Pagination } from "react-bootstrap";
import DownloadPdfButton from "../../components/DownloadFileButton";

import budgetCrafterIncome from "../../images/budgetCrafterIncome.png"
import budgetCrafterExpenses from "../../images/budgetCrafterExpenses.png"
import budgetCrafterCashFlowBefore from "../../images/budgetCrafterCashFlowBefore.png"
import budgetCrafterCashFlowAfter from "../../images/budgetCrafterCashFlowAfter.png"
import budgetCrafterPlanningPart1 from "../../images/budgetCrafterPlanningPart1.png"
import budgetCrafterPlanningPart2 from "../../images/budgetCrafterPlanningPart2.png"

export default function BudgetCrafter() {

    const NUM_OF_STEPS = 5
    const [active, setActive] = useState(1);

    return (

        <div>

            <p>Welcome to the Budget Crafter, where you get step by step instructions on how to create a personalized budget. Budgets are great tools to encourage financial awareness, proactive planning, and continuous improvement of your finances. Here we will build a monthly zero-based budget using a spreadsheet.</p>

            <h4 className="fs-5 mb-3 mt-3">How to Use This Tool:</h4>
            <ol>
                <li><strong>Record Your Income:</strong> Log all sources of income for the time period.</li>
                <li><strong>Record Your Expenses:</strong> List all your expenses during the same time period.</li>
                <li><strong>Calculate Cash Flow:</strong> Subtract total expenses from total income.</li>
                <li><strong>Plan Next Month:</strong> Prioritize and set targets for the next month .</li>
                <li><strong>Rinse and Repeat:</strong></li>
            </ol>

            <p>By regularly using your budget, you'll create a deeper connection to your money, reduce stress, and move closer to financial stability and freedom.</p>

            <div className="d-flex justify-content-end">
                <DownloadPdfButton label='Download as PDF' url="/BudgetCrafter.pdf" type="pdf" />
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
                    <h3 id="Step1" className="fs-4 mb-4">Step 1: Record Your Income</h3>
                    <p>Take a look through your bank statements and add each income source as a line in your budget. Add up all the income you get from each source and put the sum into your budget.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        <img src={budgetCrafterIncome} className="img-fluid img-thumbnail rounded m-1 align-bottom"/>
                    </blockquote>
                </div>

                <div id="Step2" hidden={active !== 2}>

                    <h3 id="Step1" className="fs-4 mb-4">Step 2: Record Your Expenses</h3>
                    <p>Take a look through your bank statements and add each expense source as a line in your budget. Add up all the expenses from each source and put the sum into your budget.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        <img src={budgetCrafterExpenses} className="img-fluid img-thumbnail rounded m-1 align-bottom"/>
                    </blockquote>

                </div>

                <div id="Step3" hidden={active !== 3}>

                    <h3 className="fs-4 mb-4">Step 3: Balance the Budget</h3>

                    <p>Take a look at your cash flow i.e. income minus expenses. If your cash flow is positive, i.e. you made more money than you spent, take the excess income and put it to use. If your cash flow is negative, i.e. you made less money than you spent, you need to pull money from another source, likely savings, to make up the difference.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        <img src={budgetCrafterCashFlowBefore} className="img-fluid img-thumbnail rounded m-1 align-bottom" />
                        <img src={budgetCrafterCashFlowAfter} className="img-fluid img-thumbnail rounded m-1 align-bottom" />
                        <p className="mx-1 my-3">
                            Cash flow was $180.71 at the end of January. To utilize the extra cash, it is put into the savings account.
                        </p>
                    </blockquote>

                </div>

                <div id="Step4" hidden={active !== 4}>

                    <h3 className="fs-4 mb-4">Step 4: Project and Prioritize</h3>

                    <p>Take a look at your spending for the current month. We can assume that the majority of months will look the same outside of one time income/expenses. Are we using our money effectively? Ask yourself questions like:</p>
                    <div class="reflection-questions">
                        <ul>
                            <li>Is my income too low? How can I increase it?</li>
                            <li>What spending does not align with my goals?</li>
                            <li>What goals should I put my extra cash towards?</li>
                        </ul>

                        <p className="fw-bold mt-4">Example</p>
                        <blockquote>
                            <img src={budgetCrafterPlanningPart1} className="img-fluid img-thumbnail rounded m-1 align-bottom" />
                            <img src={budgetCrafterPlanningPart2} className="img-fluid img-thumbnail rounded m-1 align-bottom" />
                            <p className="my-3 mx-1">
                                Income is increased $70 by taking on another dog sitting job and expenses are decreased $176.19 by lowering the grocery budget and cutting out misc. expenses. All the extra money is put into savings. If I do this for four months, I will have my $1000 emergency fund!
                            </p>
                        </blockquote>

                    </div>

                </div>

                <div id="Step5" hidden={active !== 5}>

                    <h3 className="fs-4 mb-4">Step 5: Rinse and Repeat</h3>

                    <p>Repeat all the steps at the end of each time period. Given enough time, your cash will begin to work for you instead of holding you back!</p>

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