import { useState } from "react";
import { Button, Card, Pagination } from "react-bootstrap";
import DownloadPdfButton from "../../components/DownloadFileButton";
import InlinePageLink from "../../components/InlinePageLink";

export default function LifeInsurancePlanner() {

    const NUM_OF_STEPS = 3
    const [active, setActive] = useState(1);

    return (

        <div>

            <p>
                Welcome to the Life Insurance Planner, your step-by-step guide to protecting the people who depend on you. Life insurance helps ensure that your loved ones are financially secure if something happens to you. Whether you’re providing for children, a spouse, or aging parents, the right life insurance policy offers peace of mind and stability.
            </p>

            <h4 className="fs-5 mb-3 mt-3">How to Use This Tool:</h4>
            <ul>
                <li>Size Your Life Insurance</li>
                <li>Research Policies</li>
                <li>Select and Open a Policy</li>
            </ul>

            <p>
                By following these steps, you'll protect your family’s future, gain clarity on what coverage you actually need, and feel confident that you’ve prepared for the unexpected.
            </p>

            <p>By thoughtfully preparing for potential risks, you’ll build a solid financial foundation that brings peace of mind and resilience during life’s unpredictable moments.</p>

            <div className="d-flex justify-content-end">
                <DownloadPdfButton label='Download as PDF' url="/LifeInsurancePlanner.pdf" type="pdf" />
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
                    <h3 id="Step1" className="fs-4 mb-4">Step 1: Size Your Life Insurance</h3>

                    <p>
                        Before choosing a policy, you need to determine how much coverage you need given your situation. Life insurance is meant to replace the financial support you provide and the right amount will depend on your specific responsibilities and long-term goals for your family. Ask yourself questions like:
                    </p>
                    <ul>
                        <li>Who relies on my income or care?</li>
                        <li>How many years of support would they need if I were gone?</li>
                        <li>Are there specific expenses I want to cover (like college, debt, or a mortgage)?</li>
                        <li>What existing assets or coverage would reduce the amount I need?</li>
                    </ul>
                    <p>
                        Once you have these questions answered, a general formula you can use is:
                    </p>
                    <Card style={{ width: "fit-content" }} className="mx-auto">
                        <Card.Body>
                            <code className="py-0 fs-5 mb-2">Life Insurance Need = (10 × Income) + Debts + Future Expenses − Assets</code>
                        </Card.Body>
                    </Card>

                    <p>Where: </p>
                    <p className="mb-0 ms-4">Income: Yearly Income</p>
                    <p className="mb-0 ms-4">Debts: Credit Cards, Car Loans, Mortgage, etc</p>
                    <p className="mb-0 ms-4">Future Expenses: College, etc</p>
                    <p className="mb-0 ms-4">Assets: Non-retirement investments, etc</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        <p>Income: $65,000</p>
                        <p>Debt: $180,000 (mortgage) + $24,000 (car)</p>
                        <p>Future Expenses: $0</p>
                        <p>Assets: $10,000 (Brokerage account)</p>
                        <p>Result: $844,000 Life Insurance Policy</p>
                    </blockquote>
                </div>

                <div id="Step2" hidden={active !== 2}>

                    <h3 className="fs-4 mb-4">Step 2: Research Policies</h3>

                    <p>Once you know how much coverage you need, it’s time to find the right life insurance policy for your situation. The most common types are term and whole life insurance. We recommend a term life policy for replacing income after an untimely death but this is the time to investigate for yourself. Ask yourself questions like:</p>
                    <ul>
                        <li>How long do I need coverage (10, 20, 30 years)?</li>
                        <li>How much can I reasonably afford each month?</li>
                        <li>What companies have strong financial ratings and good customer service?</li>
                    </ul>

                    <p>
                        Once you’ve found policies that look promising, reach out for quotes from each provider.
                    </p>

                    <p className="fst-italic">Tip: Term life policies are often cheaper when you're young and healthy, so it pays to shop early.</p>



                    <p class="fw-bold mt-4">Example:</p>
                    <blockquote>
                        I determined I need $844,000 in life insurance coverage for the next 20 years. I researched several reputable providers and requested quotes. Here’s what I found:
                        <ul>
                            <li>Provider A: $27/month for a 20-year term policy. Strong financial rating and decent customer service reviews, but slower application process.</li>
                            <li>Provider B: $33/month for a 20-year term policy. Excellent customer service, includes industry leading payout speed.</li>
                            <li>Provider C: $25/month for a 20-year term policy. Cheapest option, but mixed reviews on claim payout speed.</li>
                        </ul>
                    </blockquote>

                </div>

                <div id="Step3" hidden={active !== 3}>

                    <h3 className="fs-4 mb-4">Step 3: Select and Open a Policy</h3>

                    <p>Take some time now to review all of the policies you received, making sure to consider the length of coverage, monthly premiums, and any additional benefits. Once you’ve made your choice, start the application process. This usually involves filling out personal and health information. Some policies require a medical exam, while others do not. Be honest and thorough to avoid issues later. Review the policy documents carefully before signing. Make sure you understand the terms, coverage limits, and any exclusions.</p>

                    <p className="fst-italic">Tip: Keep a copy of your policy in a safe place and inform your beneficiaries where to find it.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                    I selected the 20-year term policy for $33/month from Provider B because it has strong customer service, offers fast payout, and is in my budget.                    </blockquote>

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