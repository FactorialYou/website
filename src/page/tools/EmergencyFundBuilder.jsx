import { useState } from "react";
import { Button, Pagination } from "react-bootstrap";
import DownloadPdfButton from "../../components/DownloadFileButton";
import InlinePageLink from "../../components/InlinePageLink";

export default function EmergencyFundBuilder() {

    const NUM_OF_STEPS = 5
    const [active, setActive] = useState(1);

    return (

        <div>

            <p>
                Welcome to the Emergency Fund Builder, your step-by-step guide to creating a financial safety net.
                An emergency fund helps you prepare for unexpected events. Whether it’s a job loss, medical emergency,
                or surprise car repair, an emergency fund will help keep your financial goals from derailing.
                This tool walks you through building a fund that’s tailored to your life.
            </p>

            <h4 className="fs-5 mb-3 mt-3">How to Use This Tool:</h4>
            <ul>
                <li>Define Emergency</li>
                <li>Size Your Fund</li>
                <li>Choose Your Fund Location</li>
                <li>Create the Fund</li>
                <li>Fill the Fund</li>
            </ul>

            <p>
                By following these steps, you'll build peace of mind, reduce financial stress,
                and gain the confidence to weather life's surprises.
            </p>

            <p>By thoughtfully preparing for potential risks, you’ll build a solid financial foundation that brings peace of mind and resilience during life’s unpredictable moments.</p>

            <div className="d-flex justify-content-end">
                <DownloadPdfButton label='Download as PDF' url="/EmergencyFundBuilder.pdf" type="pdf" />
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
                    <h3 id="Step1" className="fs-4 mb-4">Step 1: Define Emergency</h3>

                    <p>
                        Take a few minutes to brainstorm what actually qualifies as an emergency in your life. An emergency is generally
                        unplanned, urgent, and necessary—but everyone has a different situation. This is your chance to define what an emergency
                        means to you.
                    </p>

                    <ul>
                        <li>What are some emergencies I’ve seen others deal with?</li>
                        <li>When have I needed money in the past but not had it?</li>
                        <li>What situations should not count as emergencies?</li>
                    </ul>

                    <p>
                        Set clear boundaries for when you will and won’t use this fund. This helps you protect it from misguided usage.
                    </p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        My emergency fund will be used under one of the following categories of expenses:
                        <ul className="mt-2">
                            <li><strong>Unplanned, Urgent, and Necessary Expenses:</strong> Medical emergencies, car or home repairs, etc.</li>
                            <li><strong>Necessary Expenses after Job Loss:</strong> Utilities, insurance, groceries, and other basic living costs.</li>
                        </ul>
                    </blockquote>
                </div>

                <div id="Step2" hidden={active !== 2}>

                    <h3 className="fs-4 mb-4">Step 2: Size Your Fund</h3>

                    <p>Now take some time to determine how much money you should keep in your emergency fund. A common rule of thumb is 3-6 months of expenses i.e. enough to keep you going for 3-6 months in case you lose your job. Some examples are:</p>
                    <ul>
                        <li>One Thousand Dollars</li>
                        <li>Three to Six Months</li>
                        <li>10% to 20% of Income</li>
                        <li>Peace of Mind</li>
                    </ul>



                    <p>
                        For more information on how to size your emergency fund, check out our article: <InlinePageLink title="Sizing your Emergency Fund" />
                    </p>


                    <p class="fw-bold mt-4">Example:</p>
                    <blockquote>
                        My monthly essentials total $2,100. I want 4 months of buffer, so my target emergency fund is $8,400.
                        That feels doable and gives me peace of mind.
                    </blockquote>

                </div>

                <div id="Step3" hidden={active !== 3}>

                    <h3 className="fs-4 mb-4">Step 3: Choose Your Fund Location</h3>

                    <p>Next we will choose where to store your emergency fund. Your fund should generally satisfy the following four criteria: Sufficient, Secure, Stable, and Liquid. You want a fund that will be there when you need it, in a useful amount, and that you can quickly get.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        I plan on using a HYSA because it is FDIC secured, low risk, and I can transfer money to my checking account within just a day or two.
                    </blockquote>

                </div>

                <div id="Step4" hidden={active !== 4}>

                    <h3 className="fs-4 mb-4">Step 4: Create the Fund </h3>

                    <p>Now it’s time to open the fund. If you need a new account or financial product, take the time to shop around for the provider that offers the best rates, lowest fees, etc.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                    You create a new HISA at ABC Credit Union, label it “Oh No! Fund,” and link it to your checking account.
                    </blockquote>

                </div>

                <div id="Step5" hidden={active !== 5}>

                    <h3 className="fs-4 mb-4">Step 5: Fill the Fund</h3>

                    <p>Last but not least, filling it up. You don’t need to save the whole amount at once. If you are unable to fill it up at its inception, now is the time to determine a plan to get the fund to its target size.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                    I can put in an initial $4,000 in your emergency fund and will cut spending by $250/month. The fund will reach its target in around 17 months.
                    </blockquote>
                        
                    

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