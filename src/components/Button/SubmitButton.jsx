// --CSS--
import './css/submitbutton.css';

function SubmitButton({ text }) {
    return(
        <div >
            <button>
                <span className="">{text}</span>
            </button>
        </div>
    );
}

export default SubmitButton;