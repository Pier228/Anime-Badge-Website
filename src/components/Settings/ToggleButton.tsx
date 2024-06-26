import type IToggleButton from "@/interfaces/IToggleButton";
import toggle_btn from "@/styles/buttons/toggle-button.module.scss";
import { ForwardedRef, forwardRef } from "react";

const ToggleButton = forwardRef(
    (params: IToggleButton, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <label className={toggle_btn.switch}>
                <input
                    ref={ref}
                    type="checkbox"
                    checked={params.isChecked}
                    onChange={() => params.changeStatus()}
                    name={params.name}
                />
                <span className={`${toggle_btn.slider} ${toggle_btn.round}`} />
            </label>
        );
    }
);

export default ToggleButton;
