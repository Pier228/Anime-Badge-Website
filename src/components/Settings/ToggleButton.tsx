import IToggleButton from "@/interfaces/IToggleButton";
import toggle_btn from "@/styles/buttons/toggle-button.module.scss";

const ToggleButton = (params: IToggleButton) => {
    return (
        <label className={toggle_btn.switch}>
            <input
                type="checkbox"
                checked={params.isChecked}
                onChange={() => params.changeStatus()}
            />
            <span className={`${toggle_btn.slider} ${toggle_btn.round}`} />
        </label>
    );
};

export default ToggleButton;
