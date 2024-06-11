import {Link} from "react-router-dom";
import styles from "./DoubleSection.module.scss";
import {FC} from "react";

const franchiseContent: string = "Join the future of dining with our unique and independent quick service brand that\n" +
    "redefines familiar dishes into a true gourmet experience. We invite passionate\n" +
    "entrepreneurs to become part of our growing family and share in the success of\n" +
    "transforming everyday meals into extraordinary culinary delights."

const menuContent: string =
    "We are a unique and independent quick service brand that transforms familiar dishes into\n" +
    "a true gourmet experience. Our burgers and shakes are crafted with meticulous attention\n" +
    "to quality and flavor, ensuring ultimate satisfaction. Each item is designed to melt in\n" +
    "your mouth, leaving an unforgettable aftertaste."

interface DoubleSectionProps {
    reversed: boolean;
    image: string;
    link: string;
    title: string;
    btn: string;
}

export const DoubleSection: FC<DoubleSectionProps> = ({reversed, image, link, title, btn}) => {
    return (
        <section className={`${styles.doubleSection} ${reversed ? styles.franchiseSection : ""}`}>
            <div className={styles.sectionContent}>
                <div className={styles.titleContainer}>
                    <h1>{title}</h1>
                    <p>
                        {
                            reversed ?
                                franchiseContent
                                :
                                menuContent
                        }
                    </p>
                    <div className={styles.container}>
                        <Link to={link}
                              className={`${styles.button} ${reversed ? styles.yellowBtn : styles.blackToWhiteBtn}`}>{btn}</Link>
                    </div>

                </div>
                <div className={styles.menuImg}>
                    <img
                        src={image}
                        alt="Menu"/>
                </div>
            </div>
        </section>
    );
};
