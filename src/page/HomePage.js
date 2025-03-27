
import 'boxicons'

import logo from "../images/logo.png"


const HomePage = () => {
    return (
        <div className="page mt-0">

            <section id="hero" class="d-flex align-items-center">

                <div class="container-fluid" data-aos="fade-up">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Level-Up with FactorialYou</h1>
                            <h2>Empowering you to take control of your finances through the power of knowledge!</h2>
                            <div><a href="#services" class="btn-get-started scrollto">Get Started</a></div>
                        </div>
                        <div class="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
                            <img src={logo} className="img-fluid animated" alt="Logo" />;                        
                        </div>
                    </div>
                </div>

            </section>


            <section id="services" class="services section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Offerings</h2>
                    </div>

                    <div class="row gy-3">

                        <div class="col-lg-3 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                            <div class="icon-box iconbox-orange">
                                <div class="icon">
                                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                                    </svg>
                                    {/* <i class="bx bxs-chalkboard"></i> */}
                                    <box-icon name="chalkboard" type="solid" color="white" size="md"></box-icon>
                                </div>
                                <h4><a href="">Workshop</a></h4>
                                <p>Expand your yout personal finance knowledge through discussions and hands on activities!</p>
                                <div><a href="/Workshop" class="service-btn orange-service-btn">Learn More</a></div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box iconbox-blue">
                                <div class="icon">
                                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                                    </svg>
                                    {/* <i class="bx bxs-calculator"></i> */}
                                    <box-icon name="calculator" type="solid" color="white" size="md"></box-icon>
                                </div>
                                <h4><a href="">Tools</a></h4>
                                <p>Power up with our collection of tools! We take care of the math for you!</p>
                                <span class="badge badge-theme rounded-pill mt-5 p-3">Coming Soon!</span>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                            <div class="icon-box iconbox-pink">
                                <div class="icon">
                                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                                    </svg>
                                    <i class="bx bx-book-open"></i>
                                    <box-icon name="book-open" type="solid" color="white" size="md"></box-icon>
                                </div>
                                <h4><a href="">Articles</a></h4>
                                <p>Read up and learn about various topics in the personal finance space!</p>
                                <span class="badge badge-theme rounded-pill mt-5 p-3">Coming Soon!</span>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                            <div class="icon-box iconbox-teal">
                                <div class="icon">
                                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                                    </svg>
                                    <box-icon name="chat" type="solid" color="white" size="md"></box-icon>
                                </div>
                                <h4><a href="">Coaching</a></h4>
                                <p>Get one-on-one help to achieve your finacial goals!</p>
                                <div><a href="/Coaching" class="service-btn teal-service-btn">Learn More</a></div>
                            </div>
                        </div>


                    </div>

                </div>
            </section>

        </div>
    )
};

export default HomePage;