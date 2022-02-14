import { Spinner } from "reactstrap";

const SpinnerComponent = () => {
    return(
        <div className="spinnerWrapper">
        <Spinner >
            loading...
        </Spinner>
        </div>
    )
}

export default SpinnerComponent