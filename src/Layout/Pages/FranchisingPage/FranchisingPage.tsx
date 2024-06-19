import {Header} from "../../Components/Header/Header.tsx";
import {Footer} from "../../Components/Footer/Footer.tsx";
import styles from "./FranchisingPage.module.scss";
import {useCallback, useRef} from "react";
import {Bounce, toast} from "react-toastify";

export const FranchisingPage = () => {

    const franchiseForm = useRef<HTMLFormElement | null>(null);
    const handleFranchise = useCallback((e: { preventDefault: () => void; }) => {
        e.preventDefault();
        toast.success(`Your franchise request has been sent, we will contact you shortly!`, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
        if (franchiseForm.current) {
            franchiseForm.current.reset();
        }
    }, [])


    return (
        <>
            <Header/>
            <main className={styles.franchiseMain}>
                <section className={styles.franchiseSection}>
                    <div className={styles.sectionContent}>
                        <h1>FRANCHISING
                        </h1>
                        <p>Franchising a burger restaurant involves expanding the business by allowing individuals or
                            groups to purchase the right to open and operate their own location under the established
                            brand and business model.
                        </p>
                        <h5>Franchisees receive comprehensive support and training to ensure they maintain the same
                            quality and standards as the original restaurant. This approach enables rapid expansion of a
                            successful burger restaurant brand while providing entrepreneurs the opportunity to run
                            their own business with the backing of an established name.
                        </h5>
                        <div className={styles.imageBlock}>
                            <img src="https://stackshack.co.uk/wp-content/uploads/2023/07/DSC03293-scaled.jpg"
                                 alt="Franchise"/>
                        </div>
                        <p>We believe that franchising is a key part of our growth strategy. We are actively
                            seeking single and multi-site franchise operators who share our passion for providing
                            exceptional food and customer service.
                        </p>
                        <h5>We recognize the tremendous potential rewards that franchising offers, and we are committed
                            to supporting our franchisees with the tools, training, and resources they need to succeed.
                            One of the key benefits of franchising is the lower risk associated with a proven business
                            model. Franchise businesses typically have higher profitability and success rates than
                            non-franchised start-ups, thanks to the support and guidance provided by the
                            franchisor.</h5>
                        <h5>We are continuously seeking motivated and entrepreneurial individuals who share our vision
                            of success to join our franchisee group. Franchising is an exciting way to expand GOURMET by
                            sharing our business and its rewards with other highly motivated "Owners," while providing a
                            rapid means of growing our brand and distribution system.</h5>

                    </div>
                </section>
                <section className={styles.locationSection}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <h1>our locations</h1>
                            <p>GOURMET is looking for high-profile locations with good footfall, excellent lunchtime and
                                evening trade within cool and interesting towns and cities worldwide.</p>
                            <h5>ACCEPTABLE LOCATIONS INCLUDE:</h5>
                            <ul>
                                <li>UNIVERSITY CITIES</li>
                                <li>SHOPPING CENTRES & IN-TOWN LEISURE SCHEMES</li>
                                <li>ALL MAJOR CITIES AND TOWNS THROUGHOUT THE UK</li>
                                <li>TRANSPORT HUBS - RAILWAY STATIONS/AIRPORTS</li>
                                <li>SITES IN CLOSE PROXIMITY TO COMPLEMENTARY OPERATORS DENSELY POPULATED AREAS</li>

                            </ul>
                        </div>
                        <div className={styles.image}>
                            <img src="https://stackshack.co.uk/wp-content/uploads/2023/03/map-new.jpg"
                                 alt="new restaurants"/>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.image}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/02/img-19-copyright.jpg"
                                 alt="new restaurants"/>
                        </div>
                        <div className={styles.title}>
                            <p>If you're excited about becoming a part of our growing success, you could be an ideal
                                GOURMET Franchisee. To qualify, you'll need:</p>
                            <ul>
                                <li>A strong commitment to delivering excellent customer service.</li>
                                <li>An entrepreneurial spirit and a strong desire to succeed.</li>
                                <li>A willingness to undergo training (food or retail experience isn't essential, but
                                    the drive to learn is).
                                </li>
                                <li>The desire to be an owner-operator of a GOURMET franchise.</li>
                                <li>Good leadership skills to manage several young staff in a busy retail outlet.</li>
                                <li>High energy levels and charisma, with the ability to maintain a fun atmosphere.</li>
                                <li>The ambition to develop and grow a business and the passion to maximize a store's
                                    potential.
                                </li>
                                <li>Sound management and administrative skills.</li>
                                <li>Willingness to follow the franchisor's proven systems.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className={styles.joinSection}>
                    <div className={styles.joinContent}>
                        <img className={`${styles.decoration} ${styles.sauce}`}
                             src="https://stackshack.co.uk/wp-content/uploads/2023/03/SecretSauce.gif"
                             alt="Decoration"/>
                        <img className={`${styles.decoration} ${styles.wings}`}
                             src="https://stackshack.co.uk/wp-content/uploads/2023/03/Wings.gif"
                             alt="Decoration"/>

                        <h1>INTERESTED IN JOINING OUR FAMILY?</h1>
                        <p>If you're keen to be a part of our family operation with a successful franchising system,
                            complete the enquiry form, and we'll be in touch.</p>
                        <form
                            className={styles.formBox}
                            ref={franchiseForm}
                            onSubmit={handleFranchise}
                        >
                            <div className={styles.formRow}>
                                <div className={styles.formColumn}>
                                    <input type="text" placeholder={"first name*"} required/>
                                    <input type="email" placeholder={"email*"} required/>
                                    <input type="text" placeholder={"address line 1*"} required/>
                                    <input type="text" placeholder={"city*"} required/>
                                    <input type="text" placeholder={"post code*"} required/>
                                </div>
                                <div className={styles.formColumn}>
                                    <input type="text" placeholder={"last name*"} required/>
                                    <input type="tel" placeholder={"telephone* +994XXXXXXXXX "} required
                                           pattern="\+994\d{9}"/>
                                    <input type="text" placeholder={"address line 2"}/>
                                    <input type="text" placeholder={"county*"} required/>
                                    <input type="text" placeholder={"country*"} required/>
                                </div>
                            </div>
                            <div className={styles.formRow}>
                                <div className={`${styles.formColumn} ${styles.wideColumn}`}>
                                    <input type="text"
                                           placeholder={"What drew you to a GOURMET franchise opportunity?*"} required/>
                                    <input type="text" placeholder={"How did you come across our company?*"} required/>
                                    <input type="text" placeholder={"address line 1*"} required/>
                                    <input type="text"
                                           placeholder={"How many stores do you plan to open, and in which locations?*"}
                                           required/>
                                    <input type="text" placeholder={"What is your current occupation?*"} required/>
                                </div>
                            </div>
                            <div className={styles.container}>
                                <button className={`${styles.button} ${styles.yellowToBlackBtn}`}
                                        type={"submit"}>Submit
                                </button>
                            </div>
                        </form>
                        <div className={styles.wideText}>“Best Food <p>I have ever had”</p></div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};
