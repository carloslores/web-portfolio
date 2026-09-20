import "./howIWork.scss";
import { useGlobal } from "../contexts/GlobalContext";

const HowIWork = () => {
    const { t } = useGlobal();
    const howIWork = t?.howIWork || {};
    const reasons = howIWork.reasons || [];

    return (
        <section className="section--howIWork container extra-extra-left-padding" id="howIWork">
            <div className="pretitle" data-reveal="1">
                {howIWork.pretitle}
            </div>
            <h2 data-reveal="1">{howIWork.title}</h2>
            {reasons.map((reason) => (
                <div className="table-container" key={reason.num} data-reveal="1">
                    <div className="reason-num">{reason.num}</div>
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                </div>
            ))}
        </section>
    );
};

export default HowIWork;

