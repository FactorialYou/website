
import workshop from "../images/workshop.jpg"

const WorkshopPage = () => {
    return (
        <>

            <div class="row d-flex mb-5">
                <div class="col-lg-6 order-1 order-lg-2 text-center" data-aos="zoom-in" data-aos-delay="150">
                    <img src={workshop} class="img-fluid img-thumbnail rounded" width="75%" />
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                    <h3> Join Our Free Workshop!</h3>
                    <p class="fst-italic">
                        Get a crash course in personal finance through discusssions and activites. Learn what they didn't teach you in school and take control of your personal finances!
                    </p>



                    Start Date: June 24th
                    Duration: 6 Weeks

                    Time and Day: Tuesday, 6 – 8pm
                    Location: Zoom
                    Seats: 20 available

                    <div class="d-flex fs-5">
                        <box-icon type="solid" name='calendar'></box-icon>
                        <span class="ms-2"><strong>Start Date:</strong>June 24th</span>
                    </div>
                    <div class="d-flex fs-5">
                        <box-icon name='hourglass' type='solid' ></box-icon>
                        <span class="ms-2"><strong>Duration:</strong>6 Weeks</span>
                    </div>

                    <div class="d-flex fs-5">
                        <box-icon type="solid" name='calendar'></box-icon>
                        <span class="ms-2"><strong>Day & Time:</strong> Thursdays 6:00 pm - 8:00 pm</span>
                    </div>
                    <div class="d-flex fs-5">
                        <box-icon name='location-plus' type='solid' ></box-icon>
                        <span class="ms-2"><strong>Location:</strong> Online - Link will be provided after sign-up</span>
                    </div>

                    <div class="fs-5">
                        <box-icon name='male' type='solid' ></box-icon>
                        <span class="ms-2"><strong>Seats:</strong> 20 avaliable</span>
                    </div>
                    <div class="d-flex mt-3">
                        <a role="button" class="btn btn-outline-theme me-3" href="#learn-more">Learn More</a>
                        <a role="button" class="btn btn-outline-theme" href="#sign-up">Sign Up</a>
                    </div>
                </div>
            </div>

            <h3 id="learn-more">What will you learn</h3>
            <hr />
            <div class="workshop-grid mb-5">

                <div class="fs-4 align-items-center outline-badge-theme">
                    <i class="bx bxs-brain my-auto"></i>
                    <span class="ms-2">Behavior</span>
                </div>

                <span class="fs-4 align-items-center outline-badge-theme">
                    <i class="bx bxs-spreadsheet my-auto"></i>
                    <span class="ms-2">Budgeting</span>
                </span>

                <span class="fs-4 align-items-center outline-badge-theme">
                    <i class="bx bxs-bank my-auto"></i>
                    <span class="ms-2">Emergency Funds</span>
                </span>

                <span class="fs-4 align-items-center outline-badge-theme">
                    <i class="bx bxs-credit-card my-auto"></i>
                    <span class="ms-2">Debt</span>
                </span>

                <span class="fs-4 align-items-center outline-badge-theme">
                    <i class="bx bxs-home my-auto"></i>
                    <span class="ms-2">Home Ownership</span>
                </span>

                <span class="fs-4 align-items-center outline-badge-theme">
                    <i class="bx bx-line-chart my-auto"></i>
                    <span class="ms-2">Investing</span>
                </span>

                <span class="fs-4 align-items-center outline-badge-theme">
                    <i class="bx bx-money my-auto"></i>
                    <span class="ms-2">Retirement</span>
                </span>

                <span class="fs-4 align-items-center outline-badge-theme">
                    <i class="bx bxs-graduation my-auto"></i>
                    <span class="ms-2">Education</span>
                </span>

                <span class="fs-4 align-items-center outline-badge-theme">
                    <i class="bx bxs-briefcase my-auto"></i>
                    <span class="ms-2">Insurance</span>
                </span>

            </div>

            <h3>Frequently Asked Questions</h3>
            <hr />

            <ul class="list-group mb-5">
                <li class="list-group-item">
                    <p class="fs-4">Is this workshop really free?</p>
                    <p>Absolutely it's free! Just bring your curiosity and a willingness to learn!</p>
                </li>

                <li class="list-group-item">
                    <p class="fs-4">Who is this workshop for?</p>
                    <p>Anyone looking to improve their personal finance skills! We cover numerous topics so there is bound to be something new for you to learn.</p>
                </li>

                <li class="list-group-item">
                    <p class="fs-4">Do I need any prior knowledge?</p>
                    <p>No prior finance knowledge is required! The workshop is designed to be accessible and practical for everyone.</p>
                </li>

                <li class="list-group-item">
                    <p class="fs-4">Will there be a recording?</p>
                    <p>Recording will be available to those who miss a class. Please note that the classes tend to build on each other and a missed class could impact your ability to partcipate in future classes.</p>
                </li>

                <li class="list-group-item">
                    <p class="fs-4">What do I need to bring?</p>
                    <p>You will need something to take notes and do the activities with. We reccomend pen and paper but a computer could work too!</p>
                </li>

                <li class="list-group-item">
                    <p class="fs-4">How long will the workshop last?</p>
                    <p>The discussion-based lecture will last about an hour, followed by a hands-on activity. Some classes, depending on the topic, may be shorter.</p>
                </li>

                <li class="list-group-item">
                    <p class="fs-4">Will there be time for questions?</p>
                    <p>Absolutely! Questions are encouraged as they are core to the structure of the class</p>
                </li>

                <li class="list-group-item">
                    <p class="fs-4">What happens after I sign up?</p>
                    <p>The first 20 people to sign up will be invited to join. All others will be placed on a waitlist. As spots open up, those on the waitlist will be invited to join.</p>
                </li>

                <li class="list-group-item">
                    <p class="fs-4">Can I invite a friend?</p>
                    <p>Feel free to share the signup link with anyone who might be interested. We will limit the number of attendees so sign up quick!</p>
                </li>
            </ul>


            <h3 id="sign-up">Sign-up</h3>
            <hr />
            <div class="m-auto text-center">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScsO7sUwMw03YumuYXJKT8E7sUZSReUFQ_LtcqA1j2L77hRRw/viewform?embedded=true"
                    width="100%" height="800">Loading…</iframe>
            </div>

        </>

    )
};

export default WorkshopPage;