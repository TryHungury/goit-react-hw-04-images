import Button_css from "./Button.module.css";

export const Button = ({ onClick }) => {
    return (
        <button onClick={onClick} className={Button_css.Button} type="button">LoadMore</button> 
    )
}