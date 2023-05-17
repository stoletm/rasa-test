

import { QuestionMarkIcon } from '../SVG/SVG';
import './FAQ.scss';

const FAQ = () => {

    return (
        <div className="faq">
            <div className="faq__title">
                <QuestionMarkIcon/>
                Часто задаваемые вопросы
            </div>
            <select name="questions" className="faq__questions">
                <option value="">Как подать заявку на автокредит?</option>
            </select>
        </div>
    )
}

export default FAQ;