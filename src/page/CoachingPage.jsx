
import coaching from "../images/coaching.jpeg"

const CoachingPage = () => {
    return (
        <>

            <div class="row d-flex mb-5">
                <div class="col-lg-6 pt-4 pt-lg-0 order-1 order-lg-1 content" data-aos="fade-right">
                    <h3>Coming Soon: 1-on-1 Financial Coaching</h3>
                    <p class="fst-italic">
                        Take control of your finances with personalized coaching. No matter what life stage you find yourself at, we’ll help you set and meet your goals!
                    </p>
                    <div>
                        <box-icon name='check-circle' color="purple" size="xs"></box-icon>
                        <span class="ms-2">Personally tailored financial guidance based on your unique situation</span>
                    </div>
                    <div>
                        <box-icon name='check-circle' color="purple" size="xs"></box-icon>
                        <span class="ms-2"> Practical strategies for budgeting, saving for the future, and debt management</span>
                    </div>
                    <div>
                        <box-icon name='check-circle' color="purple" size="xs"></box-icon>
                        <span class="ms-2">A judgment-free, pragmatic approach to financial success</span>
                    </div>
                </div>
                <div class="col-lg-6 order-0 order-lg-0 text-center" data-aos="zoom-in" data-aos-delay="150">
                    <img src={coaching} class="img-fluid img-thumbnail rounded" width="75%" />
                </div>
            </div>

            <div class="m-auto text-center">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScxGRBggasY10us2veVpp4JBbTmlPd_wH-iD_tGupHj1_9NkA/viewform?embedded=true"
                    width="100%" height="800">Loading…</iframe>
            </div>

        </>
    )
};

export default CoachingPage;