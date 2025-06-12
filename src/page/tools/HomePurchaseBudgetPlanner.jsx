import { useState } from "react";
import { Button, Pagination } from "react-bootstrap";
import DownloadPdfButton from "../../components/DownloadFileButton";

import InlinePageLink from "../../components/InlinePageLink";

export default function HomePurchaseBudgetPlanner() {

    const NUM_OF_STEPS = 6
    const [active, setActive] = useState(1);

    return (

        <div>

            <p>Welcome to the Home Purchase Budget Planner, your step-by-step guide to shopping for a home with confidence and financial clarity. Whether you're preparing to buy your first home or a current homeowner looking for your next home, this tool helps you find a home you can afford.</p>

            <h4 className="fs-5 mb-3 mt-3">How to Use This Tool:</h4>
            <ol>
                <li><strong>Determine Down Payment</strong></li>
                <li><strong>Determine Mortgage Paying Potential</strong></li>
                <li><strong>Research Mortgage Rates</strong></li>
                <li><strong>Choose Term Length</strong></li>
                <li><strong>Calculate Home Purchase Budget</strong></li>
                <li><strong>Research the Market</strong></li>
            </ol>

            <p>By following these steps, you’ll reduce stress, avoid overextending yourself, and make homeownership a solid step toward long-term financial stability.</p>

            <div className="d-flex justify-content-end">
                <DownloadPdfButton label='Download as PDF' url="/HomePurchaseBudgetPlanner.pdf" type="pdf" />
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
                    <h3 id="Step1" className="fs-4 mb-4">Step 1: Determine Down Payment</h3>
                    <p>Determine how much money you have to put towards a down payment on a house. A few notes to remember here:</p>
                    <ul>
                        <li>This should not come from your emergency fund, retirement, etc.</li>
                        <li>There will be closing costs, do not put all spare savings towards the down payment</li>
                    </ul>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        <p>Down Payment: $45,000</p>
                    </blockquote>

                </div>

                <div hidden={active !== 2}>
                    <h3 id="Step2" className="fs-4 mb-4">Step 2: Determine Mortgage Paying Potential</h3>
                    <p>Examine your budget to determine how much you could spend on a mortgage payment. This includes what you are currently paying for housing as well as spare money in your budget. Make sure to keep this number below recommended thresholds for how much to spend on housing.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        <p>Monthly Payment: $2,000</p>
                    </blockquote>

                </div>

                <div id="Step3" hidden={active !== 3}>

                    <h3 id="Step3" className="fs-4 mb-4">Step 3: Research Mortgage Rates</h3>
                    <p>Investigate online what rates are being charged on mortgages. It may be useful to know your credit score in order to determine what rate you may receive.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        <p>Interest Rate: 7%</p>
                    </blockquote>

                </div>

                <div id="Step4" hidden={active !== 4}>

                    <h3 className="fs-4 mb-4">Step 4: Choose Term Length</h3>
                    <p>Choose how long your mortgage will last. 30 is most common with 15 as another common choice.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        <p>Term Length: 30 years</p>
                    </blockquote>

                </div>

                <div id="Step5" hidden={active !== 5}>

                    <h3 className="fs-4 mb-4">Step 5: Calculate Home Purchase Budget</h3>
                    <p>Using the numbers you have collected, determine the mortgage you can afford by leveraging a <InlinePageLink title="Mortgage Calculator" href="https://www.ramseysolutions.com/real-estate/mortgage-calculator"/></p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        <p>Purchase Budget: $250,000</p>
                    </blockquote>

                </div>

                <div id="Step6" hidden={active !== 6}>

                    <h3 className="fs-4 mb-4">Step 6: Research the Market</h3>

                    <p>Research houses in your price range and in the area you wish to live. Adjust your budget up or down based on how well the houses meet your expectations. </p>
                    <p><em>Note: To adjust your budget up, you need to increase your down payment, increase your monthly payment, or decrease your interest rate, all which require time and planning to achieve.</em></p>

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