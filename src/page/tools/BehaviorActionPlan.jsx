import { useState } from "react";
import { Button, Pagination } from "react-bootstrap";
import DownloadPdfButton from "../../components/DownloadFileButton";

export default function BehaviorActionPlan() {

    const [active, setActive] = useState(1);

    return (

        <div>

            <p>Welcome to your Behavioral Action Plan, a structured approach to help you align your daily actions with your long-term aspirations. This tool is designed to guide you through a process that fosters self-awareness, intentional behavior change, and sustainable progress toward your goals.</p>

            <h4 className="fs-5 mb-3 mt-3">How to Use This Tool:</h4>
            <ol>
                <li><strong>Describe Your Dream Life:</strong> Visualize the life you aspire to live, focusing on both financial and personal aspects.</li>
                <li><strong>Describe Your Nightmare Life:</strong> Reflect on the outcomes you wish to avoid.</li>
                <li><strong>Compare & Analyze Behaviors:</strong> Examine your current behaviors to determine which ones support your goals and which ones hinder your progress.</li>
                <li><strong>Set Your Weekly Goal:</strong> Establish a specific, achievable goal for the week that moves you closer to your desired life.</li>
                <li><strong>List Out Actionable Tasks:</strong> Break down your weekly goal into manageable tasks that you can incorporate into your daily routine.</li>
                <li><strong>Reflect, Adjust, and Celebrate:</strong> At the end of the week, assess your progress, make necessary adjustments, and acknowledge your achievements.</li>
                <li><strong>Rinse and Repeat:</strong> Use the insights gained to inform your next set of goals and continue the cycle of growth.</li>
            </ol>

            <p>By consistently engaging with this process, you'll develop greater self-control and make meaningful strides toward the life you envision.</p>

            <div className="d-flex justify-content-end">
                <DownloadPdfButton label='Download as PDF' url="/BehavioralActionPlan.pdf" type="pdf" />
            </div>

            <hr className="my-4" />

            <Pagination className="justify-content-center my-4">
                <Pagination.First onClick={() => setActive(1)} disabled={active === 1} />
                <Pagination.Prev onClick={() => setActive(active - 1)} disabled={active === 1} />
                {Array.from({ length: 7 }, (_, i) => (
                    <Pagination.Item key={i + 1} active={i + 1 === active} onClick={() => setActive(i + 1)}>
                        {i + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => setActive(active + 1)} disabled={active === 7} />
                <Pagination.Last onClick={() => setActive(7)} disabled={active === 7} />
            </Pagination>


            <div className="mx-1">

                <div hidden={active !== 1}>
                    <h3 id="Step1" className="fs-4 mb-4">Step 1: Describe your Dream Life</h3>

                    <p>Imagine the best possible version of your financial and personal life. This is a long term vision for your life, not just about finances, but what having control of your finances enables. Write freely and vividly, focusing on what your life could realistically be like if you made consistent progress everyday. Ask yourself questions like:</p>
                    <ul>
                        <li>Where are you living? What does your home feel like?</li>
                        <li>What kind of work are you doing? How much are you working?</li>
                        <li>How do you spend your time, and with whom?</li>
                        <li>How does your money support your freedom, security, or purpose?</li>
                    </ul>

                    <p>Your dream should feel exciting and meaningful and should be the epitome of success that you can strive toward.</p>
                    <p className="fst-italic">Tip: Don't worry about how you'll get there, just focus on what it looks like. We'll work on the “how” in the following steps.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        I’m living in a home that I own. The house is in the suburbs, close enough to town to walk but far enough away that I will occasionally see wildlife. The house is a place where friends and family feel instantly relaxed when they visit. There’s a big table for shared meals, and a dedicated space for creative work. <br /><br />
                        I work for myself, running a small business that blends teaching and writing. Outside of work, my time is spent with my family, outdoors, or doing personal projects. My schedule is flexible. If I want to take a long weekend trip or unplug for a week, I can. <br /><br />
                        Financially, I’m completely free. I have more than enough for everyday expenses, savings for the future, and the ability to give generously. Money is no longer a source of stress but instead a tool I use intentionally, in line with my values. I feel grounded and proud. I’m modeling the kind of life I want my kids to believe is possible, one where success isn’t about endless hustle, but about clarity, stewardship, and meaningful choices.
                    </blockquote>
                </div>

                <div id="Step2" hidden={active !== 2}>

                    <h3 className="fs-4 mb-4">Step 2: Describe your Nightmare Life</h3>

                    <p>Now imagine the worst-case scenario version of your life. This is not meant to scare you, but to create a powerful contrast to your dream life. This version represents what could happen if you don’t make changes, keep repeating harmful habits, or let life drift without direction. Describe it honestly and vividly. Ask yourself questions like:</p>
                    <ul>
                        <li>What’s your living situation like? Do you feel stuck or overwhelmed?</li>
                        <li>What’s your financial situation? Are you stressed, in debt, or dependent on others?</li>
                        <li>What does your typical day look like? Who are you with, and how do you feel?</li>
                        <li>What opportunities do you regret not taking?</li>
                    </ul>

                    <p>The goal is to create a picture of the life you want to avoid to act as a kind of personal warning sign that helps fuel your motivation.</p>
                    <p className="fst-italic">Tip: This is not your destiny, it’s your wake-up call. By identifying what you want to avoid, you can make clearer, stronger choices to move in the opposite direction.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        I’m living in a cramped apartment and I can’t afford to move. The place is noisy, dark, and in a dangerous part of town. I work a stressful job that drains me, and I stay in it out of fear. I tell myself it’s temporary, but it’s been years. <br /><br />
                        My finances are a mess. I carry a growing credit card balance and avoid opening bills because I already know I don’t have the money. I’ve stopped saving entirely. Every emergency becomes a crisis. I keep buying small things to distract myself: food delivery, gadgets, subscriptions I forget to cancel. It all adds up, but I tell myself it’s nothing. <br /><br />
                        I feel embarrassed and disconnected. I avoid talking about money with friends and family. I compare myself to others constantly and feel behind in every way. I don’t have a vision or plan; I just react to whatever comes next. <br /><br />
                        Worse, I feel numb. Like I gave up on the life I wanted and settled for surviving. The idea that I might spend decades here, never changing, never becoming the person I could have been, lives with me everyday.

                    </blockquote>

                </div>

                <div id="Step3" hidden={active !== 3}>

                    <h3 className="fs-4 mb-4">Step 3: Analyze Behaviors</h3>

                    <p>Take a close look at your current behaviors and contemplate whether each behavior is moving you towards your dream or nightmare. Ask yourself questions like:</p>
                    <ul>
                        <li>Is an action making today or tomorrow easier?</li>
                        <li>What patterns do I see around stress, boredom, or impulse?</li>
                        <li>Are my behaviors aligned with my values and long-term goals?</li>
                        <li>When do I feel in control vs out of control?</li>
                    </ul>

                    <p>The goal is not to judge yourself, but to observe with honesty and curiosity. Knowing which behaviors support your vision and which undermine it will give you the clarity and power to make real, lasting change.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        <p>Helpful</p>
                        <ul>
                            <li>I periodically self reflect on my career performance</li>
                            <li>I save a percentage of my income for retirement</li>
                            <li>I exercise three days a week</li>
                        </ul>
                        <p>Harmful</p>
                        <ul>
                            <li>I project success by driving an expensive car, despite the fact I can not afford it </li>
                            <li>I increase my spending every time I get a raise</li>
                            <li>I often go shopping as a way to avoid responsibilities </li>
                        </ul>
                    </blockquote>

                </div>

                <div id="Step4" hidden={active !== 4}>

                    <h3 className="fs-4 mb-4">Step 4: Set Your Weekly Goal</h3>

                    <p>Choose one meaningful goal you want to accomplish this week that brings you closer to your dream and further from your nightmare. This goal should directly address a behavior you want to improve or a habit you want to build. Where it makes sense, you should leverage a framework like SMART goals.</p>
                    <p className="fst-italic">Tip: Make it winnable. The purpose is to build consistency and confidence, not to overhaul your entire life in one week. Progress is the goal, not perfection.</p>

                    <p className="fw-bold mt-4">Example</p>
                    <blockquote>
                        In order to combate my compulsive spending, I will only purchase necessities on Thursday this week.
                    </blockquote>

                </div>

                <div id="Step5" hidden={active !== 5}>

                    <h3 className="fs-4 mb-4">Step 5: List out Actionable Tasks</h3>

                    <p>Break your weekly goal into clear, specific tasks you can actually do. These should be simple, time-bound actions that will move you toward completing your goal for the week. Think of these tasks as your to-do list for change, each one is a small step that turns your intention into real progress. Ask yourself questions like:</p>
                    <ul>
                        <li>What do I need to do first?</li>
                        <li>When and how will I do it?</li>
                        <li>Can I simplify this further so I’m more likely to follow through?</li>
                    </ul>

                    <p className="fw-bold mt-4">Example</p>
                    <div class="col-xs-12 col-lg-8 mx-auto mb-5">
                        <div class="card p-2">
                            <table class="table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">Task</th>
                                        <th scope="col">Due Date</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    <tr>
                                        <td>Define “necessities”</td>
                                        <td>Monday</td>
                                    </tr>
                                    <tr>
                                        <td>Review past impulse purchases</td>
                                        <td>Monday</td>
                                    </tr>
                                    <tr>
                                        <td>Plan out required purchase on Thursday</td>
                                        <td>Tuesday</td>
                                    </tr>
                                    <tr>
                                        <td>Take out exact cash for required purchases on Thursday</td>
                                        <td>Tuesday</td>
                                    </tr>
                                    <tr>
                                        <td>Pack a lunch for Thursday</td>
                                        <td>Wednesday</td>
                                    </tr>
                                    <tr>
                                        <td>Track Urges</td>
                                        <td>Thursday</td>
                                    </tr>
                                    <tr style={{ "border-bottom-color": "transparent" }}>
                                        <td>Reward yourself responsibility</td>
                                        <td>Friday</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <div id="Step6" hidden={active !== 6}>

                    <h3 className="fs-4 mb-4">Step 6: Reflect, Adjust, and Celebrate</h3>

                    <p>At the end of the week, take 15 minutes to reflect on how things went. This is your chance to learn from the experience, make any needed adjustments, and celebrate your progress. Ask yourself questions like:</p>
                    <ul>
                        <li>Did I complete my goal? Why or why not?</li>
                        <li>What worked well that I want to repeat?</li>
                        <li>What got in the way, and how can I adjust for next time?</li>
                        <li>What did I learn about myself this week?</li>
                    </ul>

                    <p>Even if you didn’t hit your goal perfectly, the act of reflecting helps build self-awareness and resilience. It’s how you turn a good week into momentum and a rough week into wisdom. Don’t forget to take time to celebrate progress, no matter how small! Self-control isn’t about punishment, it’s about empowerment. Give yourself credit for showing up and trying. Reward yourself in a way that feels meaningful, fun, or affirming.</p>
                    <p className="fst-italic">Tip: If something feels too hard, don’t ditch the goal but instead shrink the action. Growth comes from consistency, not perfection. Each week is a fresh opportunity to aim a little better.</p>

                </div>

                <div id="Step7" hidden={active !== 7}>

                    <h3 className="fs-4 mb-4">Step 7: Rinse and Repeat</h3>

                    <p>Repeat Steps 4, 5 and 6 weekly, slowly moving towards your dream through small, iterative changes. Don’t forget to occasionally revisit and adjust your visions and behaviors. As you walk through this process, both of those are certain to change!</p>

                </div>

            </div>

            <div className="d-flex flex-row justify-content-between my-5">
                <Button href={"#Step" + active} onClick={() => setActive(active - 1)} hidden={active === 1} className="btn-outline-theme">{"<  Back"}</Button>
                <div hidden={active !== 1} />
                <Button href={"#Step" + active} onClick={() => setActive(active + 1)} hidden={active === 7} className="btn-outline-theme">{"Next  >"}</Button>
            </div>

        </div>
    )
}